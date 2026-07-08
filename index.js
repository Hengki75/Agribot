require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const ai = newGoogleGenAI();
//Bagaimana cara perawatan cabai merah keriting?
const response = await ai.models.generateContent({ model: 'gemini-2.5', contents: 'Bagaimana cara perawatan cabai merah keriting?' }); console.log(response.text);
