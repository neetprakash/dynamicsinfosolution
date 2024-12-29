import React from "react";

import styles from "./Hero.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section  >
      <div className="h-screen w-screen relative bg-black">
        <img
          src={getImageUrl("hero/hero-image.png")}
          alt="Hero image of me"
          className="h-full object-cover absolute w-full"
        />
        <div className=" text-white z-1 relative flex h-full flex-col items-center justify-center">
          <div className="max-w-[80%]">
            <h1 className="font-lexend text-8xl font-bold mb-4">Digital Marketing </h1>
            <div className="flex items-center justify-end gap-16">

              <h1 className="font-quantico text-8xl title">Agency</h1>

              <p>From traditional PR and thought leadership campaigns to storytelling and creative social media management we’ve got you covered.</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
