---
title: "GameDB"
category: "Integração de APIs"
date: "2024"
image: "/Portfolio/images/projects/gamedblogo.png"
tech: ["Next.js", "TypeScript", "Tailwind CSS", "RAWG API", "GitHub Actions"]
description: "Plataforma interativa para busca de informações detalhadas sobre videogames, consumindo dados em tempo real da API do RAWG."
---

<!--
    GameDB - Documentação do Projeto
    Este arquivo segue o padrão de portfólio institucional.
    Projeto desenvolvido para estudos de APIs na aula de Programação Web com o professor Guto em 2024.
-->

**GameDB** é uma aplicação web moderna desenvolvida para simplificar a descoberta e consulta de informações sobre jogos de todas as plataformas. O projeto foi concebido como um estudo prático sobre o consumo de APIs REST, manipulação de estados complexos em React e automação de deploy estático.

A ferramenta permite que os usuários pesquisem por qualquer título do vasto catálogo do RAWG, visualizando desde notas da crítica (Metacritic) até capturas de tela e plataformas disponíveis.

---

### Principais Funcionalidades

- **Busca Global em Tempo Real:** Integração direta com a API do RAWG para fornecer resultados instantâneos sobre milhares de títulos.
- **Gestão de API Key Dinâmica:** Implementação de um sistema de "First Run" onde o usuário configura sua própria chave de API, que é persistida de forma segura no navegador (`localStorage`).
- **Dashboard de Detalhes:** Visualização completa de metadados, incluindo gêneros, tags, classificações ESRB e lojas onde o jogo pode ser adquirido.
- **Galeria de Capturas de Tela:** Exibição dinâmica de screenshots para enriquecer a experiência visual do usuário.
- **Interface Responsiva e Dark Mode:** Design elegante construído com shadcn/ui, totalmente adaptável a dispositivos móveis e desktops.

---

### Stack Técnica

| Camada         | Tecnologias                      |
| -------------- | -------------------------------- |
| **Frontend**   | Next.js 15, React 19, TypeScript |
| **UI/UX**      | Tailwind CSS, shadcn/ui, Lucide  |
| **Integração** | RAWG API                         |
| **Deploy**     | GitHub Pages & GitHub Actions    |
| **Build**      | Next.js Static Export            |

---

### Desafios Técnicos e Aprendizado

O desenvolvimento do GameDB focou em solucionar problemas reais de aplicações client-side que dependem de serviços externos.

1.  **Segurança e Autoria na API:** Para evitar o compartilhamento indevido de chaves privadas e limites de requisição em ambiente demonstrativo, implementei a lógica de inserção da chave pelo próprio usuário, garantindo que a aplicação seja funcional de forma independente.
2.  **Deploy Estático com Ativos Dinâmicos:** A configuração para o **GitHub Pages** exigiu ajustes finos no `next.config.ts`, como a desativação da otimização de imagem nativa (`unoptimized: true`) para URLs externas do RAWG e a correção do `basePath` para rotas estáticas.
3.  **Qualidade de Código e Tipagem:** O uso rigoroso de **TypeScript** permitiu mapear os objetos complexos retornados pela API, prevenindo erros de execução e facilitando a renderização segura de componentes como a listagem de plataformas.

---

### Impacto e Propósito

_O GameDB demonstra como a união de tecnologias modernas de frontend pode transformar o acesso a grandes bases de dados em uma experiência fluida e visualmente atraente, servindo como base sólida para estudos acadêmicos de integração de sistemas._

### Imagens

![GameDB Preview 1](/Portfolio/images/projects/gamedbdemo1.png)
![GameDB Preview 2](/Portfolio/images/projects/gamedbdemo2.png)

---

### Demonstração

[Acesse o projeto →](https://jpbaccarin.github.io/GameDB-Nextjs/)
