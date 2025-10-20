type Status = 'progreso' | 'finalizado'

export interface Project {
    id: string,
    name: string,
    description: string,
    state: Status,
    dateStart: string,
    dateEnd: string
}
 