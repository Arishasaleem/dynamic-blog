import Herosection from "@/components/herosection"
import { Health } from "@/components/ui/routes"
import Comment from "@/components/ui/comment"

export default function Home() {
  return (
  <main className=' text-white min-h-screen bg-blue-950/[0.96] antialiased bg-grid-white/[0.02]'>
     <h1 className='text-center'></h1>
      < Herosection/>
     < Health />
     < Comment/>
      </main>
  
  )
}
