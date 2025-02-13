import React from "react";
import { getImageUrl } from "../../utils";
import './hero.css'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="home" >
      <div className="h-screen w-screen relative bg-black">
        <img
          src={getImageUrl("hero/hero-image.png")}
          alt="Hero image of me"
          className="h-full object-cover absolute w-full"
        />
        <img
          src={getImageUrl("hero/Group2.svg")}
          alt="Hero image of me"
          className=" absolute bottom-40 right-4"
        />

        <div className=" text-white z-1 relative flex h-full flex-col items-center justify-center">
          <div className="max-w-[80%]">
            <img
              src={getImageUrl("hero/Icon1.svg")}
              alt="Hero image of me"
              className="floating_image"
            />
            <div className="slider">
              <Typewriter
                options={{
                  strings: ['Digital Marketing', 'Web Development','Graphics Designing','App Developmemnt '],
                  autoStart: true,
                  loop: true,
                  pauseFor:'2000',
                  className:"slider-text"
                }}
              />
              {/* <div className="slider-text">Digital Marketing</div>
                <div className="slider-text"> Web Development</div>
                <div className="slider-text"> Graphics</div>
                <div className="slider-text">App Developmemnt</div> */}
            </div>
            {/* <h1 className="font-lexend text-8xl font-bold mb-4 slide-animate">Digital Marketing <br />
                Web Development
                <br />
                Graphics
              </h1> */}

            <div className="flex items-center justify-between max-w-[80%]">

              <h1 className="font-quantico title">Agency</h1>

              <div className="max-w-[40%]">
                <p>From traditional PR and thought leadership campaigns to storytelling and creative social media management we’ve got you covered.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <img
          src={getImageUrl("hero/Background_hero.png")}
          alt="Hero image of me"
          className="absolute max-w-[90%]  bottom-0 right-[50%] translate-x-[50%]"
        /> */}

      </div>


    </section>
  );
};
