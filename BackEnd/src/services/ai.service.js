// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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

import { GoogleGenAI } from "@google/genai";

export async function generateAIContent(prompt) {
    // ⬇️ MOVED INSIDE: Now it waits until the function is actually called
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });
    
    const result = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });

    return result.text;
}
