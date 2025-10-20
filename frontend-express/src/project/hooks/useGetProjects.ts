import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProjectsAction } from "../actions/get-all-projects.action";
import { createUpdateProjectAction } from "../actions/create-update-project.action";
import { deleteProjectAction } from "../actions/delete-project.action";

export default function useGetProjects() {

    const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjectsAction,
    staleTime: 1000 * 60 * 5
  })

  const updateCreateMutation = useMutation({
    mutationFn: createUpdateProjectAction,
    onSuccess: (project) => {
        queryClient.invalidateQueries({queryKey: ['projects']})
        queryClient.invalidateQueries({queryKey: ['summaryAI']})
        queryClient.invalidateQueries({queryKey: ['chartSummary']})

        queryClient.setQueryData(['projects', {id: project.id}], project)
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deleteProjectAction,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['projects']})
    }
  })

  return {
    query,
    updateCreateMutation,
    deleteMutation
  }
}
