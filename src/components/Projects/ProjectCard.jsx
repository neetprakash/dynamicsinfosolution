import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description },
}) => {
  return (
    <div className="bg-[#171717] max-w-[300px] aspect-square flex flex-col p-6 rounded-lg justify-between text-white">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="max-w-8"
      />
      <h3 className="text-2xl">{title}</h3>
      <p className="">{description}</p>
      
    </div>
  );
};
