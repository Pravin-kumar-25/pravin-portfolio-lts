
import React from 'react';
import { Card } from '@/components/ui/card';
import StackIcon from "tech-stack-icons";

const About = () => {
  const technologies = [
    { name: 'reactjs'},
    { name: 'nextjs2'},
    { name: 'spring'},
    { name: 'html5'},
    { name: 'css3'},
    { name: 'docker'},
    { name: 'tailwindcss'},
    { name: 'postman'},
    { name: 'openai'},
    { name: 'figma'},
    { name: 'git' },
    { name: 'java' },
    { name: 'postgresql' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I'm a Software Development Engineer in Test with a strong love for frontend design,
            creative coding, and building things people enjoy using. Whether it's testing
            frameworks or designing sleek UIs, I blend engineering precision with artistic flair —
            and a bit of gamer strategy 🎮.
          </p>
        </div>

        <div className="mb-12 animate-scale-in">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Techs I vibe with:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group animate-fade-in glow-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="flex flex-col items-center gap-2 px-4 py-2 hover:scale-110 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                  <StackIcon className='size-10' name={tech.name} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
