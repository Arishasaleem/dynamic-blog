import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Insomnia = () => {
  return (
    <div>
    <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-14">Understanding Insomnia</h1>

          <div className="mb-6 rounded-lg overflow-hidden"> 
            <Image
              src="/insomnia.png"
              alt="Person tossing and turning in bed"
              width={1200}
              height={600}
              className="object-cover w-full h-full" // Object-cover for image scaling
              priority
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Insomnia, the persistent difficulty falling or staying asleep, is a common sleep disorder affecting millions worldwide. This guide explores its types, causes, symptoms, and treatments.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Insomnia</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><span className="font-medium">Acute:</span> Short-term, often due to stress.</li>
              <li><span className="font-medium">Chronic:</span> Long-term, at least 3 nights/week for 3+ months.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Causes</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Stress, anxiety</li>
              <li>Poor sleep hygiene</li>
              <li>Medical conditions</li>
              <li>Mental health</li>
              <li>Medications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Symptoms</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Difficulty falling asleep</li>
              <li>Frequent awakenings</li>
              <li>Early morning waking</li>
              <li>Unrefreshing sleep</li>
              <li>Daytime fatigue</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Treatments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Effective treatments include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>CBT-I (Cognitive Behavioral Therapy for Insomnia)</li>
              <li>Improved sleep hygiene</li>
              <li>Medications (as prescribed)</li>
            </ul>
          </section>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-900 hover:underline">Back to home</Link>
        </div>
        </div>
      </div>
    
</main>
    </div>
  )
}

export default Insomnia
