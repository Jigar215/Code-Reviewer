// const aiService = require('../services/ai.service');

// module.exports.getResponse = async (req, res) => {
//     const prompt = req.query.prompt;

//     if (!prompt) {
//         return res.status(400).json({ error: "Prompt is required" });
//     }
    
//     const response = await aiService(prompt);
//     res.send(response);
// }



// ✅ Use 'import' with curly braces
// import { generateAIContent } from '../services/ai.service.js';

// export const getReview = async (req, res) => {
//     const code = req.query.prompt;

//     if (!code) {
//         return res.status(400).json({ error: "Prompt is required" });
//     }
    
//     try {
//         // ✅ Call the specific function name
//         const response = await generateAIContent(code);
//         res.send(response);
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// }



import { generateAIContent } from '../services/ai.service.js';

export const getReview = async (req, res) => {
    // Usually code is sent in the body, not query params
    const code = req.body.code; 

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await generateAIContent(code);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}