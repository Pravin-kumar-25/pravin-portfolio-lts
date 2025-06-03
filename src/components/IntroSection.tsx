
import React from 'react';
import { FaCss3, FaDocker, FaFigma, FaGit, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";

const IntroSection = () => {
  const techIcons = [
    { name: 'JavaScript', icon: <FaDocker color='blue' />, delay: 0 },
    { name: 'React', icon: <FaReact color='violet' />, delay: 0.5 },
    { name: 'Figma', icon: <FaFigma />, delay: 1 },
    { name: 'Postman', icon: <SiPostman color='orange' />, delay: 1.5 },
    { name: 'DB', icon: <BiLogoPostgresql color='darkviolet' />, delay: 2 },
    { name: 'Java', icon: <FaJava color='orange' />, delay: 2.5 },
    { name: 'CSS3', icon: <FaCss3 color='lightblue' />, delay: 3 },
    { name: 'Git', icon: <FaGithub />, delay: 3.5 },

  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative top-10">
          {/* Left side - Profile Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-fade-in">
                <img
                  src="/personal/me.jpg"
                  alt="Pravin Kumar"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Logo with Tech Icons */}
          <div className="flex justify-center ">
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Central Logo */}
              <div className="relative z-10 bg-gray-600 from-primary to-accent p-8 rounded-full shadow-2xl animate-scale-in">
                {/* <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-2">PK</h1>
                  <div className="text-sm text-white/90 font-medium">
                    <div>PRAVIN</div>
                    <div>KUMAR</div>
                  </div>
                </div> */}
                <img src="/personal/logo.svg" className='w-8'/>
              </div>

              {/* Revolving Tech Icons */}
              {techIcons.map((tech, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={tech.name}
                    className="absolute animate-float"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${tech.delay}s`,
                      animationDuration: '3s'
                    }}
                  >
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-primary/20 hover:scale-110 transition-transform cursor-pointer group">
                      <span className="text-2xl group-hover:animate-pulse">{tech.icon}</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                );
              })}

              {/* Animated rings around logo */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border border-accent/30 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Welcome to My Digital Space
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where creativity meets code, and innovation comes to life through pixels and algorithms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;