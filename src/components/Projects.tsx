
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Spring Boot backend, and automated testing suite.',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      image: '/placeholder.svg',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and comprehensive test coverage.',
      technologies: ['Next.js', 'TailwindCSS', 'Selenium'],
      image: '/placeholder.svg',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with data visualization and mobile-responsive design.',
      technologies: ['React', 'Chart.js', 'API Integration'],
      image: '/placeholder.svg',
    },
  ];

  const handleProjectAction = (action: string, projectTitle: string) => {
    console.log(`${action} clicked for ${projectTitle}`);
    // Add your actual project links here
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
                    <span className="text-4xl opacity-50">🚀</span>
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 relative z-30"
                      onClick={() => handleProjectAction('Code', project.title)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 relative z-30"
                      onClick={() => handleProjectAction('Demo', project.title)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
