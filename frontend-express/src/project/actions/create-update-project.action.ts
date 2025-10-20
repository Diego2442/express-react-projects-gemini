import { projectApi } from "@/api/projectApi";
import type { Project } from "../types/project.type";

export const createUpdateProjectAction = async(project: Project) => {
    const isCreating = project.id.trim().length === 0
    const {id, ...projectSave} = project

    const {data} = await projectApi<Project>({
        url: isCreating ? '/' : `/${project.id}`,
        method: isCreating ? 'POST' : 'PUT',
        data: projectSave
    })

    return data

}