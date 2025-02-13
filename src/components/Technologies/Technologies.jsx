import React, { useState } from 'react';
import './technologies.css'; // Import your CSS file
import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from '@material-tailwind/react';
import { SiScrapy } from 'react-icons/si';
import { getIcon,getImageUrl } from '../../utils';
import { FaMobile } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiTaichigraphics } from "react-icons/si";
import { PiBrowserFill } from "react-icons/pi";

import TechCard from './TechCard';
const TechnologiesSection = () => {
    const data = [
        {
          label: "Web Development",
          value: "web_dev",
          icon: PiBrowserFill,
          desc: [
            {
                name:'Angular',
                icon:'angular'
            },
            {
                name:'Bootstrap',
                icon:'bootstrap'
            },
            {
                name:'CSS',
                icon:'css3'
            },
            {
                name:'django',
                icon:'django'
            },
            {
                name:'handlebars',
                icon:'handlebars'
            },
            {
                name:'HTML',
                icon:'html5'
            },
            {
                name:'Express',
                icon:'express'
            },
            {
                name:'Java',
                icon:'java'
            },
            {
                name:'Javascript',
                icon:'javascript'
            },
            {
                name:'jQuery',
                icon:'jquery'
            },
            {
                name:'NextJs',
                icon:'nextjs'
            },
            {
                name:'NodeJs',
                icon:'nodejs'
            },
            {
                name:'Postgresql',
                icon:'postgresql'
            },
            {
                name:'Python',
                icon:'python'
            },
            {
                name:'React',
                icon:'react'
            },
            {
                name:'Redux',
                icon:'redux'
            },
            {
                name:'Saas',
                icon:'saas'
            },
            {
                name:'Typescript',
                icon:'typescript'
            },
            {
                name:'VueJs',
                icon:'vuejs'
            },
            {
                name:'Wordpress',
                icon:'wordpress'
            },
        ],
        },
        {
          label: "Mobile Apps",
          value: "mobile_app",
          icon: FaMobile,
          desc: [
            {
              name:'Flutter',
              icon:'flutter'
          },
            {
              name:'React Native',
              icon:'react-native'
          },
            {
              name:'Kotlin',
              icon:'Kotlin'
          },
            {
              name:'Xamarin',
              icon:'Xamarin'
          },
            {
              name:'Ionic',
              icon:'Ionic'
          },
            {
              name:'Swift',
              icon:'Swift'
          },
        ]   
        },
        {
          label: "DevOps",
          value: "devops",
          icon: VscAzureDevops,
          desc: [
            {
              name:'Docker',
              icon:'Docker'
          },
            {
              name:'Kubernetes',
              icon:'Kubernetes'
          },
            {
              name:'Selenium',
              icon:'Selenium'
          },
            {
              name:'HashiCorp Terraform',
              icon:'HashiCorp Terraform'
          },
            {
              name:'Jenkins',
              icon:'Jenkins'
          },
        ]
        },
        {
          label: "Digital Marketing",
          value: "digital_marketing",
          icon: FaPeopleGroup,
          desc: [
          <SiScrapy />,<SiScrapy />,<SiScrapy />,<SiScrapy />],
        },
        {
          label: "Graphics Designing",
          value: "graphics",
          icon: SiTaichigraphics,
          desc: [
          <SiScrapy />,<SiScrapy />,<SiScrapy />,<SiScrapy />],
        }, 
       ]

  return (
    <section className='p-20'>
        <div className="pb-12 flex flex-col items-center">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Our Tech Capabilities</h4>
        <p className="text-center mt-2 lg:max-w-[40%] text-black">Our Partnerships Have Transformed How You Experience These Global Leaders</p>
      </div>
      {/* <TechCard/> */}
    <Tabs value="dashboard" orientation="vertical">
      <TabsHeader className=" p-4 techtab">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="place-items-start justify-start mb-4">
            <div className="flex items-center gap-4 text-xl text-white">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className=''>
        {data.map(({ value, desc }) => (
         <TabPanel key={value} value={value} className="py-0  flex flex-wrap justify-start gap-4">
         {desc.map((tech, index) => (
           <div key={index} className="card items-center flex flex-col bg-gray-50 justify-center rounded w-24 aspect-square">
             <div className="card-header">
               <img src={getIcon(tech.icon)} alt={tech.name} className="w-8 h-8" /> {/* Render icon image */}
             </div>
             <div className="card-body">
               <h3 className=''>{tech.name}</h3>
             </div>
           </div>
         ))}
       </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </section>
  );
};

export default TechnologiesSection;
