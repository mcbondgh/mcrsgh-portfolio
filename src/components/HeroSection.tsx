
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center relative animated-bg section-padding pt-32">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-[2px] bg-ghana-gold"></div>
              <p className="text-ghana-gold font-medium">Full Stack Developer</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-ghana-gold">MCBOND</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Founder of MC's Republic Ghana, a passionate web developer with 3 years of experience building web, mobile, and desktop applications.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <Button className="bg-ghana-gold text-black hover:bg-ghana-gold/90 hover:text-black" size="lg">
                <span>View Projects</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" size="lg">
                Contact Me
              </Button>
            </div> */}
          </div>
          
          <div className="hidden lg:flex justify-center relative animate-fade-in">
            <div className="relative w-80 h-80 lg:w-96 lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 rotate-45 border-2 border-ghana-red bg-black/30 rounded-lg animate-bounce-gentle" style={{ animationDelay: '0s' }}></div>
              <div className="absolute inset-0 rotate-[30deg] border-2 border-ghana-gold bg-black/30 rounded-lg animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 rotate-[15deg] border-2 border-ghana-green bg-black/30 rounded-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center p-5">
                <img src="../public/hero_image.jpg" alt="Developer" className="rounded-lg object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce-gentle"
      >
        <span className="text-sm mt-5">Scroll Down</span>
        <ChevronDownIcon className="h-6 w-6" />
      </a>
    </section>
  );
}

export default HeroSection;
