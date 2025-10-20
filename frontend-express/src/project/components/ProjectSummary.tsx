import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CheckCircle2 } from "lucide-react";
import type { Project } from "../types/project.type";
import { Chart } from "./Chart";
import { SummaryAI } from "./SummaryAI";

interface ProjectSummaryProps {
  projects: Project[];
}

export const ProjectSummary = ({ projects }: ProjectSummaryProps) => {
  const stats = {
    total: projects.length,
    progreso: projects.filter((p) => p.state === "progreso").length,
    finalizado: projects.filter((p) => p.state === "finalizado").length,
  };

  const statCards = [
    {
      label: "Finalizado",
      value: stats.finalizado,
      icon: BarChart3,
      color: "text-success",
    },
    {
      label: "Progreso",
      value: stats.progreso,
      icon: CheckCircle2,
      color: "text-primary",
    },
  ];

  return (
    <div className="space-y-6">
      <SummaryAI />

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">
            Resumen de Proyectos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary mb-2">
            {stats.total}
          </div>
          <p className="text-muted-foreground">Proyectos Totales</p>
          <Chart />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
