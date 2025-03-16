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
      icon: <TrophyIcon className="h-8 w-8 text-chart-4" />
    },
    {
      title: '98% College Placement',
      description: 'Our graduates have a remarkable success rate of admission into prestigious universities.',
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'STEM Excellence',
      description: 'Multiple wins in regional and national science and mathematics competitions.',
      icon: <BeakerIcon className="h-8 w-8 text-chart-2" />
    }
  ];

  const features = [
    {
      title: 'Expert Faculty',
      description: 'Highly qualified teachers dedicated to student success and continuous improvement.',
      icon: <UserGroupIcon className="h-10 w-10 text-primary" />
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms, libraries, laboratories, and recreational spaces.',
      icon: <BuildingLibraryIcon className="h-10 w-10 text-chart-3" />
    },
    {
      title: 'Technology Integration',
      description: 'State-of-the-art technology resources enhancing the learning experience.',
      icon: <ComputerDesktopIcon className="h-10 w-10 text-chart-2" />
    },
    {
      title: 'Science & Innovation',
      description: 'Specialized science programs and innovation labs for practical learning.',
      icon: <BeakerIcon className="h-10 w-10 text-chart-1" />
    },
    {
      title: 'Arts & Culture',
      description: 'Robust arts education including music, drama, dance, and visual arts.',
      icon: <MusicalNoteIcon className="h-10 w-10 text-chart-5" />
    },
    {
      title: 'Character Development',
      description: 'Focus on building integrity, leadership, and community service mindset.',
      icon: <HeartIcon className="h-10 w-10 text-destructive" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="features">
      <div className="container mx-auto px-6 md:px-12">
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Awards & Recognitions</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Harmony Unique School has been recognized for excellence in various aspects of education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg shadow-md p-8 text-center border-t-4 border-primary hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Makes Us Unique</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We provide a comprehensive education that nurtures the whole child through these key features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">
                  <div className="p-3 rounded-md bg-secondary">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}