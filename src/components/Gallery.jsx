import React from 'react';
import Footer from './Footer';

import image from "../assets/Factory.png"
import image1 from "../assets/Expo.png"
import image2 from "../assets/Loading.png"

import Img2 from "../assets/Rectangle 36.png"
import Img3 from "../assets/Rectangle 27.png"
import Img4 from "../assets/Rectangle 28.png"
import Img5 from "../assets/Rectangle 39.png"




export default function Gallery() {


    return (

        <>
            <section className='lg:mt-80 mt-60 m-4' >
                <dir>
            <button className="bg-primary text-white h-12 w-48 text-2xl absolute lg:left-[100px]  mt-[-45px]">
                        Gallery
                    </button>
                    </dir>
                <img src={Img2} alt="" className='lg:px-4 transform ' />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center lg:px-4 mt-4 "> {/* Responsive grid layout */}

                    <img src={Img3} alt="" className="w-full h-auto" /> {/* Responsive image */}
                    <img src={Img4} alt="" className="w-full h-auto" /> {/* Responsive image */}
                    <img src={Img5} alt="" className="w-full h-auto" /> {/* Responsive image */}

                </div>
            </section>

            <section className="lg:mt-20">
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


            {/* CTA Section */}
            <div className="mt-12 mx-4 lg:ml-96">
                <h3 className="lg:text-5xl text-2xl font-semibold mb-4 text-center md:text-left">LET'S GET YOUR PROJECT</h3>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-4 md:space-x-6 lg:gap-28 gap-4">
                    <p className="lg:text-5xl text-2xl font-semibold text-center md:text-left">STARTED!</p>
                    <button className="border border-black hover:bg-black hover:text-white transition duration-300 h-10 w-20  md:w-28">
                        Call Now
                    </button>
                </div>
            </div>

            <Footer />
        </>


    );
}
