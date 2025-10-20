import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useProjectStore } from "../store/project.store";

export const Header = () => {
  const {setOpenDialog, setResetProject} = useProjectStore()

  const handleDialogOpen = () => {
    setOpenDialog()
    setResetProject()
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Gestión de Proyectos
            </h1>
            <p className="text-muted-foreground mt-1">
              Administra y da seguimiento a todos tus proyectos
            </p>
          </div>
          <Button
            onClick={handleDialogOpen}
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-500"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Proyecto
          </Button>
        </div>
      </div>
    </header>
  );
};
