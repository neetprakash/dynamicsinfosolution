import React from "react";
import { getImageUrl } from "../../utils";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Testimony = () => {
  return (
    <section className="  py-20 relative bg-[url('/assets/projects/Background.png')] bg-cover" id="projects">
      {/* <img src={getImageUrl("projects/Group.png")}
        alt=""
        className="absolute" /> */}
        <div className="pb-12 flex flex-col items-center relative z-10 text-black">
            <h4 className="text-4xl font-roboto text-center font-bold header-gradient">What Our Client Say</h4>
            <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience </p>
        </div>
      <Carousel 
      centerMode 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false}
      centerSlidePercentage={30}
      >
                <div>
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
                <div>
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
                <div>
                    <img src={getImageUrl("projects/Border.png")} />
                </div>
            </Carousel>
    </section>
  );
};
