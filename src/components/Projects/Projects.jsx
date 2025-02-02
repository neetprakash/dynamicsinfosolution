import React from "react";
import { getImageUrl } from "../../utils";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="py-20 relative bg-[url('/assets/projects/Group.png')] bg-cover" id="projects">
      {/* <img src={getImageUrl("projects/Group.png")}
        alt=""
        className="absolute" /> */}
      <div className="pb-12 flex flex-col items-center relative z-10 text-white">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Our Projects</h4>
        <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience
          These Global Leaders</p>
      </div>
      <Carousel 
        responsive={responsive}
        infinite={true}
        centerMode={true}
        className="custom-multi-carousel"
        itemClass={"[&.react-multi-carousel-item--active]:scale-110 [&.react-multi-carousel-item--active]:z-50"}
        containerClass="p-8" >
        <div className="mx-2">
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div className="mx-2">
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div className="mx-2">
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div className="mx-2">
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
        <div className="mx-2">
          <img src={getImageUrl("projects/SMPL.png")} />
        </div>
     
      </Carousel>
    </section>
  );
};
