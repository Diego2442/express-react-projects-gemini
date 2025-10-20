import * as z from 'zod'

export const ProjectFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, {message: 'El name no debe ir vacio'}),
    description: z.string().min(1, {message: 'El description no debe ir vacio'}),
    status: z.string().min(1, {message: 'El status no debe ir vacio'}),
    dateStart: z.string().min(1, {message: 'El dateStart no debe ir vacio'}),
    dateEnd: z.string().min(1, {message: 'El dateEnd no debe ir vacio'})
}).refine((data) => data.status === 'proceso' || data.status === 'finalizado', {
    message: 'Los datos no son válidos',
    path: ['status']
})


export const ErrorResponseSchema = z.object({
    error: z.string()
})