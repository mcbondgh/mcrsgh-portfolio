
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-12 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-ghana-gold">MC's</span>
              <span className="text-ghana-red">Republic</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building powerful web, mobile, and desktop solutions with the perfect blend of functionality and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-ghana-gold hover:text-black transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-ghana-gold hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-ghana-gold hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-ghana-gold hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigate</h3>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-ghana-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Desktop Applications", "Database Design", "UI/UX Design", "Consultancy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-ghana-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Accra / Koforidua, Ghana
              </li>
              <li>
                <a href="mailto:developer@example.com" className="text-gray-400 hover:text-ghana-gold transition-colors">
                  developer@example.com
                </a>
              </li>
              <li>
                <a href="tel:+233000000000" className="text-gray-400 hover:text-ghana-gold transition-colors">
                  +233 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} | MC's Republic Ghana | All Rights Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
