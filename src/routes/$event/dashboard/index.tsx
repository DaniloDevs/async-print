import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$event/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-screen'>
      <h1>funciona sapoora</h1>
    </div>
  )
}
