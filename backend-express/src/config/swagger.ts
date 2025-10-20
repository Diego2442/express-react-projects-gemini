import swaggerJsdoc, { Options } from 'swagger-jsdoc'

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Project Gemini',
      version: '1.0.0',
      description: 'API para gestionar proyectos',
      contact: {
        name: 'Andy Developer'
      }
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor local'
      }
    ],
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: '123e4567-e89b-12d3-a456-426614174000'
            },
            name: {
              type: 'string',
              example: 'Proyecto Gemini'
            },
            description: {
              type: 'string',
              example: 'Una app para gestión de proyectos'
            },
            state: {
              type: 'string',
              enum: ['progreso', 'finalizado'],
              example: 'progreso'
            },
            dateStart: {
              type: 'string',
              format: 'date',
              example: '2025-10-01'
            },
            dateEnd: {
              type: 'string',
              format: 'date',
              example: '2025-12-31'
            }
          }
        },
        ProjectInput: {
          type: 'object',
          required: ['name', 'description', 'state', 'dateStart', 'dateEnd'],
          properties: {
            name: {
              type: 'string',
              example: 'Proyecto Gemini'
            },
            description: {
              type: 'string',
              example: 'Una app para gestión de proyectos'
            },
            state: {
              type: 'string',
              enum: ['progreso', 'finalizado'],
              example: 'progreso'
            },
            dateStart: {
              type: 'string',
              format: 'date',
              example: '2025-10-01'
            },
            dateEnd: {
              type: 'string',
              format: 'date',
              example: '2025-12-31'
            }
          }
        },
        ProjectInputOptional: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            state: {
              type: 'string',
              enum: ['progreso', 'finalizado']
            },
            dateStart: {
              type: 'string',
              format: 'date'
            },
            dateEnd: {
              type: 'string',
              format: 'date'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.ts'] // Asegúrate que esta ruta es correcta
}

const specs = swaggerJsdoc(options)
export default specs
