import React from "react";
import Img from "../assets/Banner.png";
import img1 from "../assets/Group 24.png";
import skilledEmployeesImg from '../assets/Brainstorm Skill.png';
import satisfactionImg from '../assets/Smiling.png';
import qualityPolicyImg from '../assets/Guarantee.png';
import shippedProjectsImg from '../assets/Group of Projects.png';
import bestTechniciansImg from '../assets/Plumber.png';
import Footer from "./Footer";
import Image from "./Image";

import image from "../assets/Factory.png"
import image1 from "../assets/Expo.png"
import image2 from "../assets/Loading.png"

const Home = () => {

    const data = [
        { img: skilledEmployeesImg, title: "Skilled Employees", description: "We provide only the best and most experienced employees to handle your tasks." },
        { img: satisfactionImg, title: "100% Satisfaction", description: "Our clients are fully satisfied with our services and commitment." },
        { img: qualityPolicyImg, title: "Quality Policy", description: "We adhere to strict quality standards for every product and service." },
        { img: shippedProjectsImg, title: "Shipped Projects", description: "Thousands of projects shipped with timely and efficient delivery." },
        { img: bestTechniciansImg, title: "Best Technicians", description: "Our technicians are industry experts, ensuring seamless operations." }
    ];

    return (
        <>
            <div>
                <div className="relative h-[700px]">
                    <img
                        src={Img}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* ---------------------------------------------- */}
            <section className="grid grid-cols-1 md:grid-cols-[500px_auto] mt-[10px] px-4 lg:px-0 gap-4 p-10">
                {/* Left Section - Company Name */}
                <div className="flex justify-center items-center">
                    <h1 className="">
                        AAPT GRANITE
                    </h1>
                </div>

                {/* Right Section - Description */}
                <div className="flex items-center">
                    <p className="text-[14px] md:text-[16px] lg:text-[14px] leading-relaxed">
                        We offer profound, specialised advice within the areas of shipping & trading, insurance & reinsurance, and dispute resolution. We are dedicated to serving
                        our clients with comprehensive assistance of the highest quality. We will make
                        you feel in good company.
                    </p>
                </div>
            </section>
            {/* ---------------------------------------------------------- */}
            <section className=" lg:mt-20">
                <p className="text-center text-[32px] md:text-[50px] ">Worldwide Exporting</p>

                <div className="flex justify-center mt-10">
                    <img
                        src={img1}
                        alt="Worldwide Exporting"
                        className="w-full max-w-[95%] md:max-w-[980px] h-auto object-contain"
                    />
                </div>
            </section>
            {/* ------------------------------------------------- */}
            <section className="py-16 mt-10">
                <h2 className=" text-center text-[32px] md:text-[50px] mb-20">Why Aapt Distribution?</h2>

                {/* Top Row with 3 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-20 gap-10 mx-auto max-w-6xl text-center">
                    {data.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                            <p className="">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row with 2 images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 gap-10 justify-center mt-10 text-center mx-auto max-w-2xl">
                    {data.slice(3).map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={item.img} alt={item.title} className="w-20 h-20 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                            <p className="">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* --------------------------------------------------- */}
            <section className="lg:mt-8">
                <div className="relative mb-10">
                    <div className="border border-gray-500 mb-0"></div>
                    <button className="bg-red-600 text-white h-12 w-48 text-2xl absolute left-[145px] transform -translate-x-1/2 -top-0">
                        Gallery
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                    <div className="flex justify-center">
                        <img src={image} alt="" className="w-full h-auto max-w-[400px] max-h-[450px]" />
                    </div>
                    <div className="flex justify-center">
                        <img src={image1} alt="" className="w-full h-auto max-w-[450px] max-h-[650px]" />
                    </div>
                    <div className="flex justify-center">
                        <img src={image2} alt="" className="w-full h-auto max-w-[400px] max-h-[450px]" />
                    </div>
                </div>
            </section>


            {/* -------------------------------------------     */}

            <section className="bg-gray-100 py-28 mt-10">
                <div className="container ">

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 mb-12">
                        {/* Stat 1 */}
                        <div className="text-center">
                            <h2 className="lg:text-5xl text-3xl ">1000+</h2>
                            <p className="mt-2 ">Clients</p>
                        </div>
                        {/* Stat 2 */}
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl">620+</h2>
                            <p className="mt-2">Active Clients</p>
                        </div>
                        {/* Stat 3 */}
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl ">35+</h2>
                            <p className="mt-2 ">Quartz + Granite </p>
                        </div>
                        {/* Stat 4 */}
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl ">1000+</h2>
                            <p className="mt-2">Happy Clients</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 mx-4 md:mx-20">
                        <h3 className="lg:text-5xl text-2xl font-semibold mb-4 text-center md:text-left">LET'S GET YOUR PROJECT</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-4 md:space-x-6 lg:gap-28 gap-4">
                            <p className="lg:text-5xl text-2xl font-semibold text-center md:text-left">STARTED!</p>
                            <button className="border border-black hover:bg-black hover:text-white transition duration-300 h-10 w-20  md:w-28">
                                Call Now
                            </button>
                        </div>
                    </div>


                </div>
            </section>
            {/* ----------------------------------------- */}

            <Image/>

            <Footer />
        </>
    );
};

export default Home;



