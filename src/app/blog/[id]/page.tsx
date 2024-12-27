import { HealthData } from "@/data/content";
import { Comme } from "next/font/google";
import Image from "next/image";


interface Data {
    id:number,
    name:string,
    title:string,
    img:string,
    description:string
    treatment:string
}


export default async function Blogs({params}:{params:Promise<{id:string}>}){
    const id = (await params).id
    const data:Data = HealthData[parseInt(id)-1]

    return (
        <main className="bg-[#0f2155] min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="md:flex gap-6 items-center bg-white shadow-md rounded-xl p-6">
            {/* Image */}
            <div className="flex-shrink-0 sm:py-44">
              <Image
                src={data.img}
                alt="Health issue"
                height={150}
                width={250}
                className="rounded-lg object-cover border border-[#e5e3e2]"
              />
            </div>
      
            {/* Content */}
            <div className=" py-40 md:mt-0">
              <h1 className="text-4xl font-extrabold text-[#5a5a5a]">
                <span className="text-[#3c1ad6]">{data.title}:</span>
              </h1>
              <p className="text-[#7d7d7d] mt-2 text-lg font-sans leading-relaxed">
                {data.description}
              </p>
              <p className="text-[#7d7d7d] mt-2 text-lg font-sans leading-relaxed">
                {data.treatment}
              </p>
              
            </div>
          </div>

          
          
        </div>
      

      </main>

)

}