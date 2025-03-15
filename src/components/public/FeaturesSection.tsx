import { 
  TrophyIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  MusicalNoteIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const achievements = [
    {
      title: 'Best School Award',
      description: 'Recognized as one of the top schools in Delta State for overall academic excellence.',
      icon: <TrophyIcon className="h-8 w-8 text-yellow-500" />
    },
    {
      title: '98% College Placement',
      description: 'Our graduates have a remarkable success rate of admission into prestigious universities.',
      icon: <AcademicCapIcon className="h-8 w-8 text-harmonyPurple" />
    },
    {
      title: 'STEM Excellence',
      description: 'Multiple wins in regional and national science and mathematics competitions.',
      icon: <BeakerIcon className="h-8 w-8 text-blue-500" />
    }
  ];

  const features = [
    {
      title: 'Expert Faculty',
      description: 'Highly qualified teachers dedicated to student success and continuous improvement.',
      icon: <UserGroupIcon className="h-10 w-10 text-harmonyPurple" />
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms, libraries, laboratories, and recreational spaces.',
      icon: <BuildingLibraryIcon className="h-10 w-10 text-harmonySky" />
    },
    {
      title: 'Technology Integration',
      description: 'State-of-the-art technology resources enhancing the learning experience.',
      icon: <ComputerDesktopIcon className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Science & Innovation',
      description: 'Specialized science programs and innovation labs for practical learning.',
      icon: <BeakerIcon className="h-10 w-10 text-green-500" />
    },
    {
      title: 'Arts & Culture',
      description: 'Robust arts education including music, drama, dance, and visual arts.',
      icon: <MusicalNoteIcon className="h-10 w-10 text-purple-500" />
    },
    {
      title: 'Character Development',
      description: 'Focus on building integrity, leadership, and community service mindset.',
      icon: <HeartIcon className="h-10 w-10 text-red-500" />
    }
  ];

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-6 md:px-12">
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Awards & Recognitions</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Harmony Unique School has been recognized for excellence in various aspects of education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-harmonyPurple hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-harmonyPurpleLight">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Makes Us Unique</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We provide a comprehensive education that nurtures the whole child through these key features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">
                  <div className="p-3 rounded-md bg-gray-50">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}