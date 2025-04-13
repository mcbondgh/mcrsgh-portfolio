
import { 
  Code2Icon, ServerIcon, DatabaseIcon, LayoutIcon, 
  SquareCodeIcon, PhoneIcon, LaptopIcon
} from 'lucide-react';

export function SkillsSection() {
  const mainSkills = [
    { name: "Java", icon: <ServerIcon className="h-7 w-7" />, level: 90 },
    { name: "PHP", icon: <ServerIcon className="h-7 w-7" />, level: 85 },
    { name: "JavaScript", icon: <Code2Icon className="h-7 w-7" />, level: 80 },
    { name: "C#", icon: <Code2Icon className="h-7 w-7" />, level: 75 },
    { name: "HTML/CSS", icon: <LayoutIcon className="h-7 w-7" />, level: 90 },
    { name: "SQL", icon: <DatabaseIcon className="h-7 w-7" />, level: 85 },
    { name: "React", icon: <SquareCodeIcon className="h-7 w-7" />, level: 70 },
    { name: "Mobile Dev", icon: <PhoneIcon className="h-7 w-7" />, level: 65 },
    { name: "Desktop Dev", icon: <LaptopIcon className="h-7 w-7" />, level: 75 },
  ];

  return (
    <section id="skills" className="bg-black section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
            <p className="text-ghana-gold font-medium">What I Can Do</p>
            <div className="w-10 h-[2px] bg-ghana-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Expertise</h2>
          <p className="text-gray-300">
            With experience in multiple programming languages and frameworks, I can build robust solutions for diverse project requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-ghana-red to-ghana-gold/50 flex items-center justify-center">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-ghana-red via-ghana-gold to-ghana-green rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">Beginner</span>
                    <span className="text-xs text-gray-400">Expert</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-zinc-900 rounded-xl p-8 border border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-6">Additional Skills & Tools</h3>
          <div className="flex flex-wrap gap-4">
            {["Git", "Docker", "MySQL", "PostgreSQL", "Laravel", "Spring Boot", "jQuery", "Bootstrap", 
              "Tailwind CSS", ".NET", "REST API", "GraphQL", "Android", "Windows Forms"].map((skill) => (
              <div 
                key={skill}
                className="px-4 py-2 bg-zinc-800 rounded-full text-white text-sm hover:bg-ghana-gold hover:text-black transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
