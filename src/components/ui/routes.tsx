"use client";
import Image from "next/image";

import Link from "next/link";
import { HealthData } from "@/data/content";

export function Health() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
    {HealthData.map((item) => (
      <Link key={item.id} href={`/blog/${item.id}`} className="group">
        {/* Card Container */}
        <div className="relative h-96 flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.img}')` }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-6">
            {/* Header: Avatar and Name */}
            <div className="flex items-center space-x-4">
              <Image
                height={40}
                width={40}
                alt={`${item.name}'s avatar`}
                src={item.img}
                className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-gray-300">2 min read</p>
              </div>
            </div>
  
            {/* Title and Description */}
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white">
                {item.title}
              </h1>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
}