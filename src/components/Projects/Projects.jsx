import React from "react";
import { getImageUrl } from "../../utils";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Projects = () => {
  return (
    <section className="p-20 my-20 mt-20 relative bg-[url('/assets/projects/Group.png')] bg-cover" id="projects">
      {/* <img src={getImageUrl("projects/Group.png")}
        alt=""
        className="absolute" /> */}
      <div className="pb-12 flex flex-col items-center relative z-10 text-white">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Our Projects</h4>
        <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience
          These Global Leaders</p>
      </div>
      <Carousel 
      centerMode 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false}
      centerSlidePercentage={30}>
        <div>
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div>
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div>
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
      </Carousel>
    </section>
  );
};
