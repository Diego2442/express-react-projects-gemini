import { projectApi } from "@/api/projectApi"

export const getSummaryAIAction = async() => {
    const {data} = await projectApi.get<{summary: string}>('/analisis')
    return data
}