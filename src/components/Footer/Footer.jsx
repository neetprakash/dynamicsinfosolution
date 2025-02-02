import { Input, Button } from "@material-tailwind/react";
import React from "react";
import { getImageUrl } from "../../utils";
export const Footer = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <footer>
            <div className="bg-black bg-[url('/assets/projects/footer_image.png')] bg-cover">
            <div className=" p-2 md:p-6  lg:px-20 lg:py-10">
                <div className="grid grid-cols-4 justify-items-center text-white gap-8">
                    <div className=" flex flex-col gap-8"><img src="/assets/nav/DIS_FNL_LOGO2.png" alt="dis_logo" className="max-w-40" />
                        <h3 className="text-2xl">Subscribe To Our Newsletter</h3>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                type="email"
                                label="Enter your email"
                                value={email}
                                onChange={onChange}
                                className="pr-20 bg-white"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <Button
                                size="sm"
                                color="blue"
                                className="!absolute  rounded shadow-none opacity-1 pointer-events-none top-0 right-0"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 8.608V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V8.608L11.652 13.664C11.7594 13.7202 11.8788 13.7496 12 13.7496C12.1212 13.7496 12.2406 13.7202 12.348 13.664L22 8.608ZM5.25 4H18.75C19.5556 3.9999 20.3325 4.299 20.93 4.83927C21.5276 5.37954 21.9032 6.12248 21.984 6.924L12 12.154L2.016 6.924C2.09352 6.15431 2.44305 5.43752 3.00175 4.90246C3.56045 4.36741 4.29168 4.04919 5.064 4.005L5.25 4Z" fill="currentColor" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex gap-2 w-full justify-around">
                            <div className="bg-white w-12 flex items-center justify-center p-2 rounded-full">
                                <img src={getImageUrl("icons/fb.svg")} alt="" />
                            </div>
                            <div className="bg-white w-12 flex items-center justify-center p-2 rounded-full">
                                <img src={getImageUrl("icons/x.svg")} alt="" />
                            </div>
                            <div className="bg-white w-12 flex items-center justify-center p-2 rounded-full">
                                <img src={getImageUrl("icons/insta.svg")} alt="" />
                            </div>
                            <div className="bg-white w-12 flex items-center justify-center p-2 rounded-full">
                                <img src={getImageUrl("icons/in.svg")} alt="" />
                            </div>
                            <div className="bg-white w-12 flex items-center justify-center p-2 rounded-full">
                                <img src={getImageUrl("icons/yt.svg")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-4">Pages</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-4">Services</h3>
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>CMS E-Commerce</li>
                        <li>Mobile App</li>
                        <li>UI/UX Designing</li>
                    </div>
                    <div className="text-sm">
                        <h3 className="text-2xl mb-4">Contact Us</h3>

                        <div className="flex gap-4 mb-2 items-center">
                            <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5549 22.133C15.1149 22.08 11.0339 21.516 6.75993 17.243C2.48693 12.969 1.92393 8.88897 1.86993 7.44797C1.78993 5.25197 3.47193 3.11897 5.41493 2.28597C5.64891 2.18494 5.90513 2.14647 6.15846 2.17435C6.41179 2.20222 6.65352 2.29548 6.85993 2.44497C8.45993 3.61097 9.56393 5.37497 10.5119 6.76197C10.7205 7.0667 10.8097 7.43752 10.7625 7.80377C10.7153 8.17002 10.535 8.5061 10.2559 8.74797L8.30493 10.197C8.21067 10.265 8.14432 10.365 8.11821 10.4783C8.09209 10.5916 8.10798 10.7105 8.16293 10.813C8.60493 11.616 9.39093 12.812 10.2909 13.712C11.1909 14.612 12.4439 15.45 13.3029 15.942C13.4106 16.0024 13.5374 16.0193 13.6572 15.9892C13.777 15.9591 13.8807 15.8842 13.9469 15.78L15.2169 13.847C15.4504 13.5368 15.7949 13.329 16.1781 13.2672C16.5614 13.2053 16.9537 13.2941 17.2729 13.515C18.6799 14.489 20.3219 15.574 21.5239 17.113C21.6856 17.3209 21.7884 17.5684 21.8216 17.8296C21.8549 18.0908 21.8173 18.3562 21.7129 18.598C20.8759 20.551 18.7579 22.214 16.5549 22.133Z" fill="white" />
                                </svg>

                            </div>

                            <p>+1 (315) 309-0085</p>
                        </div>

                        <div className="flex gap-4 mb-2 items-center">
                            <div className="bg-sky-300 w-12 flex items-center justify-center p-2 rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 8.608V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V8.608L11.652 13.664C11.7594 13.7202 11.8788 13.7496 12 13.7496C12.1212 13.7496 12.2406 13.7202 12.348 13.664L22 8.608ZM5.25 4H18.75C19.5556 3.9999 20.3325 4.299 20.93 4.83927C21.5276 5.37954 21.9032 6.12248 21.984 6.924L12 12.154L2.016 6.924C2.09352 6.15431 2.44305 5.43752 3.00175 4.90246C3.56045 4.36741 4.29168 4.04919 5.064 4.005L5.25 4Z" fill="white" />
                                </svg>

                            </div>
                            <p>dynamicsinfosolution@gmail.com</p>
                        </div>
                        <div className="flex gap-4 mb-2 items-center">
                            <div className=" w-12 flex items-center justify-center p-2 rounded-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="white" />
                                </svg>

                            </div>
                            <p>H-106 Ground Floor, Sector 63, Noida, Uttar Pradesh 201301</p>

                        </div>
                    </div>
                </div>
                </div>
                <hr className="opacity-20"/>
                <p className="text-white text-center py-2 text-sm">Copyright © 2024 Dynamics Info Solution All rights reserved.</p>
           
            </div>

        </footer >
    )
}