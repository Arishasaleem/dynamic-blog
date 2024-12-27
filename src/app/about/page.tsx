import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div>
    
<section className="py-16 px-4 bg-[#f4f4f9]" id="about">
  <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 py-44">
    
    
    <div className="space-y-6" data-aos="fade-right">
      <h2 className="text-3xl font-semibold text-gray-800">About Health Ease</h2>
      <p className="text-lg text-gray-600">
        Welcome to <strong>Health Ease</strong>, your trusted resource for health and wellness information.
        Our mission is to provide reliable, easy-to-understand content that empowers individuals to take control of their health.
      </p>
      <p className="text-lg text-gray-600">
        Whether you are seeking advice on nutrition, fitness, mental well-being, or managing chronic conditions, we are here to support you with expert insights and practical tips.
      </p>
    </div>

    
    <div className="relative" data-aos="fade-left">
      <Image
        src="/doc.jpg"
        alt="Health Image"
        width={400} height={300}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default About;
