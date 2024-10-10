import React from "react";
import img from "../assets/Rectangle 1.png";
import skilledEmployeesImg from '../assets/Brainstorm Skill.png';
import satisfactionImg from '../assets/Smiling.png';
import qualityPolicyImg from '../assets/Guarantee.png';
import shippedProjectsImg from '../assets/Group of Projects.png';
import bestTechniciansImg from '../assets/Plumber.png';

import Img from "../assets/81jh9fuDcmS.png"
import Img1 from "../assets/b1-intermediate-english-certificate-1.png";

import Img2 from "../assets/Rectangle 26.png"
import Img3 from "../assets/Rectangle 27.png"
import Img4 from "../assets/Rectangle 28.png"
import Img5 from "../assets/Rectangle 29.png"
import Img6 from "../assets/Rectangle 30.png"
import Img7 from "../assets/Rectangle 31.png"
import Footer from "./Footer";
import Image from "./Image";


const AboutUs = () => {

    const data = [
        { img: skilledEmployeesImg, title: "Skilled Employees", description: "We provide only the best and most experienced employees to handle your tasks." },
        { img: satisfactionImg, title: "100% Satisfaction", description: "Our clients are fully satisfied with our services and commitment." },
        { img: qualityPolicyImg, title: "Quality Policy", description: "We adhere to strict quality standards for every product and service." },
        { img: shippedProjectsImg, title: "Shipped Projects", description: "Thousands of projects shipped with timely and efficient delivery." },
        { img: bestTechniciansImg, title: "Best Technicians", description: "Our technicians are industry experts, ensuring seamless operations." }
    ];

    return (
        <>

            <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 lg:gap-[85px] gap-10 m-5 lg:mt-60 mt-28">
                <div className=" w-full lg:w-5/6 h-[20%]">
                    <img className=" rounded-lg" src={img} alt="img" />
                </div>
                <div className=" w-full lg:w-3/4 space-y-4 mb-10">
                    <h1 className=" text-2xl font-semibold text-center lg:text-start">Aapt Distribution</h1>
                    <p className=" text-justify lg:text-start mt-8 ">
                    Established in 2003 Aapt is a leading name in Building material  Business. Aapt means trust worthy in Sanskrit (an ancient 
                        Indian language).<br /> Everything we do is to live upto this name.We are accredited with 2 start export house status by Ministry of 
                        commerce Govt of India for our contribution in Nation’s foreign trade. <br />  We have been give “ 1” rating by CIBIL for our credit 
                        worthiness which is the best Ranking for the financial performance /well being of corporates. <br/>We ship our Goods to more than 
                        25 countries across the world and we earned good will of more than 60 clients spanning across 6 continents. <br/>we have 
                        invested on State of the art plan and machineries for processing Granite slabs, Monuments an countertops and sculptures.
                    </p>
                    <p className=" text-justify lg:text-start mt-8">
                        Our business grown steadily since then. It got large presents at Europe,<br />Latina America, Africa and soy th Asian countries.
                    </p>
                </div>
            </div>

            {/* --------------------- */}


            <section className=" lg:mt-[150px] ">
                <h2 className=" text-center text-[32px] md:text-[50px] lg:mb-20 mb-10">Why Aapt Distribution?</h2>

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

            {/* ------------------------------- */}

            <section>
                <h2 className="text-center text-[32px] md:text-[50px] mb-14 lg:mt-16 mt-10">Awards & Certificate</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6"> 
                    <img src={Img1} alt="Award or Certificate 1" className="w-full md:w-auto h-auto max-w-[450px]" /> 
                    <img src={Img} alt="Award or Certificate 2" className="w-full md:w-auto h-auto max-w-[450px]" />
                </div>
            </section>
            {/* ------------------------ */}

            <section>
                <div className="border border-gray-500 mb-0 lg:mt-28 mt-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center lg:mt-28 mt-10 lg:m-20 m-4"> 
                    <img src={Img2} alt="" className="w-full h-auto" /> 
                    <img src={Img3} alt="" className="w-full h-auto" />
                    <img src={Img4} alt="" className="w-full h-auto" /> 
                    <img src={Img5} alt="" className="w-full h-auto" /> 
                    <img src={Img6} alt="" className="w-full h-auto" /> 
                    <img src={Img7} alt="" className="w-full h-auto" /> 
                </div>
            </section>

            {/* ---------------------------- */}

            <section className="bg-gray-100 py-20 mt-10">
                <div className="container ">

                    {/* Stats Section */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-4 mb-12">
                        
                        <div className="text-center">
                            <h2 className="lg:text-5xl text-3xl ">1000+</h2>
                            <p className="mt-2 ">Clients</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl">620+</h2>
                            <p className="mt-2">Active Clients</p>
                        </div>
                        
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl ">35+</h2>
                            <p className="mt-2 ">Quartz + Granite </p>
                        </div>
                       
                        <div className="text-center">
                            <h2 className="lg:text-5xl  text-3xl ">1000+</h2>
                            <p className="mt-2">Happy Clients</p>
                        </div>
                    </div> */}

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

            <Image/>

            <Footer/>

        </>
    );
};

export default AboutUs;
