import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from './components/ui/tooltip'
import { Toaster } from 'sonner'
import { appRouter } from './router/app.router'

const queryClient = new QueryClient()

function ProjectApp() {
  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      
      <RouterProvider router={appRouter}/>
    </TooltipProvider>
  </QueryClientProvider>
  )
}

export default ProjectApp
