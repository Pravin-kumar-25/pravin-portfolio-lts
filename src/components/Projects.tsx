
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and experience with a sleek design.',
      technologies: ["ReactJS", "ThreeJS", "Gsap"],
      image: '/projectImages/portfolio.png',
      demoLink: 'https://pravin-old-portfolio.netlify.app/',
      codeLink: 'https://github.com/Pravin-kumar-25/portfolio-2',
    },
    {
      title: 'QA dashboard',
      description: 'A comprehensive dashboard for managing and analyzing QA processes, built with React and Tailwind CSS. Interacts with github native apis to fetch issues and pull requests, providing a seamless user experience.',
      technologies: ['Github api', 'Next js', 'Tailwind CSS'],
      image: '/projectImages/qadashboard.png',
      demoLink: 'https://drive.google.com/file/d/10zMdAn6r7mh1drlLM0ug-1XrsomrvLti/view?usp=drive_link'
    },
    {
      title: '3D Room',
      description: 'Designed using BLENDER. A 3D room with interactive elements, animations, and a modern aesthetic.',
      technologies: ['ReactJS', 'ThreeJS', 'Blender'],
      image: '/projectImages/room3d.png',
      demoLink: 'https://pravinkumar-myroom.netlify.app/',
      codeLink: 'https://github.com/Pravin-kumar-25/MyRoom',
    },
  ];

  const handleProjectAction = (action: string, link: string) => {
    console.log(`${action} clicked for ${link}`);
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in glow-effect"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 relative z-20">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl opacity-80 hover:opacity-100"><img src={project.image} /></span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.codeLink && project.codeLink != '' ?
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 relative z-30"
                        onClick={() => handleProjectAction('Code', project.codeLink)}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button> : null}
                    {project.demoLink != '' ?
                      <Button
                        size="sm"
                        className="flex-1 relative z-30"
                        onClick={() => handleProjectAction('Demo', project.demoLink)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button> : null}

                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
