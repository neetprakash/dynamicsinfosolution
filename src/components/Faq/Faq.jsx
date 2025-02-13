import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {

 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
export const Faq = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="px-20 mb-20" id="faq">
         <div className="py-12 flex flex-col items-center relative z-10 text-black">
            <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Frequently Asked Questions</h4>
            <p className="text-center mt-2 lg:max-w-[40%]">Our Partnerships Have Transformed How You Experience 
            These Global Leaders</p>
        </div>
        <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>What services does your agency offer?</AccordionHeader>
        <AccordionBody>
        We specialize in web development, app development, graphics designing, and digital marketing. Our comprehensive solutions are designed to help your business grow online.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Do you offer customized solutions for businesses?
        </AccordionHeader>
        <AccordionBody>
        Yes, we tailor our services to meet the unique needs of your business, ensuring a personalized and effective approach.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What industries do you work with?
        </AccordionHeader>
        <AccordionBody>
        We work with a wide range of industries, including retail, healthcare, technology, hospitality, and more.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
What platforms do you develop apps for?
        </AccordionHeader>
        <AccordionBody>
        We develop apps for both iOS and Android platforms, ensuring seamless functionality and user experience across devices.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Can you redesign or improve my existing website?
        </AccordionHeader>
        <AccordionBody>
        Absolutely! We can help revamp your existing website to improve design, functionality, and user experience.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        What types of graphic design services do you provide?
        </AccordionHeader>
        <AccordionBody>
        We offer logo design, branding, social media creatives, brochures, and other marketing materials to make your business stand out.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
        What does your digital marketing service include?
        </AccordionHeader>
        <AccordionBody>
        Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) campaigns, social media management, email marketing, and content marketing.
        </AccordionBody>
      </Accordion>
        </div>
          </section>
  );
};
