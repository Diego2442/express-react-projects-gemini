import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Delete, Edit } from "lucide-react";
import { toast } from "sonner";
import useGetProjects from "../hooks/useGetProjects";
import { useProjectStore } from "../store/project.store";
import type { Project } from "../types/project.type";



interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  finalizado: { label: "Finalizado", className: "bg-green-600 text-white" },
  progreso: { label: "Progreso", className: "bg-cyan-600 text-primary-foreground" },
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { setProject, setOpenDialog } = useProjectStore()

  const { deleteMutation } = useGetProjects()

  const statusInfo = statusConfig[project.state];

  const handleDialogOpen = () => {
    setProject(project)
    setOpenDialog()
  }

  const handleDeleteProject = () => {
    deleteMutation.mutate(project.id, {
        onSuccess: () => {
            toast.success('Proyecto Eliminado Correctamente')
        },
        onError: () => {
            toast.error('Error al eliminar el id')
        }
    })
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">
            {project.name}
          </CardTitle>
          <Badge className={statusInfo.className}>
            {statusInfo.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {format(project.dateStart, "dd MMM yyyy", { locale: es })}
            </span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {format(project.dateEnd, "dd MMM yyyy", { locale: es })}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleDialogOpen}
          className="w-full mt-2 bg-blue-300 hover:bg-blue-400 hover:text-white"
        >
          <Edit className="w-4 h-4 mr-2" />
          Editar Proyecto
        </Button>

        <Button
          variant="outline"
          size="sm"
          onDoubleClick={handleDeleteProject}
          className="w-full mt-2 bg-red-300 hover:bg-red-400 hover:text-white"
        >
          <Delete className="w-4 h-4 mr-2" />
          Dar Doble Click Para Eliminar Proyecto 
        </Button>
      </CardContent>
    </Card>
  );
};