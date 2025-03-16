import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, UserGroupIcon, BuildingLibraryIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us | Harmony Unique School',
  description: 'Learn about our history, mission, vision, and values at Harmony Unique School.',
};

export default function AboutPage() {
  const values = [
    {
      name: "Excellence",
      description: "We strive for excellence in all aspects of education, pushing our students and staff to exceed expectations and achieve their full potential."
    },
    {
      name: "Integrity",
      description: "We promote honesty, accountability, and ethical behavior in all interactions within our school community."
    },
    {
      name: "Innovation",
      description: "We embrace creative thinking, new technologies, and forward-looking teaching methodologies."
    },
    {
      name: "Respect",
      description: "We foster respect for oneself, others, diversity, and the environment, creating a supportive and inclusive atmosphere."
    },
    {
      name: "Community",
      description: "We build strong relationships between students, parents, teachers, and the broader community to create a collaborative learning environment."
    },
    {
      name: "Leadership",
      description: "We develop leadership skills in our students, empowering them to become responsible citizens and future leaders."
    }
  ];

  const milestones = [
    {
      year: "2003",
      title: "School Founding",
      description: "Harmony Unique School opened its doors with just two classrooms and 45 students."
    },
    {
      year: "2007",
      title: "Primary School Addition",
      description: "Expanded to include a complete primary school program with modern facilities."
    },
    {
      year: "2010",
      title: "First Graduating Class",
      description: "Celebrated our first graduation ceremony with 100% of students advancing to quality secondary schools."
    },
    {
      year: "2013",
      title: "Secondary School Launch",
      description: "Extended our educational offerings to include secondary education."
    },
    {
      year: "2016",
      title: "Technology Integration",
      description: "Introduced comprehensive technology program and computer labs."
    },
    {
      year: "2020",
      title: "Campus Expansion",
      description: "Completed major campus expansion, including new classrooms, library, and sports facilities."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      description: "With over 20 years in education, Dr. Johnson leads our school with passion and innovative vision.",
      image: "/principal.png"
    },
    {
      name: "Mr. David Okafor",
      position: "Vice Principal, Academics",
      description: "Overseeing our curriculum development and academic excellence initiatives.",
      image: "/vice-principal.jpg"
    },
    {
      name: "Mrs. Amina Bankole",
      position: "Vice Principal, Student Affairs",
      description: "Ensuring student welfare and coordinating extracurricular activities.",
      image: "/vice-principal2.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/school-building.jpg" 
            alt="Harmony Unique School Campus"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-chart-2/30"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                About Harmony Unique School
              </h1>
              <p className="text-xl text-primary-foreground max-w-2xl mx-auto">
                Educating and nurturing young minds since 2003
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Founded in 2003, Harmony Unique School began with a clear vision: to provide quality education that develops both the intellect and character of students in Delta State and beyond.
                </p>
                <p className="text-lg text-muted-foreground">
                  From our humble beginnings with just two classrooms and 45 students, we have grown into one of the region&apos;s most respected educational institutions, consistently producing well-rounded graduates who excel in their future endeavors.
                </p>
                <p className="text-lg text-muted-foreground">
                  Over the years, we have expanded our facilities, enhanced our curriculum, and built a team of dedicated educators committed to our mission. Today, Harmony Unique School stands as a testament to what can be achieved through vision, dedication, and a steadfast commitment to educational excellence.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/school-history.jpg"
                  alt="Harmony Unique School History"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-chart-4 p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                <CalendarIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a nurturing educational environment that stimulates intellectual curiosity, fosters character development, and equips students with the skills and knowledge needed to succeed in a rapidly changing world. We aim to:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Provide high-quality education accessible to all
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Develop critical thinking and problem-solving skills
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Nurture creativity and innovation
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Build strong character and ethical values
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Promote community service and social responsibility
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <div className="rounded-full bg-chart-2/10 w-16 h-16 flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as a center of educational excellence, producing graduates who are not only academically proficient but also morally upright, socially responsible, and globally competitive.
              </p>
              <p className="mt-4 text-muted-foreground">
                We envision a school where:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-chart-2 mr-2"></span>
                  Learning is engaging, relevant, and student-centered
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-chart-2 mr-2"></span>
                  Every student discovers and develops their unique potential
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-chart-2 mr-2"></span>
                  Innovation and technology enhance traditional educational practices
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-chart-2 mr-2"></span>
                  Diversity is celebrated and inclusion is championed
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-chart-2 mr-2"></span>
                  Graduates are prepared to meet both local and global challenges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              These values form the foundation of our educational philosophy and guide all aspects of our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.name}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Leadership Team</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Meet the dedicated professionals who lead Harmony Unique School.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image
                    src={member.image || "/avatar-placeholder.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
{/*           
          <div className="text-center mt-12">
            <Link 
              href="/team" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Meet Our Full Team
            </Link>
          </div> */}
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Key milestones in the history of Harmony Unique School.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="bg-card p-6 rounded-lg shadow-md md:max-w-md relative">
                      <div className="absolute top-6 hidden md:block text-primary">
                        {index % 2 === 0 ? (
                          <div className="w-4 h-4 rounded-full bg-primary -left-[3.25rem] absolute"></div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-primary -right-[3.25rem] absolute"></div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{milestone.title}</h3>
                      <p className="text-primary font-semibold mb-3">{milestone.year}</p>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Facilities</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We provide state-of-the-art facilities to ensure an optimal learning environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BuildingLibraryIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Modern Classrooms</h3>
              <p className="text-muted-foreground">
                Spacious, well-lit classrooms equipped with modern teaching aids and technology.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-chart-2/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-chart-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Science Laboratories</h3>
              <p className="text-muted-foreground">
                Well-equipped science labs for physics, chemistry, and biology experiments.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-chart-4/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-chart-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Library</h3>
              <p className="text-muted-foreground">
                Extensive collection of books, digital resources, and comfortable study spaces.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-chart-3/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-chart-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Computer Lab</h3>
              <p className="text-muted-foreground">
                Modern computer facilities with high-speed internet access for digital learning.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-chart-5/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-chart-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sports Facilities</h3>
              <p className="text-muted-foreground">
                Sports fields, basketball court, and facilities for various physical activities.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-chart-1/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-chart-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Arts & Music Studios</h3>
              <p className="text-muted-foreground">
                Dedicated spaces for creative expression, music practice, and performing arts.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/facilities" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Take a Virtual Tour
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">Begin Your Child&apos;s Journey With Us</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              We invite you to visit our campus and learn more about the Harmony Unique School experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/admissions" 
                className="bg-white hover:bg-opacity-90 text-primary font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Apply for Admission
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md border border-white transition duration-300"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}