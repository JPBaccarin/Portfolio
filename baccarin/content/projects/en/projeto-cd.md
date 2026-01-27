---
title: "Project CD: Desktop Accessibility"
category: "Personal Project"
date: "2025"
image: "/images/projects/cdlogo.png"
tech: ["Tauri v2", "Rust", "React", "Shadcn UI"]
description: "Simplified desktop tool for elderly people to backup classic music CDs."
---



**Project CD** was born from a real need: my grandfather has a vast collection of music CDs and wanted to transfer them to USB sticks autonomously. Conventional "CD Ripping" software is full of complex menus, technical terms, and ads.

The goal was to create a **"One-Button-Solution"** interface, where the complexity of the file system and hardware detection remained completely invisible to the end user.

---

## 👴 The Project: Technology with Purpose

To serve the target audience (my grandfather), I applied inclusive design principles:

- **Clear Visual Hierarchy:** The action button is the dominant element.
- **State Feedback:** Binary visual indicator (USB Drive recognized vs. Not detected) and available space status.
- **Error Prevention:** Natural language error messages, avoiding technical codes that could cause frustration.
- **Real Progress:** Synchronous loading bar with the actual file copy to provide security to the user.

---

## 🛠️ Technical Stack

| Technology    | Reason for Choice                                         |
| :------------ | :-------------------------------------------------------- |
| **Tauri v2**  | Native Rust performance and extremely light binaries.     |
| **Rust**      | Security and speed in file handling and volume detection. |
| **Shadcn UI** | Consistent and accessible components with Tailwind CSS.   |
| **React**     | Reactive UI state management.                             |

---

## ⚙️ Development Challenges

### Hardware Manipulation with Tauri

Unlike a standard web application, the project required direct access to OS APIs to:

1. **Identify Volumes:** Automatically differentiate the CD-ROM drive from the USB Drive.
2. **Space Calculation:** Validate if the destination has enough bytes before starting the operation, avoiding "disk full" errors mid-process.
3. **File System:** Implement an asynchronous copy flow so that the interface wouldn't freeze during heavy file transfers.

---

## 🎬 The Result

Below is a demonstration of the interface focused on simplicity.

![Project CD Interface - Simplicity Focus](/images/projects/cddemo.png)

