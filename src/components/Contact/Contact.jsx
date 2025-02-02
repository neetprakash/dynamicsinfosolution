import React, { useState, useMemo } from "react";
import * as Yup from "yup";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { getImageUrl } from "../../utils";
import { Button } from "@material-tailwind/react";
import Select from 'react-select'
import countryList from 'react-select-country-list'


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border:"none",  // Match Material Tailwind input
    borderBottom: "1px solid #9e9e9e", // Underline style
    borderRadius: "0px",
    boxShadow: state.isFocused ? "0 0.5px 0 black" : "none",

  }),
  placeholder: (provided) => ({
    ...provided,
    display: "none",
   
  }),
  indicatorContainer:(provided)=>({
    ...provided,
display:'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#374151", // Text color
  }),
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contact: Yup.number().required().positive().integer(),
  country: Yup.object().shape({
    value: Yup.string().required("Country is required"),
  }),
  message: Yup.string()
  .min(20, "must be at least 20 characters")
  .max(150, "Name must not exceed 150 characters")
  .required("required"),
});


export const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [errors, setErrors] = useState({});
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    contact: '',
    country: null,
    message: ''
  })
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    console.log(contactForm);
    
  };
  const handleSelectChange = (e) => {
    setContactForm({ ...contactForm, country: e});
    console.log(contactForm);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validationSchema
      .validate(contactForm, { abortEarly: false })
      .then(async() => {
        // No errors, submit form
        console.log("Form Submitted:", contactForm);
        const formEndpoint = "https://formspree.io/f/xvgzrwol"; // Replace with your Formspree endpoint

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactForm),
    });
console.log(response);

    if (response.ok) {
      alert("Message sent successfully!");
      setContactForm({ fullName: "", email: "",contact:"", message: "", country:null });
    } else {
      alert("Failed to send message.");
    }
      })
      .catch((err) => {
        // Set errors if validation fails
        const newErrors = err.inner.reduce((acc, currentError) => {
          acc[currentError.path] = currentError.message;
          return acc;
        }, {});
        setErrors(newErrors);
      });

    
  };
 
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
          <form onSubmit={handleSubmit} >
          <Input variant="standard" label="Full Name" name="fullName" placeholder="John Doe" value={contactForm.fullName} onChange={changeHandler}/>
          {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
          <br />
          <Input variant="standard" label="Email" name="email" placeholder="John@gmail.com" value={contactForm.email} onChange={changeHandler}/>
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          <br />
          <Input variant="standard" label="Contact" name="contact" placeholder="9999999999" value={contactForm.contact} onChange={changeHandler}/>
          {errors.contact && <div className="text-red-500 text-sm">{errors.contact}</div>}
          <br />
          <div className="relative">
            <label
          className={`absolute left-0 transition-all duration-200  ${
            isFocused || contactForm.country ? "top-[-12px] text-[10px] text-black" : "top-2 text-blue-gray-500 text-[0.875rem]"
          }`}
        >
          Country
        </label>
            <Select className="absolute" name="country" options={options} value={contactForm.country} onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}  onChange={handleSelectChange}
            styles={customStyles}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
          </div>
          {errors.country && <div className="text-red-500 text-sm">{errors.country}</div>}
          <br />
          <Textarea variant="standard" label="Message" name="message" value={contactForm.message} onChange={changeHandler}/>
          {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
          <br />
          <Button variant="outlined" className="rounded" type="submit">Request Proposal</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
