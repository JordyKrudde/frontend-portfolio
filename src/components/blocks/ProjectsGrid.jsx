import React from 'react';
import Card from '../ui/Card';
import hvhlImage from '../../assets/hvhl.png';
import rapImage from '../../assets/rap.png';
import rijnlandImage from '../../assets/rijnland.png';
import vruImage from '../../assets/vru.png';
import domeImage from '../../assets/dome.png';

function ProjectsGrid() {
  const displayProjects = [
    {
      id: 1,
      title: "Hogeschool Van Hall Larenstein",
      description: "Website for Hogeschool Van Hall Larenstein where future students can find information about the university and its programs",
      image: hvhlImage,
      link: "https://hvhl.nl/"
    },
    {
      id: 2,
      title: "Rent A Pin",
      description: "Platform for renting card machines",
      image: rapImage,
      link: "https://rentapin.nl/nl-nl/"
    },
    {
      id: 3,
      title: "Rijnland",
      description: "Comprehensive platform for Rijnland Group",
      image: rijnlandImage,
      link: "https://www.rijnland.net/"
    },
    {
      id: 5,
      title: "Veiligheidsregio Utrecht",
      description: "Comprehensive platform for safety region Utrecht where citizens can find information about safety and security in Utrecht",
      image: vruImage,
      link: "https://www.vru.nl/"
    },
    {
      id: 6,
      title: "Dome Auctions",
      description: "Online auction platform for industrial equipment where users can buy and sell equipment",
      image: domeImage,
      link: "https://dome-auctions.com/en/"
    }
  ];

  return (
    <div className="relative">
      <section className="py-20 text-white relative overflow-hidden" id="projects">
        <div className="container mx-auto mb-16 z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-green-400 mb-4">PORTFOLIO</p>
            <h2 className="text-5xl md:text-6xl">MY PROJECTS</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mt-6">Check out some of my recent work</p>
          </div>
        </div>

        <div className="container mx-auto z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer" 
                key={project.id}
              >
                <Card 
                  title={project.title}
                  image={project.image}
                  className="h-full flex flex-col transition-transform hover:-translate-y-2 duration-300"
                >
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <p className="text-[#F7AF29FF] text-sm mb-4 italic">In collaboration with Four Digits</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsGrid;
