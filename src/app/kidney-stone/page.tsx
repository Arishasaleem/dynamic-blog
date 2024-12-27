import Link from 'next/link';
import Image from 'next/image';


const KidneyStonesBlogPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-16">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Understanding Kidney Stones</h1>

          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="/kidney.jpg" // Replace with your kidney stones image
              alt="Illustration of kidney stones in the urinary tract"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Kidney stones are hard deposits made of minerals and salts that form inside the kidneys. This guide explains their formation, symptoms, risk factors, and treatment options.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formation and Types</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Kidney stones form when certain substances become highly concentrated in urine. Common types include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Calcium stones (most common)</li>
              <li>Struvite stones (often related to infections)</li>
              <li>Uric acid stones</li>
              <li>Cystine stones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Kidney stones may not cause symptoms until they move into the ureter. Common symptoms include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Severe pain in the side and back, below the ribs</li>
              <li>Pain that radiates to the lower abdomen and groin</li>
              <li>Pain that comes in waves and fluctuates in intensity</li>
              <li>Pain on urination</li>
              <li>Pink, red or brown urine</li>
              <li>Nausea and vomiting</li>
              <li>Frequent urination</li>
              <li>Small amounts of urine</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Factors</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Dehydration</li>
              <li>Diet high in sodium, animal protein, or oxalate</li>
              <li>Family history of kidney stones</li>
              <li>Certain medical conditions (e.g., gout, hyperparathyroidism)</li>
              <li>Some medications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Treatment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Treatment depends on the size and location of the stones. Options include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Drinking plenty of water</li>
              <li>Pain relievers</li>
              <li>Medications to relax the ureter</li>
              <li>Extracorporeal shock wave lithotripsy (ESWL)</li>
              <li>Surgery (in some cases)</li>
            </ul>
          </section>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-900 hover:underline">Back to home</Link>
        </div>
        </div>
      </div>
    </main>
  );
};

export default KidneyStonesBlogPage;