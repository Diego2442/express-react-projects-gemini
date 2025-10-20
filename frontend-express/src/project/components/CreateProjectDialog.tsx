import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import useGetProjects from "../hooks/useGetProjects";
import { useProjectStore } from "../store/project.store";
import type { Project } from "../types/project.type";

export const CreateProjectDialog = ({}) => {

  const { isOpenDialog, selectProject, setOpenDialog } = useProjectStore();
  const {updateCreateMutation} = useGetProjects()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Project>({
    defaultValues: selectProject,
  });

  const onSubmit = (data: Project) => {

    updateCreateMutation.mutate(data, {
        onSuccess: () => {
            toast.success("Proyecto guardado con éxito");
            setOpenDialog();
        },
        onError: () => {
            toast.error("Ocurrió un error intenta de nuevo")
        }
    })


  };

  useEffect(() => {
    if (selectProject) {
      reset({
        ...selectProject,
        dateStart: selectProject.dateStart?.split("T")[0] || "",
        dateEnd: selectProject.dateEnd?.split("T")[0] || "",
      });
    }
  }, [selectProject, reset]);

  return (
    <Dialog open={isOpenDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Formulario</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Proyecto</Label>
              <Input
                {...register("name", { required: true })}
                id="name"
                placeholder="Mi Proyecto Increíble"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">
                  El nombre no puede estar vacío
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                {...register("description", { required: true })}
                placeholder="Describe tu proyecto..."
                rows={3}
              />
              {errors.description && (
                <p className="text-red-600 text-sm">
                  La descripción no puede estar vacía
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">Estado</Label>
              <Controller
                name="state"
                control={control}
                defaultValue={selectProject?.state || ""}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="progreso">Progreso</SelectItem>
                      <SelectItem value="finalizado">Finalizado</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateStart">Fecha de Inicio</Label>
                <Input
                  id="dateStart"
                  type="date"
                  {...register("dateStart", { required: true })}
                />
                {errors.dateStart && (
                  <p className="text-red-600 text-sm">
                    Se debe definir fecha inicial
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateEnd">Fecha de Fin</Label>
                <Input
                  id="dateEnd"
                  type="date"
                  {...register("dateEnd", { required: true })}
                />
                {errors.dateEnd && (
                  <p className="text-red-600 text-sm">
                    Se debe definir fecha Final
                  </p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={setOpenDialog}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Cambios</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
