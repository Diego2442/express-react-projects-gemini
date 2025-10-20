import { geminiAI } from "../config/gemini"

export const generateSummaryDescriptioin = async(input: string) => {

    const model = geminiAI.getGenerativeModel({model: 'gemini-2.5-flash'})

    const prompt = `Resume de forma clara y profesional las siguientes descripciones de algunos proyectos:\n${input} y narrame los proyectos que puedo encontrar en un solo parrafo, solo quiero que me des el parrafo nada más, y que en el agrupes todos los resumenes`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    //const match = text.match(/\*\*(.*?)\*\*/)
    //const cleanMatch = match ? match[1] : input;

    return text
}