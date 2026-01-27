import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getProjectData(slug: string, lang: string) {
  const fullPath = path.join(projectsDirectory, lang, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      category: string;
      date: string;
      image: string;
      description: string;
      tech: string[];
    }),
  };
}

export function getAllProjectSlugs() {
  // We'll assume slugs are the same across languages
  const ptPath = path.join(projectsDirectory, "pt");

  if (!fs.existsSync(ptPath)) return [];

  const fileNames = fs.readdirSync(ptPath);

  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ""),
    };
  });
}

export function getProjectList(lang: string) {
  const langPath = path.join(projectsDirectory, lang);

  if (!fs.existsSync(langPath)) return [];

  const fileNames = fs.readdirSync(langPath);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(langPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        title: string;
        category: string;
        date: string;
        image: string;
        description: string;
        tech: string[];
      }),
    };
  });
}
