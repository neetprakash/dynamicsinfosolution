import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";
import { industries } from "../../data/Constants";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { LiaShipSolid } from "react-icons/lia";
import { MdOutlineChildFriendly } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbAutomation } from "react-icons/tb";
import { BsBuildings } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { SiScrapy } from "react-icons/si";
const industriesWithIcons = [
  { icon: <MdOutlineHealthAndSafety />, industry: 'Healthcare' },
  { icon: <GrCloudSoftware />, industry: 'SaaS' },
  { icon: <MdAddShoppingCart />, industry: 'e-Commerce' },
  { icon: <IoEarthOutline />, industry: 'Travel' },
  { icon: <LiaShipSolid />, industry: 'Shipping' },
  { icon: <MdOutlineChildFriendly />, industry: 'Logistics' },
  { icon: <RiGraduationCapLine />, industry: 'Education' },
  { icon: <TbAutomation />, industry: 'Automotive' },
  { icon: <BsBuildings />, industry: 'Real-estate' },
  { icon: <TbUsersGroup />, industry: 'Social Media' },
  { icon: <SiScrapy />, industry: 'Scrap' }
];
export const Industries = () => {
  return (
    <section className="p-20 bg-black" id="services">
      <div className="py-12 flex flex-col items-center">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Industries Covered</h4>
        <p className="text-center mt-2 lg:max-w-[40%] text-white">Our Partnerships Have Transformed How You Experience These Global Leaders</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {industriesWithIcons.map((industry, id) => {
          return (
            <div key={id} className="blackcard bg-[#171717]  flex flex-col p-6 rounded-lg justify-center items-center gap-8 w-[170px] h-[170px] text-white">
              <div className="text-4xl">{industry.icon}</div>
              <h3 className="text-lg">{industry.industry}</h3>

            </div>

            //   <ProjectCard key={id} title={industry.industry} icon={industry.icon}  style="w-[100px] "/>
          )
        })}
      </div>
    </section>
  );
};
