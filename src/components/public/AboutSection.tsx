import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/students.jpg"
                alt="Harmony Unique School Students"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-harmonyYellow p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About Harmony Unique School
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-harmonyPurple">Our History</h3>
              <p className="text-gray-600 mb-4">
                Founded in the heart of Ewu-Urhobo over two decades ago, Harmony Unique School was established with a vision to provide quality education that develops both the intellect and character of students in Delta State and beyond.
              </p>
              <p className="text-gray-600">
                From our humble beginnings, we have grown into a leading educational institution, consistently producing well-rounded graduates who excel in their future endeavors.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-harmonyPurple">Our Mission</h3>
              <p className="text-gray-600">
                To provide a nurturing educational environment that stimulates intellectual curiosity, fosters character development, and equips students with the skills and knowledge needed to succeed in a rapidly changing world.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-harmonyPurple">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a center of educational excellence, producing graduates who are not only academically proficient but also morally upright, socially responsible, and globally competitive.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-harmonyPurple">Our Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Excellence</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Integrity</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Innovation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Respect</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Community</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-harmonyPurple">Leadership</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/about" 
                className="bg-transparent hover:bg-harmonyPurple text-harmonyPurple hover:text-white border border-harmonyPurple font-semibold py-2 px-4 rounded transition duration-300"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}