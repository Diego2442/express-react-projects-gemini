import type { Project } from "../types/project.type"
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState: Project = {
        id: '',
        name: '',
        description: '',
        dateStart: '',
        dateEnd: '',
        state: 'progreso',
    }

type ProjectState = {
    selectProject: Project,
    isOpenDialog: boolean,

    setOpenDialog: () => void
    setResetProject: () => void 
    setProject: (project: Project) => void
}

export const useProjectStore = create<ProjectState>()(devtools((set, get) => ({
    selectProject: initialState,
    isOpenDialog: false,

    setOpenDialog: () => {
        set({isOpenDialog: !get().isOpenDialog})
    },
    setResetProject: () => {
        set({selectProject: initialState})
    },
    setProject: (project) => {
        set({selectProject: project})
    }
})))