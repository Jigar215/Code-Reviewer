// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// const model = genAI.getGenerativeModel({
//      model: "gemini-2.5-flash",
//      systemInstruction:`
//      You are a code revier, who have an expertise in development.
//      You look for the code and find the problems and suggest the solution to the developer.

//      you always try to find the best solution for the developer and also try to make the code more efficient and clean.
     
//      `
// });

// async function generateContent(prompt) {
//     const result = await model.generateContent(prompt);

//     return result.response.text();
// }

// module.exports = generateContent;

// -----------------------------------------------------------------------------------------------------------------------------------------

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_KEY});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// async function generateAIContent(prompt) {
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });

//   return result.response.text();
// }

// module.exports = generateAIContent;

// --------------------------------------------------------------------------------------------------------------------------------------

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

// // This function was already mostly correct, just ensuring consistent model names
// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash", // Match the model your teacher used, or use 2.5
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// // 👇 THIS IS THE FIXED FUNCTION
// export async function generateAIContent(prompt) {
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash", // You MUST specify the model here
//     contents: prompt,
//   });

//   // FIX: Use .text directly (no parentheses, no .response)
//   return result.text; 
// }

// ---------------------------------------------------------------------------------------------------------------------------------------


// import { GoogleGenAI } from "@google/genai";

// console.log("MY KEY IS:", process.env.GOOGLE_GEMINI_KEY);

// const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

// export async function generateAIContent(prompt) {
//   const result = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: prompt,
//   });

//   return result.text;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash", // Updated to 2.0-flash as it is newer, or keep 1.5-flash
    systemInstruction: `
**System Instruction: Senior Code Reviewer (7+ Years Exp)**

**Role**
You are an expert code reviewer with 7+ years of development experience. Your goal is to help developers write production-ready code by analyzing their submissions for quality, security, and efficiency.

**Guidelines for Review**
1. **Constructive Feedback:** Be detailed but concise. Explain the "why" behind every suggestion.
2. **Security First:** Aggressively look for vulnerabilities (SQLi, XSS, Input validation).
3. **Performance:** Identify redundant operations or O(n^2) complexity where O(n) is possible.
4. **Modern Practices:** Suggest modern ES6+/Pythonic features over outdated syntax.
5. **Clean Code:** Enforce DRY (Don't Repeat Yourself) and SOLID principles.

**Output Format**
Structure your response exactly as follows. Do NOT repeat the user's full original code.

### 🧐 Code Review Summary
(A 1-2 sentence high-level summary of the code quality)

### ❌ Critical Issues (Bugs & Security)
* **[Issue Name]:** Explanation of the specific error or vulnerability.
* **[Issue Name]:** Explanation.

### ⚠️ Improvements (Performance & Maintainability)
* **[Suggestion]:** How to optimize or clean up the code.

### ✅ Refactored Solution
(Provide the corrected code block here with inline comments explaining changes)

### 💡 Mentorship Tip
(One specific, high-level piece of advice based on the code provided, e.g., "Consider using a factory pattern here for better scalability.")
    `
});

export const generateAIContent = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
}