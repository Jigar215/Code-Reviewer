# 🤖 AI Code Reviewer

An intelligent code review assistant powered by **Google Gemini AI**. This application allows developers to input code snippets, receive instant feedback, identify bugs, and get suggestions for optimization—all within a clean, modern interface.

![Project Screenshot](./screenshot.png)
*(Note: You can add the screenshot you showed me earlier here by naming it screenshot.png)*

## 🚀 Features

-   **AI-Powered Review**: Uses Google Gemini 2.5 Flash to analyze code for errors, readability, and performance.
-   **Syntax Highlighting**: Beautiful code editor with `prismjs` (Tomorrow Night theme).
-   **Markdown Support**: The AI's response is rendered in clean Markdown with syntax highlighting for code blocks.
-   **Split Interface**: Side-by-side view of your code and the AI's feedback.

## 🛠️ Tech Stack

### Frontend
-   **React.js** (Vite)
-   **PrismJS** & **React Simple Code Editor** (For the code input)
-   **React Markdown** & **Rehype Highlight** (For rendering AI responses)
-   **Axios** (API requests)

### Backend
-   **Node.js** & **Express.js**
-   **Google Generative AI SDK** (Gemini)
-   **Cors** (Cross-Origin Resource Sharing)

---

## 📂 Project Structure

```bash
Code-Reviewer/
├── BackEnd/        # Node.js API Server
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   └── .env
└── Frontend/       # React Application
    ├── src/
    └── package.json