import React from "react";
import { getImageUrl } from "../../utils";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Testimony = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    }
  };
  return (
    <section className="  py-20 relative bg-[url('/assets/projects/Background.png')] bg-cover" id="testimonials">
      {/* <img src={getImageUrl("projects/Group.png")}
        alt=""
        className="absolute" /> */}
        <div className="pb-12 flex flex-col items-center relative z-10 text-black">
            <h4 className="text-4xl font-roboto text-center font-bold header-gradient">What Our Client Say</h4>
            <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience </p>
        </div>
      <Carousel 
      responsive={responsive}
      infinite={true}
      centerMode={true}
      className="custom-multi-carousel"
      itemClass={"[&.react-multi-carousel-item--active]:scale-110 [&.react-multi-carousel-item--active]:z-50"}
      containerClass="p-8"
      >
                <div className="">
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
                <div className="">
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
                <div className="">
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
                <div className="">
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
           
            </Carousel>
    </section>
  );
};
