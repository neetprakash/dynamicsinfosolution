import React, { useState, useMemo }  from "react";

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { getImageUrl } from "../../utils";
import { Button } from "@material-tailwind/react";
import Select from 'react-select'
import countryList from 'react-select-country-list'

export const Contact = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <section id="contact" className="px-20">
       <div className="py-12 flex flex-col items-center relative z-10 text-black">
        <h4 className="text-4xl font-roboto text-center font-bold header-gradient">Contact Us</h4>
      </div>
     <div className="grid grid-cols-2 gap-4">
  <div>
 
            <div className="flex gap-4 mb-8">
              <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                <img src={getImageUrl("contact/location.svg")} alt="" />
              </div>
              <div>
                <h4 className="font-bold">Our Location</h4>
                <p>H-106 Ground Floor, Sector 63, Noida, Uttar Pradesh 201301</p>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                <img src={getImageUrl("contact/mingcute_phone-fill.svg")} alt="" />
              </div>
              <div>
                <h4 className="font-bold">Phone Number</h4>
                <p>+1 (315) 309-0085</p>
              </div>
            </div> <div className="flex gap-4 mb-8">
              <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                <img src={getImageUrl("contact/fluent_mail-24-filled.svg")} alt="" />
              </div>
              <div>
                <h4 className="font-bold">Email Address</h4>
                <p>dynamicsinfosolution@gmail.com</p>
              </div>
            </div>
  </div>
  <div>
  <Input variant="standard" label="Full Name" placeholder="John Doe"/>
  <br />
  <Input variant="standard" label="Email" placeholder="John@gmail.com"/>
  <br />
  <Input variant="standard" label="Contact" placeholder="9999999999"/>
  <br />
  <div className="relative">
  <Input variant="standard" label="Country" placeholder="India"/>
  <Select className="absolute" options={options} value={value} onChange={changeHandler} />
  </div>

  <Textarea variant="standard" label="Message" />
  <br />
  <Button variant="outlined" className="rounded">Request Proposal</Button>
  </div>
</div>
    </section>
  );
};
