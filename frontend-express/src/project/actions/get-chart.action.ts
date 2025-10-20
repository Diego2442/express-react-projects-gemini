import { projectApi } from "@/api/projectApi"

export const getChartAction = async() => {

    const {data} = await projectApi.get<{progreso: number, finalizado: number}>('/graficos')

    return data

}