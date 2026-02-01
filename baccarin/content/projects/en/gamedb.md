---
title: "GameDB"
category: "API Integration"
date: "2024"
image: "/Portfolio/images/projects/gamedblogo.png"
tech: ["Next.js", "TypeScript", "Tailwind CSS", "RAWG API", "GitHub Actions"]
description: "Interactive platform for searching detailed video game information, consuming real-time data from the RAWG API."
---

<!--
    GameDB - Project Documentation
    This file follows the institutional portfolio standard.
    Project developed for API studies in the Web Programming class with Professor Guto in 2024.
-->

**GameDB** is a modern web application developed to simplify the discovery and consultation of information about games across all platforms. The project was conceived as a practical study on REST API consumption, complex state management in React, and static deploy automation.

The tool allows users to search for any title from RAWG's vast catalog, viewing everything from critic scores (Metacritic) to screenshots and available platforms.

---

### Main Features

- **Global Real-Time Search:** Direct integration with the RAWG API to provide instant results on thousands of titles.
- **Dynamic API Key Management:** Implementation of a "First Run" system where the user configures their own API key, which is securely persisted in the browser (`localStorage`).
- **Details Dashboard:** Full metadata visualization, including genres, tags, ESRB ratings, and stores where the game can be purchased.
- **Screenshot Gallery:** Dynamic display of screenshots to enrich the user's visual experience.
- **Responsive Interface and Dark Mode:** Elegant design built with shadcn/ui, fully adaptable to mobile devices and desktops.

---

### Technical Stack

| Layer           | Technologies                     |
| --------------- | -------------------------------- |
| **Frontend**    | Next.js 15, React 19, TypeScript |
| **UI/UX**       | Tailwind CSS, shadcn/ui, Lucide  |
| **Integration** | RAWG API                         |
| **Deploy**      | GitHub Pages & GitHub Actions    |
| **Build**       | Next.js Static Export            |

---

### Technical Challenges and Learning

The development of GameDB focused on solving real problems of client-side applications that depend on external services.

1.  **Security and API Ownership:** To avoid improper sharing of private keys and request limits in a demonstrative environment, I implemented the logic for the user to insert their own key, ensuring the application remains independently functional.
2.  **Static Deploy with Dynamic Assets:** The configuration for **GitHub Pages** required fine-tuning in `next.config.ts`, such as disabling native image optimization (`unoptimized: true`) for external RAWG URLs and correcting the `basePath` for static routes.
3.  **Code Quality and Typing:** The rigorous use of **TypeScript** allowed mapping the complex objects returned by the API, preventing execution errors and facilitating the secure rendering of components like platform listings.

---

### Impact and Purpose

_GameDB demonstrates how the union of modern frontend technologies can transform access to large databases into a fluid and visually appealing experience, serving as a solid foundation for academic studies of systems integration._

### Visuals

![GameDB Preview 1](/Portfolio/images/projects/gamedbdemo1.png)
![GameDB Preview 2](/Portfolio/images/projects/gamedbdemo2.png)

---

### Demonstration

[Access the project →](https://jpbaccarin.github.io/GameDB-Nextjs/)
