import Link from 'next/link';
import { BookOpenIcon, UserGroupIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ProgramsSection() {
  const programs = [
    {
      id: 'nursery',
      name: 'Nursery School',
      icon: <UserGroupIcon className="h-12 w-12 text-harmonyPurple" />,
      description: 'A nurturing environment where young learners begin their educational journey through play-based learning and discovery.',
      ageRange: '3-5 years',
      features: [
        'Child-centered learning approach',
        'Development of social and emotional skills',
        'Introduction to literacy and numeracy',
        'Creative arts and music exploration',
        'Safe and stimulating environment'
      ],
      color: 'bg-harmonyPurpleLight'
    },
    {
      id: 'primary',
      name: 'Primary School',
      icon: <BookOpenIcon className="h-12 w-12 text-harmonySky" />,
      description: 'Building strong academic foundations while fostering curiosity and critical thinking skills in a supportive community.',
      ageRange: '6-11 years',
      features: [
        'Comprehensive curriculum aligned with national standards',
        'Focus on literacy, numeracy, and science',
        'Character development and values education',
        'Sports, arts, and cultural activities',
        'Technology-integrated learning'
      ],
      color: 'bg-harmonySkyLight'
    },
    {
      id: 'secondary',
      name: 'Secondary School',
      icon: <AcademicCapIcon className="h-12 w-12 text-harmonyYellow" />,
      description: 'Preparing students for future success through rigorous academics, leadership opportunities, and personal development.',
      ageRange: '12-18 years',
      features: [
        'Comprehensive academic curriculum',
        'College and career preparation',
        'Leadership and community service opportunities',
        'Advanced technology and laboratory facilities',
        'Diverse extracurricular activities'
      ],
      color: 'bg-harmonyYellowLight'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="programs">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Educational Programs</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            At Harmony Unique School, we provide comprehensive education across all levels, nurturing students from their early years through adolescence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${program.color} border border-gray-200`}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>{program.icon}</div>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white text-gray-700">
                    Ages {program.ageRange}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{program.name}</h3>
                <p className="text-gray-700 mb-6">{program.description}</p>
                
                <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                <ul className="mb-8 space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/programs#${program.id}`}
                  className="inline-block px-6 py-2 bg-white text-harmonyPurple border border-harmonyPurple rounded-md hover:bg-harmonyPurple hover:text-white transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}