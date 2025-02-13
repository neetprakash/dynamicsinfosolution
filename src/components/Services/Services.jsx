import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";

export const Services = () => {
  return (
    <section className="px-20 pb-20 bg-black" id="services">
      <div className="py-12 flex flex-col items-center">
      <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Our services</h4>
      <p className="text-center mt-2 lg:max-w-[40%] text-white">Our Partnerships Have Transformed How You Experience These Global Leaders</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        {projects.map((project, id) => {
          return <ProjectCard key={id} imageSrc={project.imageSrc} title={project.title} description={project.description} style="max-w-[300px]"/>;
        })}
      </div>
    </section>
  );
};
