import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { FileText } from "lucide-react";
import { useState } from "react";
import { getSummaryAIAction } from "../actions/get-summary-ai.action";

export const SummaryAI = () => {
    const [showSummary, setShowSummary] = useState(false);

    const {data, isLoading} = useQuery({
        queryKey: ['summaryAI'],
        queryFn: getSummaryAIAction
    })

  
  return (
    <>
      <Button
        onClick={() => setShowSummary(!showSummary)}
        className="w-full"
        variant="outline"
      >
        <FileText className="w-4 h-4 mr-2" />
        Generar Resumen AI
      </Button>

      {showSummary && (
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Resumen Textual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isLoading ?
                'Cargando...'
              :
                data?.summary
              }
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};
