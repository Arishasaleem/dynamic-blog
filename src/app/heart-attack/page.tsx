import Link from 'next/link';
import Image from 'next/image';

const HeartAttackBlogPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-16">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Understanding Heart Attacks</h1>

          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="/heart attack.jpg" 
              alt="Illustration of a heart attack"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A heart attack, also known as a myocardial infarction, occurs when blood flow to the heart is blocked. This guide explains the causes, symptoms, risk factors, and vital steps to take during a heart attack.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Causes and Risk Factors</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Coronary artery disease (plaque buildup in arteries)</li>
              <li>High blood pressure</li>
              <li>High cholesterol</li>
              <li>Smoking</li>
              <li>Diabetes</li>
              <li>Obesity</li>
              <li>Family history of heart disease</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Recognizing the symptoms of a heart attack is crucial. Common signs include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Chest pain or discomfort (pressure, squeezing, fullness)</li>
              <li>Pain radiating to the left arm, shoulder, jaw, or back</li>
              <li>Shortness of breath</li>
              <li>Nausea, vomiting</li>
              <li>Lightheadedness, dizziness</li>
              <li>Cold sweat</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do During a Heart Attack</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you or someone you know experiences these symptoms:</p>
            <ul className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Call emergency services immediately (911 in the US, 112 in Europe, etc.).</li>
              <li>If advised by emergency services, chew and swallow aspirin (if not allergic).</li>
              <li>Stay calm and wait for help.</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed font-bold">Time is critical during a heart attack. Act fast!</p>
          </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prevention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Lifestyle changes can significantly reduce your risk of a heart attack:</p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                    <li>Maintain a healthy diet</li>
                    <li>Exercise regularly</li>
                    <li>Donot smoke</li>
                    <li>Manage stress</li>
                    <li>Control blood pressure and cholesterol</li>
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

export default HeartAttackBlogPage;