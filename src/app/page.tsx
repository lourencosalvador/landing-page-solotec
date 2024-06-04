import Image from 'next/image'
import {Header} from "@/app/components/header"
import { Service } from './components/section-service'
import { Choose } from './components/section-choose'
import { Portifolio } from './components/portifolio'

export default function Home() {
  return (
    <div className='w-screen h-dvh overflow-x-hidden'>
     <Header />
     <Service />
     <Choose />
     <Portifolio />
    </div>
  )
}
