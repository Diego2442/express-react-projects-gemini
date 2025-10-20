/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Endpoints para gestionar proyectos
 */

import { Router } from "express";
import {
  validateId,
  validateProjectExists,
  validateProjectInput,
  validateProjectInputOptional,
} from "../middlewares/project.middleware";
import { handleInputErrors } from "../middlewares/validation.middleware";
import { ProjectController } from "../controllers/Project.controller";

const router = Router();

router.param("projectId", validateProjectExists);
router.param("projectId", validateId);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Obtener todos los proyectos
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Lista de proyectos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
router.get("/", ProjectController.getAll);

/**
 * @swagger
 * /api/projects/graficos:
 *   get:
 *     summary: Obtener conteo de proyectos por estado
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Conteo por estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 */
router.get("/graficos", ProjectController.chart);

/**
 * @swagger
 * /api/projects/analisis:
 *   get:
 *     summary: Obtener resumen de las descripciones de los proyectos
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Resumen generado por IA
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 summary:
 *                   type: string
 */
router.get("/analisis", ProjectController.summaryDescription);

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Crear un nuevo proyecto
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectInput'
 *     responses:
 *       201:
 *         description: Proyecto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Error de validación
 */
router.post("/", validateProjectInput, handleInputErrors, ProjectController.create);

/**
 * @swagger
 * /api/projects/{projectId}:
 *   put:
 *     summary: Actualizar un proyecto por ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID del proyecto (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectInputOptional'
 *     responses:
 *       200:
 *         description: Proyecto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Proyecto no encontrado
 */
router.put("/:projectId", validateProjectInputOptional, handleInputErrors, ProjectController.updateById);

/**
 * @swagger
 * /api/projects/{projectId}:
 *   delete:
 *     summary: Eliminar un proyecto
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       204:
 *         description: Proyecto eliminado
 *       404:
 *         description: Proyecto no encontrado
 */
router.delete("/:projectId", handleInputErrors, ProjectController.deleteById);

export default router;
