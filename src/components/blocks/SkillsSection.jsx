import React from 'react';

function SkillsSection({
  title = "My Skills",
  subtitle = "Technologies I work with",
  skills = []
}) {
  // Default skills if none are provided
  const displaySkills = skills.length > 0 ? skills : [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS", "SASS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"]
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "CI/CD", "Figma", "Responsive Design"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySkills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
