import { Outlet } from 'react-router'
import { Header } from '../components/Header'

export const ProjectLayout = () => {

  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
        <Header/>
        <Outlet/>
    </div>
  )
}
