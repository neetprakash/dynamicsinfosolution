import React from "react";

import "./ProjectCard.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({style, title, imageSrc,icon, description}) => {
  return (
    <div className={`blackcard bg-[#171717] ${style} aspect-square flex flex-col p-6 rounded-lg justify-between text-white`}>
     {imageSrc ?  <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="max-w-8"
      /> : null}
      <div>{icon}</div>
      <h3 className="text-2xl">{title}</h3>
      <p className="">{description}</p>
      
    </div>
  );
};
