import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function EnrollmentCTA() {
  return (
    <section className="relative py-20">
      {/* Background color overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-harmonySky to-harmonyPurple opacity-90 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0" 
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
           }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Child&apos;s Journey at Harmony Unique School</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Give your child the gift of quality education in a nurturing environment where they can discover their potential and build a strong foundation for their future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <div className="rounded-full bg-white p-3 inline-flex mb-4">
                <DocumentTextIcon className="h-8 w-8 text-harmonyPurple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Now</h3>
              <p className="opacity-80 mb-4">Start your application process for the upcoming academic session.</p>
              <Link 
                href="/admissions" 
                className="inline-flex items-center text-white hover:underline"
              >
                Begin Application <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <div className="rounded-full bg-white p-3 inline-flex mb-4">
                <CalendarIcon className="h-8 w-8 text-harmonyPurple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule a Visit</h3>
              <p className="opacity-80 mb-4">Tour our campus and meet with our administrators and teachers.</p>
              <Link 
                href="/contact#visit" 
                className="inline-flex items-center text-white hover:underline"
              >
                Book a Tour <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <div className="rounded-full bg-white p-3 inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-harmonyPurple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Learn More</h3>
              <p className="opacity-80 mb-4">Get detailed information about our admission requirements and programs.</p>
              <Link 
                href="/programs" 
                className="inline-flex items-center text-white hover:underline"
              >
                Explore Programs <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="mt-10">
            <Link 
              href="/admissions"
              className="bg-white text-harmonyPurple hover:bg-gray-100 font-bold py-4 px-10 rounded-md text-lg transition duration-300 inline-block"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}