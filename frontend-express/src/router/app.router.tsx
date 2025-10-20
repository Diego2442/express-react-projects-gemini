import { ProjectLayout } from "@/project/layouts/ProjectLayout";
import { HomePage } from "@/project/pages/home/HomePage";
import { createBrowserRouter } from "react-router";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ProjectLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    }
])