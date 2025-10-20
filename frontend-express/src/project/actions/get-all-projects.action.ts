import { projectApi } from "@/api/projectApi"
import type { Project } from "../types/project.type"

export const getAllProjectsAction = async() => {

    const {data} = await projectApi.get<Project[]>('/')

    return data

}