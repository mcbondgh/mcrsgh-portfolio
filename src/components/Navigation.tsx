
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
// import '@/App.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  
  let openResume = () => {
    window.open("https://drive.google.com/file/d/1W1ktD5BLnoUgRjUocaVnUkdYziDJS2FW/view?usp=sharing", "_blank");
  }


  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 lg:px-20 py-4",
      scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white flex items-center">
          {/* <span className="text-ghana-gold">MC's</span>
          <span className="text-light"> Republic</span> */}
          <img src="../public/mcr_logo.jpg" className='w-20 h-15'></img>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white hover:text-ghana-gold transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-ghana-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" className="border-ghana-green hover:bg-#000 color-white" onClick={openResume}>
            Resume
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-[60px] right-0 h-screen w-full bg-black/95 transform transition-transform ease-in-out duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white text-2xl hover:text-ghana-gold transition-colors"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" className="color-white text-white border-ghana-green hover:bg-#000 color-white" onClick={openResume}>
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
