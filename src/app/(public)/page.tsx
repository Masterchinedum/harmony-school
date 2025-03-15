import Image from 'next/image';
import Link from 'next/link';
import AboutSection from '@/components/public/AboutSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/school-building.jpg" 
            alt="Harmony Unique School Building"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-harmonyPurple/40 to-harmonySky/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Harmony Unique School Logo" 
                  width={120} 
                  height={120} 
                  className="animate-pulse"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Harmony Unique School
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 font-light italic">
                &quot;Educate the mind, educate the heart&quot;
              </p>
              <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto">
                Providing quality nursery, primary and secondary education in Ewu-Urhobo, Delta State
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/admissions" 
                  className="bg-harmonyPurple hover:bg-harmonyPurpleLight text-white font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Apply for Admission
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-harmonyPurple font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Other sections will be added in subsequent phases */}
    </>
  );
}
