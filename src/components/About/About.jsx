import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className="px-20 my-20" id="about">
      <div className="py-12 flex flex-col items-center">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">About agency</h4>
        <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience
          These Global Leaders</p>
      </div>
      <div className="flex items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <img
            className="w-full"
            src={getImageUrl("projects/s1.png")} alt="about" />
          <div className="rounded-2xl bg-white p-4 shadow-lg max-w-[300px] absolute bottom-0 right-0">
            <h4 className="font-bold text-2xl mb-4">Goals</h4>
            <div className="flex gap-4 mb-8">
              <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                <img src={getImageUrl("projects/Rating.svg")} alt="" />
              </div>
              <div>
                <h4 className="font-bold">500+</h4>
                <p>Clients Around</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                <img src={getImageUrl("projects/Icon.svg")} alt="" />
              </div>
              <div>
                <h4 className="font-bold">64%</h4>
                <p>Cover Marketing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-bold mb-4">We create unique digital experiences.</h3>
          <p>Dynamics Info Solution is a premier provider of web and software development services, specializing in offshore software development. Founded in 2023, we excel in a range of services including web-based development, web-enabled design, mobile applications, e-commerce solutions, and ERP-CRM systems.
          </p>
          <br />
          <br />
          <p>Before we knew it, we had completed over 1,300 projects for more than 500 clients around the world. Our apps and websites are so smooth, they make navigating feel like a breeze!</p>
        </div>
      </div>
    </section>
  );
};
