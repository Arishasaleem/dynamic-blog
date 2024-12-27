import Link from 'next/link';
import Image from 'next/image';

const CancerBlogPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-20">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Understanding Cancer</h1>

          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="/cancer.jpg" // Replace with your cancer image
              alt="Microscopic view of cancer cells"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cancer is a complex group of diseases characterized by the uncontrolled growth and spread of abnormal cells. This guide provides an overview of cancer, including its types, causes, symptoms, and treatment options.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cancer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Cancer can originate in any part of the body. Some common types include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Carcinoma (originates in the skin or tissues lining organs)</li>
              <li>Sarcoma (develops in bone, muscle, or connective tissue)</li>
              <li>Leukemia (cancers of the blood-forming tissues)</li>
              <li>Lymphoma (cancers of the lymphatic system)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Causes and Risk Factors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">While the exact cause of many cancers is unknown, several factors can increase the risk:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Genetic mutations</li>
              <li>Environmental factors (e.g., exposure to carcinogens)</li>
              <li>Lifestyle choices (e.g., smoking, unhealthy diet)</li>
              <li>Age</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Cancer symptoms vary widely depending on the type and location. Some general signs may include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Unexplained weight loss</li>
              <li>Fatigue</li>
              <li>Persistent pain</li>
              <li>Changes in bowel or bladder habits</li>
              <li>Unusual bleeding or discharge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Treatment Options</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Cancer treatment depends on the type, stage, and other factors. Common approaches include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Surgery</li>
              <li>Chemotherapy</li>
              <li>Radiation therapy</li>
              <li>Immunotherapy</li>
              <li>Targeted therapy</li>
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

export default CancerBlogPage;