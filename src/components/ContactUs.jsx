import React, { useState } from 'react';
import Footer from './Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyMail: '',
    phoneNumber: '',
    companySize: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (

    <>
    <div className="min-h-screen bg-white p-4 md:p-8 lg:mt-40">
      <div className="m-10 mt-28 lg:mt-[-2px]">
        {/* Header Section */}
        <div className="mb-12 ">
          <h1 className="text-4xl md:text-5xl text-gray-400 font-light mb-4">
            what's your next consignment?
          </h1>
          <h2 className="text-4xl md:text-5xl text-gray-400 font-light">
            let's plan your logistics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div className='lg:mt-20'>
              <p className=" mb-2">
                Looking for a good path to take your business to the next level?
              </p>
              <p className="">
                Get in touch today to learn more.
              </p>
            </div>

            <div className="">
              <p className="font-medium">Aapt Distribution Pvt Ltd</p>
              <p>No. 25, Cathedral Road, Chennai 600086, India.</p>
              <p className='mt-8'>Phone: +91-44 66400810 | Fax: +91-44 66400888</p>
              <p className="mt-8">aaptgranites@gmail.com</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <h3 className="text-sm font-medium mb-6">
                YOUR COMPANY/INDUSTRY DETAILS*
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Full name*"
                    className="w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Company Mail*"
                    className="w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2"
                    value={formData.companyMail}
                    onChange={(e) => setFormData({...formData, companyMail: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Company Size*"
                    className="w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2"
                    value={formData.companySize}
                    onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm text-gray-600">
                  What would you like to discuss?*
                </label>
                <textarea
                  placeholder="Your message......"
                  className="w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <div className="text-center py-4 ">
        <marquee behavior="scroll" direction="left" scrollamount="5" className="text-xl text-gray-800">
          Europe &nbsp;  &nbsp; Europe &nbsp;  &nbsp; Europe &nbsp;  &nbsp; Europe &nbsp;  &nbsp; Europe
        </marquee>
      </div>

    </div>
    

    {/* <footer className="bg-gray-900 text-white py-1 lg:h-[200px] lg:rounded-b-[60px]">
    <div className="container mx-auto px-4 lg:px-2">
        
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 lg:mt-10 md:mt-10">
            
            
            <div className="my-4 lg:my-0 lg:mt-10 text-center lg:mr-40"> 
                <div className="mt-4 text-white text-xs">
                    <p>
                        <a href="#" className="hover:text-white mx-2">Home</a> |
                        <a href="#" className="hover:text-white mx-2">About us</a> |
                        <a href="#" className="hover:text-white mx-2">Products</a> |
                        <a href="#" className="hover:text-white mx-2">Blog</a> |
                        <a href="#" className="hover:text-white mx-2">Gallery</a> |
                        <a href="#" className="hover:text-white mx-2">Download</a> |
                        <a href="#" className="hover:text-white mx-2">Contact us</a>
                    </p>
                </div>
            </div>

          
            <div className="text-sm text-center lg:ml-96">
                <p className='mt-2'>Facebook: Aaptgranites</p>
                <p className='mt-4'>YouTube: @aapt_granites</p>
                <p className='mt-4'>Instagram: aapt_granites</p>
                <p className='mt-4'>Twitter: @aapt_granites</p>
            </div>
        </div>
    </div>
    </footer> */}


     <Footer/>
    </>

    
  );
}
