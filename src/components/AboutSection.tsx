
import { Briefcase, GraduationCap, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function AboutSection() {
  return (
    <section id="about" className="bg-zinc-900 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-[2px] bg-ghana-gold"></div>
              <p className="text-ghana-gold font-medium">About Me</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white ghana-border inline-block pb-2">
              Experience & Education
            </h2>
            
            <p className="text-gray-300">
              I'm a web developer with 3 years of experience in building web, mobile, and desktop applications. My passion lies in creating efficient, user-friendly, and scalable software solutions for businesses in Ghana and beyond.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Map className="h-5 w-5 text-ghana-gold" />
                <span className="text-white">Accra / Koforidua, Ghana</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-ghana-gold" />
                <span className="text-white">BETCH Degree</span>
              </div>
              <Separator orientation="vertical" className="h-6 hidden sm:block bg-gray-600" />
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-ghana-gold" />
                <span className="text-white">3+ Years Experience</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">My Approach</h3>
              <p className="text-gray-300">
                I believe in crafting solutions that not only meet current needs but are also scalable for future growth. With a strong foundation in multiple programming languages and frameworks, I can adapt to various project requirements and challenges.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-800 border-none card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-ghana-red/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-ghana-red" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
                <p className="text-gray-400">
                  End-to-end development from database design to user interfaces for web and desktop applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-800 border-none card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-ghana-gold/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-ghana-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-gray-400">
                  Bachelor of Engineering Technology in Computer Engineering, with focused training in software development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-800 border-none card-hover md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-ghana-green/10 flex items-center justify-center">
                  <Map className="h-6 w-6 text-ghana-green" />
                </div>
                <h3 className="text-xl font-bold text-white">Local Focus, Global Standards</h3>
                <p className="text-gray-400">
                  Building solutions that address local Ghanaian needs while adhering to international best practices and standards in software development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
