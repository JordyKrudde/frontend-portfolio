import React from 'react';

function ExperienceSection() {
  // Voorbeeld werkervaring data - je kunt dit vervangen met je eigen ervaring
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Four Digits",
      period: "2022 - Heden",
      description: "Ontwikkelen en onderhouden van websites voor verschillende opdrachtgevers. Voornamelijk met HTML, SCSS, JavaScript, Django, Python en React."
    },
    {
      id: 2,
      role: "Student Software Developer",
      company: "Graafschap College Doetinchem",
      period: "2019 - 2022",
      description: "Als student heb ik hier de basis van webdevelopment geleerd."
    },
  ];

  return (
    <section className="py-12 md:py-20 text-white relative overflow-hidden" id="experience">
      <div className="container mx-auto mb-16 z-10 relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-green-400 mb-4">Mijn ervaring</p>
          <h2 className="text-5xl md:text-6xl">Werkervaring</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 h-[105%] w-px bg-green-400 transform -translate-x-1/2 -translate-y-6"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col md:flex-row items-center mt-12 md:mt-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-green-400 transform -translate-x-1/2 -translate-y-6"></div>
                
                <div className={`w-full px-6 md:px-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="p-6 border border-slate-100/20 rounded-lg bg-[#5a89fd0d] backdrop-blur-[8px] hover:bg-[#5a89fd1a] transition-all duration-300">
                    <div className={`flex flex-col text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className={`flex items-center mb-3 gap-2 text-sm text-slate-300 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="font-medium text-green-400">{exp.company}</span>
                        <span className="text-slate-400">•</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
