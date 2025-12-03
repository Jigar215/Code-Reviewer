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
import { generateAIContent } from '../services/ai.service.js';

export const getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }
    
    try {
        // ✅ Call the specific function name
        const response = await generateAIContent(prompt);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}