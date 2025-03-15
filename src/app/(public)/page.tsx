import Image from 'next/image';
import Link from 'next/link';
import AboutSection from '@/components/public/AboutSection';
import ProgramsSection from '@/components/public/ProgramsSection';
import FeaturesSection from '@/components/public/FeaturesSection';
import ContactPreview from '@/components/public/ContactPreview';
import EnrollmentCTA from '@/components/public/EnrollmentCTA';

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
      
      {/* Programs Section with wave separator */}
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,69.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
        <ProgramsSection />
      </div>
      
      {/* Features & Achievements Section with angled separator */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50 transform -skew-y-2 origin-top-right z-0"></div>
        <div className="relative z-10">
          <FeaturesSection />
        </div>
      </div>
      
      {/* Enrollment CTA Section */}
      <EnrollmentCTA />
      
      {/* Contact Preview Section */}
      <ContactPreview />
    </>
  );
}
