
import { ArrowUpRight, FolderOpenDot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const projects = [
    {
      title: "School Management System",
      description: "Comprehensive system for managing student records, attendance, grades, and administrative tasks.",
      features: ["User management", "Grade tracking", "Attendance monitoring", "Reports generation"],
      tech: ["Java", "MySQL", "JavaFX"]
    },
    {
      title: "Block Factory Management",
      description: "Inventory and production tracking system for concrete block manufacturing businesses.",
      features: ["Inventory tracking", "Production scheduling", "Sales management", "Financial reporting"],
      tech: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Attendance System",
      description: "Digital solution for tracking employee or student attendance with reporting capabilities.",
      features: ["Real-time tracking", "Automated reports", "Leave management", "Mobile access"],
      tech: ["Java", "Android", "SQLite"]
    },
    {
      title: "Auto Repair Shop System",
      description: "Management solution for vehicle repairs, parts inventory, and customer billing.",
      features: ["Repair tracking", "Parts inventory", "Customer database", "Invoice generation"],
      tech: ["C#", ".NET", "SQL Server"]
    },
    {
      title: "District School System",
      description: "Centralized management tool for multiple schools within an educational district.",
      features: ["Multi-school management", "District-wide reporting", "Resource allocation", "Performance analytics"],
      tech: ["Java", "Spring Boot", "MySQL"]
    },
    {
      title: "Microcredit Loan Application",
      description: "Platform for managing small loans, repayments, and client information for microfinance institutions.",
      features: ["Loan processing", "Payment tracking", "Client management", "Risk assessment"],
      tech: ["PHP", "JavaScript", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="bg-zinc-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
            <p className="text-ghana-gold font-medium">My Work</p>
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-gray-300">
            Here are some of the notable systems I've developed to solve real-world problems for businesses and institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-800 border-none overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <FolderOpenDot className="h-10 w-10 text-ghana-gold" />
                    <Button variant="ghost" size="icon" className="text-white hover:text-ghana-gold hover:bg-transparent">
                      <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-ghana-gold">Key Features:</h4>
                    <ul className="text-sm text-gray-400 grid grid-cols-2 gap-x-2 gap-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-ghana-gold mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-zinc-900 p-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <div key={idx} className="px-3 py-1 text-xs bg-zinc-800 text-gray-300 rounded-full">
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-ghana-gold text-ghana-gold hover:bg-ghana-gold hover:text-black">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
