import React from "react";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";

export const Services = () => {
  return (
    <section className="px-20 my-20" id="services">
      <div className="py-12 flex flex-col items-center">
      <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Our services</h4>
      <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience These Global Leaders</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
