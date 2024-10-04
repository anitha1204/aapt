import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 lg:h-[300px] lg:rounded-b-[60px] mt-20">
            <div className="container mx-auto px-4 lg:px-2">
                {/* Grid layout for the footer */}
                <div className="grid grid-cols-1 md:grid-cols-[400px_600px_400px] justify-items-center gap-y-8 lg:mt-10 md:mt-10">
                    
                    {/* Left Section */}
                    <div className="text-sm text-center md:text-left">
                        <p>Aapt Distribution Pvt Ltd</p>
                        <p className="mt-1">No. 25, Cathedral Road, Chennai 600086, India.</p>
                        <p className='mt-6'>Phone: +91-44 66400810 | Fax: +91-44 66400888</p>
                        <p className='mt-6'>aaptgranites@gmail.com</p>
                    </div>

                    {/* Center Section */}
                    <div className="my-4 lg:my-0 lg:mt-10">
                        <form className="flex flex-col md:flex-row items-center justify-center">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="w-full md:w-[300px] lg:w-[410px] py-2 border-b border-white text-white bg-transparent focus:outline-none mb-4 md:mb-0"
                            />
                            <button
                                type="submit"
                                className="py-2 border-b border-white text-white "
                            >
                                Submit
                            </button>
                        </form>
                        <div className="text-center mt-4 text-white text-xs">
                            <p>
                                <a href="#" className="hover:text-white mx-2 ">Home</a> |
                                <a href="#" className="hover:text-white mx-2">About us</a> |
                                <a href="#" className="hover:text-white mx-2">Products</a> |
                                <a href="#" className="hover:text-white mx-2">Blog</a> |
                                <a href="#" className="hover:text-white mx-2">Gallery</a> |
                                <a href="#" className="hover:text-white mx-2">Download</a> |
                                <a href="#" className="hover:text-white mx-2">Contact us</a>
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-sm text-center md:text-right">
                        <p className='mt-2'>Facebook: Aaptgranites</p>
                        <p className='mt-4'>YouTube: @aapt_granites</p>
                        <p className='mt-4'>Instagram: aapt_granites</p>
                        <p className='mt-4'>Twitter: @aapt_granites</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
