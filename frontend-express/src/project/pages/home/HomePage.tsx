import { CreateProjectDialog } from "@/project/components/CreateProjectDialog";
import { ProjectCard } from "@/project/components/ProjectCard";
import { ProjectSummary } from "@/project/components/ProjectSummary";
import useGetProjects from "@/project/hooks/useGetProjects";

export const HomePage = () => {
  const {query} = useGetProjects();
  const { data: projects, isLoading } = query

  if(isLoading) return <h2>Cargando...</h2>

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects List - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Lista de Proyectos
              </h2>
              <div className="grid gap-6">
                {projects?.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Summary Panel - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ProjectSummary projects={projects ?? []} />
            </div>
          </div>
        </div>
      </main>

      {/* Create/Edit Dialog */}
      <CreateProjectDialog
        /* open={isOpenDialog}
        onOpenChange={setOpenDialog}
        onSave={handleSaveProject}
        editingProject={editingProject} */
      />
    </>
  );
};
