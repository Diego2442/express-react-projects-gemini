import { Request, Response, NextFunction } from 'express'
import Project from "../models/Project.model"
import { body, param, validationResult } from 'express-validator'

declare global {
    namespace Express {
        interface Request {
            project?: Project
        }
    }
}


export const validateId = async (req: Request, res: Response, next: NextFunction) => {
    await param('projectId')
        .isString().withMessage('Id invalid')
        .bail()
        .run(req)
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return
    }

    next()
}


export const validateProjectExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {projectId} = req.params

        // Validar formato UUID básico
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        
        if (!uuidRegex.test(projectId!)) {
            res.status(400).json({ error: 'invalid format' });
            return;
        }

        const project = await Project.findByPk(projectId)
        console.log(project)
        if(!project){
            const error = new Error('project not found')
            res.status(404).json({error: error.message})
            return
        }

        req.project = project
        next()
    } catch (error) {
        res.status(500).json({error: 'There was an error at middleware'})
    }
}

export const validateProjectInput = async (req: Request, res: Response, next: NextFunction) => {
    await body('name').notEmpty().withMessage('El campo name no debe estar vacío').run(req)
    await body('description').notEmpty().withMessage('El campo description no debe estar vacío').run(req)
    await body('state').notEmpty().custom(value => value === 'progreso' || value === 'finalizado').withMessage('El campo state no debe estar vacío o tiene un estado no permitido').run(req)
    await body('dateStart').notEmpty().isISO8601().toDate().withMessage('El campo dateStart no debe estar vacío o formato incorrecto').run(req)
    await body('dateEnd').notEmpty().isISO8601().toDate().withMessage('El campo dateEnd no debe estar vacío o formato incorrecto').run(req)

    next()
}

export const validateProjectInputOptional = async (req: Request, res: Response, next: NextFunction) => {
    await body('name').optional().isString().withMessage('El campo name debe ser un string').run(req)
    await body('description').optional().isString().withMessage('El campo description debe ser un string').run(req)
    await body('state').optional().isString().custom(value => value === 'progreso' || value === 'finalizado').withMessage('El campo state debe ser un string o tiene un estado no permitido').run(req)
    await body('dateStart').optional().isISO8601().toDate().withMessage('El campo dateStart es inválido').run(req)
    await body('dateEnd').optional().isISO8601().toDate().withMessage('El campo dateEnd es inválido').run(req)

    next()
}