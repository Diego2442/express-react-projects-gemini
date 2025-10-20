import { Request, Response} from 'express'
import Project from '../models/Project.model'
import { generateSummaryDescriptioin } from '../utilities/generateSummaryDescription'

export class ProjectController {

    static getAll = async (req: Request, res: Response) => {
        try {
            const projects = await Project.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                attributes: {exclude: ['createdAt', 'updatedAt']}
            })

            res.json(projects)
        } catch (error) {
            res.status(500).json({error: 'there was an error'})
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const project = await Project.create(req.body)
            await project.save()
            //res.status(201).json('Project created success') 
            const {id, name, description, state, dateStart, dateEnd} = project
            const data = {id, name, description, state, dateStart, dateEnd}
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'There was an error'})
        }
    }

    static updateById = async (req: Request, res: Response) => {
        const result = await req.project!.update(req.body)
        const {id, name, description, state, dateStart, dateEnd} = result
        const data = {id, name, description, state, dateStart, dateEnd}
        //res.json('Project updated success')
        res.json(data)
    }

    static deleteById = async (req: Request, res: Response) => {
        await req.project!.destroy()
        res.status(204).json('Project Deleted success')
    }

    static chart = async (req: Request, res: Response) => {
        try {
            const projects = await Project.findAll({
                attributes: ['state']
            })

            const counts = projects.reduce((acc, project) => {
                acc[project.state] = (acc[project.state] || 0) + 1;
                return acc;
                }, {} as Record<string, number>
            );

            res.json(counts)
        } catch (error) {
            res.status(500).json({error: 'Error al generar los datos del gráfico'})
        }
    }

    static summaryDescription = async (req: Request, res: Response) => {
        try {
            const projects = await Project.findAll();
            const descriptions = projects.map(p => p.description).join('\n');

            const summary = await generateSummaryDescriptioin(descriptions);

            res.json({ summary });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error generating summary' });
        }
    }
}