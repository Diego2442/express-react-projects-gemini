import { projectApi } from "@/api/projectApi";
import type { Project } from "../types/project.type";

export const deleteProjectAction = async(id: Project['id']) => {
     return projectApi.delete(`/${id}`)
}