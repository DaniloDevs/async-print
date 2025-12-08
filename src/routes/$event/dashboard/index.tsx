import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$event/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen">
      
    </div>
  )
}
