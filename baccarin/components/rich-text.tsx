import React from "react";
import Link from "next/link";

/**
 * Serializador para o conteúdo Lexical do Payload CMS.
 * Converte a árvore de nós do Lexical em elementos React básicos.
 * Utiliza as classes do arquivo globals.css (.markdown-content)
 */
export interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
  headerState?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

export const RichText = ({ content }: { content: { root: { children: LexicalNode[] } } }) => {
  if (!content || !content.root || !content.root.children) {
    return null;
  }

  const renderNodes = (nodes: LexicalNode[] | undefined): React.ReactNode[] => {
    if (!nodes) return [];

    return nodes.map((node, index) => {
      // Nó de Texto
      if (node.type === "text") {
        let text: React.ReactNode = node.text;

        // Formatações (Bold, Italic, Strikethrough, Underline, Code)
        // Valores binários do Lexical: 1=Bold, 2=Italic, 4=Strikethrough, 8=Underline, 16=Code
        const format = node.format || 0;
        if (format & 1) text = <strong key={`b-${index}`}>{text}</strong>;
        if (format & 2) text = <em key={`i-${index}`}>{text}</em>;
        if (format & 8) text = <u key={`u-${index}`}>{text}</u>;
        if (format & 16) text = <code key={`c-${index}`}>{text}</code>;

        return text;
      }

      // Parágrafo
      if (node.type === "paragraph") {
        return <p key={index}>{renderNodes(node.children)}</p>;
      }

      // Cabeçalhos (Heading)
      if (node.type === "heading") {
        const Tag = (node.tag || "h2") as React.ElementType;
        return <Tag key={index}>{renderNodes(node.children)}</Tag>;
      }

      // Listas
      if (node.type === "list") {
        const Tag = (node.listType === "bullet" ? "ul" : "ol") as React.ElementType;
        return <Tag key={index}>{renderNodes(node.children)}</Tag>;
      }

      // Item de Lista
      if (node.type === "listitem") {
        return <li key={index}>{renderNodes(node.children)}</li>;
      }

      // Links
      if (node.type === "link") {
        const isExternal = node.fields?.newTab;
        return (
          <Link
            key={index}
            href={node.fields?.url || "#"}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {renderNodes(node.children)}
          </Link>
        );
      }

      // Citação (Quote)
      if (node.type === "quote") {
        return <blockquote key={index}>{renderNodes(node.children)}</blockquote>;
      }

      // Linha Horizontal (HR)
      if (node.type === "horizontalrule") {
        return <hr key={index} />;
      }

      // TABELAS
      if (node.type === "table") {
        return (
          <table key={index}>
            <tbody>{renderNodes(node.children)}</tbody>
          </table>
        );
      }

      if (node.type === "tablerow") {
        return <tr key={index}>{renderNodes(node.children)}</tr>;
      }

      if (node.type === "tablecell") {
        // No Lexical, o tablecell pode ser header
        const Tag = (node.headerState ? "th" : "td") as React.ElementType;
        return (
          <Tag
            key={index}
            colSpan={(node.colSpan ?? 0) > 1 ? node.colSpan : undefined}
            rowSpan={(node.rowSpan ?? 0) > 1 ? node.rowSpan : undefined}
          >
            {renderNodes(node.children)}
          </Tag>
        );
      }

      // Tratamento para nós desconhecidos
      if (node.children) {
        return <React.Fragment key={index}>{renderNodes(node.children)}</React.Fragment>;
      }

      return null;
    });
  };

  return <div className="markdown-content rich-text-container">{renderNodes(content.root.children)}</div>;
};
