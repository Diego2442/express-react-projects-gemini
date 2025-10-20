import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from 'dotenv'

dotenv.config
const apiKey = process.env.API_KEY_GEMINI

if(!apiKey) {
    throw new Error('API_KEY_GEMINI is not defined in .env')
}

export const geminiAI = new GoogleGenerativeAI(apiKey) 