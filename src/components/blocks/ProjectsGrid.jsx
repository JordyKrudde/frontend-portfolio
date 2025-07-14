import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

function ProjectsGrid({ 
  title = "My Projects",
  subtitle = "Check out some of my recent work",
  projects = [],
  maxDisplay = 6,
  showViewAllButton = true,
  viewAllLink = "/projects"
}) {
  // If no projects are provided, use some default placeholder projects
  const displayProjects = projects.length > 0 ? projects.slice(0, maxDisplay) : [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Template",
      tags: ["React", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A drag-and-drop task management application",
      image: "https://via.placeholder.com/600x400?text=Task+Management+App",
      tags: ["React", "Redux", "Firebase"],
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card 
              key={project.id} 
              title={project.title}
              image={project.image}
              className="h-full flex flex-col transition-transform hover:-translate-y-2 duration-300"
            >
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.tags && project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                variant="outline" 
                onClick={() => window.open(project.link, '_blank')}
                className="w-full mt-2"
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>

        {showViewAllButton && projects.length > maxDisplay && (
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = viewAllLink}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsGrid;
