
"use client";
import React from "react";
import {Image} from "@nextui-org/image";
import {WorldMap } from "@/components/ui/world-map";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"


 
const words = ` Welcome to Health Ease, your trusted source for reliable medical
      information and healthcare solutions.Accessible, accurate medical information, empowering people to make
      informed health decisions.`


const Herosection = () => {

  return (
    <div>
   <div className="py-48">
   <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        WELCOME TO OUR BLOG{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">HEALTH EASE.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">HEALTH EASE.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>

  
  <h1 className="text-4xl sm:text-5xl font-extrabold text-center py-16 italic">HEALTH EASE</h1>

  <div className="flex flex-wrap justify-center gap-4 space-y-2 mt-8">
    <button className="px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-orange-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-orange-400 transition-all duration-200">
      Introduction
    </button>
    <button className="px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-blue-600 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-500 transition-all duration-200">
      Research Question
    </button>
    <button className="px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-green-600 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-green-500 transition-all duration-200">
      Data and Results
    </button>
  </div>
</div>

<div className="flex flex-col-reverse lg:flex-row bg-white py-10 space-y-4">
  <div className="flex-1 text-start text-blue-900 py-10 px-6 sm:py-16 sm:px-10 lg:px-16">
    <h1 className="text-4xl sm:text-5xl font-extrabold">Introduction</h1>  
    <TextGenerateEffect words={words} />
  </div>

  <div className="flex-1 flex justify-center items-center py-6 sm:py-16">
    <Image
      isZoomed
      width={240}
      height={400}
      alt="NextUI Fruit Image with Zoom"
      src="/download.jpg"
      className="rounded-lg shadow-lg"
    />
  </div>
</div>


<div className="py-10">
  <h1 className="text-4xl sm:text-5xl text-center font-extrabold text-blue-300">
    RESEARCH QUESTIONS
  </h1>
  <p className="font-bold text-center py-4 text-base sm:text-xl">
    Here is the most frequently asked question about health and Medicare.
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8">
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
      Define Research Question
    </h3>
    <p className="mt-2 text-gray-600">
      Identify the research topic and question that needs to be addressed.
    </p>
  </div>

  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Gather Data</h3>
    <p className="mt-2 text-gray-600">
      Collect data using surveys, observations, or other data-gathering methods.
    </p>
  </div>
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
      Clean and Prepare Data
    </h3>
    <p className="mt-2 text-gray-600">
      Organize and prepare the data for analysis by cleaning and handling missing values.
    </p>
  </div>
</div>

  <div className=" bg-blue-950" >
<h1 className="text-5xl text-blue-400 text-center py-11 font-extrabold ">RESEARCH METHOD</h1>
<WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
</div>

<div className="flex flex-col lg:flex-row bg-white">
  {/* Left Section */}
  <div className="flex-1 text-start  text-blue-950 py-10 px-6 sm:py-16 sm:px-10 lg:px-16">
    <h1 className="text-6xl font-semibold text-blue-950 px-20 ">Data and Results</h1>
    <p className="text-blue-950 px-20 text-2xl py-8 ">
      Here is the result of approaching <br />
      medical blog by Arisha Saleem
    </p>
  </div>

  {/* Right Section */}
  <div className="flex-1 flex justify-center items-center py-6 sm:py-16">
    <Image src="/Numerical.png" alt="not found"
    width={350} height={350} className="max-w-full h-auto" />
  </div>
</div>


<div>
<h1 className="text-4xl text-center bg-blue-950 text-white py-8"><strong>HEALTH BREAK HERE</strong></h1>

</div>
</div>

  
  
   
  )
}

export default Herosection;
