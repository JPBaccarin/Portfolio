---
title: "Projeto CD: Acessibilidade em Desktop"
category: "Projeto Pessoal"
date: "2025"
image: "/images/projects/cdlogo.png"
tech: ["Tauri v2", "Rust", "React", "Shadcn UI"]
description: "Ferramenta desktop simplificada para backup de CDs musicais para idosos."
---



O **CD** nasceu de uma necessidade real: meu avô possui uma vasta coleção de coletâneas em CD e queria transferi-las para pen drives de forma autônoma. Softwares convencionais de "CD Ripping" são repletos de menus complexos, termos técnicos e anúncios.

O objetivo foi criar uma interface **"One-Button-Solution"**, onde a complexidade do sistema de arquivos e detecção de hardware ficasse totalmente invisível para o usuário final.

---

## 👴 O Projeto: Tecnologia com Propósito

Para atender ao público-alvo (meu avô), apliquei princípios de design inclusivo:

- **Hierarquia Visual Clara:** O botão de ação é o elemento dominante.
- **Feedback de Estado:** Indicador visual binário (Pen drive reconhecido vs. Não detectado) e se há espaço disponível.
- **Prevenção de Erro:** Mensagens de erro em linguagem natural, evitando códigos técnicos que poderiam causar frustração.
- **Progresso Real:** Barra de carregamento síncrona com a cópia real dos arquivos para dar segurança ao usuário.

---

## 🛠️ Stack Técnica

| Tecnologia    | Motivo da Escolha                                                        |
| :------------ | :----------------------------------------------------------------------- |
| **Tauri v2**  | Performance nativa em Rust e binários extremamente leves.                |
| **Rust**      | Segurança e velocidade na manipulação de arquivos e detecção de volumes. |
| **Shadcn UI** | Componentes consistentes e acessíveis com Tailwind CSS.                  |
| **React**     | Gerenciamento de estado da interface de forma reativa.                   |

---

## ⚙️ Desafios de Desenvolvimento

### Manipulação de Hardware com Tauri

Diferente de uma aplicação web comum, o projeto exigiu acesso direto às APIs do sistema operacional para:

1. **Identificar Volumes:** Diferenciar o drive de CD-ROM do Pen Drive automaticamente.
2. **Cálculo de Espaço:** Validar se o destino possui bytes suficientes antes de iniciar a operação, evitando erros de "disco cheio" no meio do processo.
3. **Sistema de Arquivos:** Implementar um fluxo de cópia assíncrono para que a interface não travasse durante a transferência de arquivos pesados.

---

## 🎬 O Resultado

Abaixo, uma demonstração da interface focada em simplicidade.

![Interface do Projeto CD - Foco em Simplicidade](/images/projects/cddemo.png)

