import React from 'react';
import Card from '../ui/Card';
import hvhlImage from '../../assets/hvhl.png';
import rapImage from '../../assets/rap.png';
import rijnlandImage from '../../assets/rijnland.png';
import vruImage from '../../assets/vru.png';
import domeImage from '../../assets/dome.png';
import warchildImage from '../../assets/warchild.png';

function ProjectsGrid() {
  const displayProjects = [
    {
      id: 1,
      title: "Hogeschool Van Hall Larenstein",
      description: "Website voor Hogeschool Van Hall Larenstein waar toekomstige studenten informatie kunnen vinden over de hogeschool en haar opleidingen",
      image: hvhlImage,
      link: "https://hvhl.nl/"
    },
    {
      id: 2,
      title: "Veiligheidsregio Utrecht",
      description: "Uitgebreid platform voor Veiligheidsregio Utrecht waar burgers informatie kunnen vinden over veiligheid in Utrecht",
      image: vruImage,
      link: "https://www.vru.nl/"
    },
    {
      id: 3,
      title: "Dome Auctions",
      description: "Online veilingplatform voor industriële apparatuur waar gebruikers apparatuur kunnen kopen en verkopen",
      image: domeImage,
      link: "https://dome-auctions.com/en/"
    },
    {
      id: 4,
      title: "Warchild",
      description: "Website voor Warchild waar informatie te vinden is over de organisatie en haar doelen",
      image: warchildImage,
      link: "https://warchild.nl/"
    },
    {
      id: 5,
      title: "Rent A Pin",
      description: "Platform voor het huren van kaartmachines",
      image: rapImage,
      link: "https://rentapin.nl/nl-nl/"
    },
    {
      id: 6,
      title: "Rijnland",
      description: "Uitgebreid platform voor Rijnland Group",
      image: rijnlandImage,
      link: "https://www.rijnland.net/"
    }
  ];

  return (
    <div className="relative">
      <section className="py-20 text-white relative overflow-hidden" id="projects">
        <div className="container mx-auto mb-16 z-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-green-400 mb-4">PORTFOLIO</p>
            <h2 className="text-5xl md:text-6xl">MIJN PROJECTEN</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mt-6">Bekijk een aantal van mijn recente werken</p>
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
                  <p className="text-[#F7AF29FF] text-sm mb-4 italic">In samenwerking met Four Digits</p>
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
