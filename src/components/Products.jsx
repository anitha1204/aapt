// import React, { useState } from 'react';
// import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

// // Ensure the image paths are correct
// import blackblocks1 from '../assets/Group of Projects.png'; // Adjust the path as needed
// import blackblocks2 from '../assets/Guarantee.png'; // Add another image for black blocks
// import colorblocks1 from '../assets/Factory.png'; // Adjust the path as needed
// import colorblocks2 from '../assets/Banner.png'; // Add another image for color blocks

// import Img from "../assets/Banner.png"

// const Products = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqItems = [
//     {
//       mainQuestion: 'Black Blocks',
//       subItems: [
//         {
//           heading: 'Heading 1 for Black Blocks',
//           img: blackblocks1,
//           text:
//             'Our business has grown steadily since, Aapt thus becoming the largest engineering company in Iceland with offices across the country.',
//         },
//         {
//           heading: 'Heading 2 for Black Blocks',
//           img: blackblocks2,
//           text:
//             'We also provide state-of-the-art solutions for industrial and commercial purposes, leading innovation in many sectors.',
//         },
//       ],
//     },
//     {
//       mainQuestion: 'Color Blocks',
//       subItems: [
//         {
//           heading: 'Heading 1 for Color Blocks',
//           img: colorblocks1,
//           text:
//             'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
//         },
//         {
//           heading: 'Heading 2 for Color Blocks',
//           img: colorblocks2,
//           text:
//             'Join our masterclass and learn from the experts to take your baking skills to the next level.',
//         },
//       ],
//     },
//   ];

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>

// <div>
//                 <div className="relative h-[700px]">
//                     <img
//                         src={Img}
//                         alt="Banner"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />
//                 </div>
//             </div>


//     <div className="max-w-[90%] mx-auto p-6 sm:p-8 sm:ml-20 mt-40">
//       {/* Granite Heading */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6">
//         Granite
//       </h2>

//       {/* FAQ Section */}
//       <div className="space-y-4">
//         {faqItems.map((item, index) => (
//           <div key={index} className="border-b border-gray-200 pb-4">
//             <div
//               className="flex items-center justify-between cursor-pointer"
//               onClick={() => toggleItem(index)}
//             >
//               <h3 className="font-nunito font-bold text-lg sm:text-2xl">{item.mainQuestion}</h3>
//               {openIndex === index ? (
//                 <HiChevronUp className="text-gray-500" />
//               ) : (
//                 <HiChevronDown className="text-gray-500" />
//               )}
//             </div>

//             {/* Conditional Rendering for Images, Headings, and Descriptions */}
//             {openIndex === index && (
//               <div className="mt-4  grid grid-cols-1 md:grid-cols-2">
//                 {/* Mapping through subItems to display multiple headings, images, and text */}
//                 {item.subItems.map((subItem, subIndex) => (
//                   <div key={subIndex} className="flex flex-col items-center gap-4">
//                     {/* Image */}
//                     <div className="w-full sm:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
//                       <img
//                         src={subItem.img}
//                         alt={`${item.mainQuestion} - ${subItem.heading}`}
//                         className="w-40 h-40 object-cover"
//                       />
//                     </div>

//                     {/* Heading and Text */}
//                     <div className="w-full sm:w-1/2">
//                       <h4 className="font-nunito font-semibold text-lg sm:text-xl mb-2">
//                         {subItem.heading}
//                       </h4>
//                       <p className="font-nunito text-gray-600 text-base sm:text-lg">
//                         {subItem.text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}

//                 {/* Book Now Button */}
//                 <button className=" mt-4 rounded hover:bg-blue-800 transition-colors">
//                   Book Now
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Products;



import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

// Ensure the image paths are correct
import blackblocks1 from '../assets/Rectangle 30.png';
import blackblocks2 from '../assets/Rectangle 28.png';
import colorblocks1 from '../assets/Factory.png';
import colorblocks2 from '../assets/Banner.png';

import basicceramic from '../assets/Rectangle 28.png';

import Img from "../assets/Banner.png"
import Footer from './Footer';
import Image from './Image';

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      mainQuestion: ' Blocks',
      subItems: [
        {
          heading: 'Black Blocks',
          img: blackblocks1,
          text:
            'Our business has grown steadily since, Aapt thus becoming the largest engineering company in Iceland with offices across the country.',
        },
        {
          heading: 'Color Blocks',
          img: blackblocks2,
          text:
            'We also provide state-of-the-art solutions for industrial and commercial purposes, leading innovation in many sectors.',
        },
      ],
    },
    {
      mainQuestion: 'Slabs',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },
        {
          heading: 'Color Blocks',
          img: colorblocks2,
          text:
            'Join our masterclass and learn from the experts to take your baking skills to the next level.',
        },
      ],
    },
    {
      mainQuestion: 'Monuments & Tombstones',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },
        {
          heading: 'Color Blocks',
          img: colorblocks2,
          text:
            'Join our masterclass and learn from the experts to take your baking skills to the next level.',
        },
      ],
    },
  ];


  const faqItem = [
    {
      mainQuestion: 'Basic Ceramic',
      subItems: [
        {
          heading: '30x30 | 40x40 | 60x60',
          img: basicceramic,
          text:
            'Floor Tiles | Wal Tiles (30x45 | 30x60)',
        },

      ],
    },
    {
      mainQuestion: 'Vitrified Tiles',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },

      ],
    },
    {
      mainQuestion: 'PGVT High Glossy',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },

      ],
    },
    {
      mainQuestion: 'Large Format Tiles',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },

      ],
    },
  ];

  const faq = [
    {
      mainQuestion: 'Shorts Slabs',
      subItems: [
        {
          heading: '30x30 | 40x40 | 60x60',
          img: basicceramic,
          text:
            'Floor Tiles | Wal Tiles (30x45 | 30x60)',
        },

      ],
    },
    {
      mainQuestion: 'Medium Slabs',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },

      ],
    },
    {
      mainQuestion: 'Jumbo Slabs',
      subItems: [
        {
          heading: ' Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },

      ],
    },

  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <div className="relative h-[700px]">

        <img
          src={Img}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-b-[50px] "
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-[50px]"></div>

        <div className="absolute inset-0 flex flex-col justify-center text-white mx-auto lg:mx-[270px] text-center lg:text-left lg:mt-[300px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl">
            Explore our wide range of products that meet your needs and preferences.
            Quality and satisfaction are guaranteed in every purchase.
          </p>
        </div>

      </div>



      <div className="max-w-[90%] mx-auto  sm:p-8 lg:px-20 mt-10 lg:mx-[200px]">
        {/* Granite Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center lg:text-left">
          Granite
        </h2>
        <p className="text-center lg:text-left mx-auto lg:mx-0 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, adipisci mollitia provident culpa earum sit cum vero architecto accusamus libero officia itaque ullam? Quibusdam impedit iusto, iure vero commodi earum! Corrupti illum minima quasi facilis corporis, in quisquam mollitia iure aperiam unde reiciendis sit voluptate illo beatae est sint molestiae voluptatum laborum labore aliquid sapiente velit culpa! Nihil, delectus a.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4 mt-20 ">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-400 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-nunito font-bold text-lg sm:text-2xl text-primary">
                  {item.mainQuestion}
                </h3>
                {openIndex === index ? (
                  <HiChevronUp className="text-gray-500" />
                ) : (
                  <HiChevronDown className="text-gray-500" />
                )}
              </div>

              {/* Conditional Rendering for Images, Headings, and Descriptions */}
              {openIndex === index && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mapping through subItems to display multiple headings, images, and text */}
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex flex-col space-y-4">
                      {/* Image */}
                      <div className="flex justify-center md:justify-start">
                        <img
                          src={subItem.img}
                          alt={`${item.mainQuestion} - ${subItem.heading}`}
                          className="w-full sm:w-96 h-60 object-cover rounded-2xl"
                        />
                      </div>

                      {/* Heading and Text */}
                      <div className="w-full sm:w-[400px] mx-auto md:mx-0">
                        <h4 className="font-nunito font-semibold text-lg sm:text-xl mb-2">
                          {subItem.heading}
                        </h4>
                        <p className="font-nunito text-gray-600 text-base sm:text-lg">
                          {subItem.text}
                        </p>
                      </div>

                      {/* Button */}
                      <div className="flex justify-center md:justify-start">
                        <button className="mt-4  rounded hover:bg-blue-600">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>



      <div className="max-w-[90%] mx-auto  sm:p-8 lg:px-20 mt-10 lg:mx-[200px]">
        {/* Ceramic Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center lg:text-left">
          Ceramic
        </h2>
        <p className="text-center lg:text-left mx-auto lg:mx-0 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, adipisci mollitia provident culpa earum sit cum vero architecto accusamus libero officia itaque ullam? Quibusdam impedit iusto, iure vero commodi earum! Corrupti illum minima quasi facilis corporis, in quisquam mollitia iure aperiam unde reiciendis sit voluptate illo beatae est sint molestiae voluptatum laborum labore aliquid sapiente velit culpa! Nihil, delectus a.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4 mt-20">
          {faqItem.map((item, index) => (
            <div key={index} className="border-b border-gray-400 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-nunito font-bold text-lg sm:text-2xl text-primary">
                  {item.mainQuestion}
                </h3>
                {openIndex === index ? (
                  <HiChevronUp className="text-gray-500" />
                ) : (
                  <HiChevronDown className="text-gray-500" />
                )}
              </div>

              {/* Conditional Rendering for Images, Headings, and Descriptions */}
              {openIndex === index && (
                <div className="flex flex-col lg:flex-row  mt-10">
                  {/* Mapping through subItems to display multiple headings, images, and text */}
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-20 ">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={subItem.img}
                          alt={`${item.mainQuestion} - ${subItem.heading}`}
                          className="w-full sm:w-96 h-40 sm:h-60 object-cover rounded-2xl"
                        />
                      </div>

                      {/* Heading and Text */}
                      <div className="w-full lg:mt-20">
                        <h4 className="font-nunito font-semibold text-lg sm:text-xl mb-2">
                          {subItem.heading}
                        </h4>
                        <p className="font-nunito text-gray-600 text-base sm:text-lg">
                          {subItem.text}
                        </p>
                        <button className="mt-4">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>



      <div className="max-w-[90%] mx-auto sm:p-8 lg:px-20 mt-10 lg:mx-[200px]">
        {/* Quartz Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center lg:text-left lg:ml-0">
          Quartz
        </h2>
        <p className="text-center lg:text-left mx-auto lg:mx-0 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, adipisci mollitia provident culpa earum sit cum vero architecto accusamus libero officia itaque ullam? Quibusdam impedit iusto, iure vero commodi earum! Corrupti illum minima quasi facilis corporis, in quisquam mollitia iure aperiam unde reiciendis sit voluptate illo beatae est sint molestiae voluptatum laborum labore aliquid sapiente velit culpa! Nihil, delectus a.
        </p>

        {/* FAQ Section */}
        <div className="space-y-4 mt-20 lg:mx-0 mx-auto">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-400 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-nunito font-bold text-lg sm:text-2xl text-primary">
                  {item.mainQuestion}
                </h3>
                {openIndex === index ? (
                  <HiChevronUp className="text-gray-500" />
                ) : (
                  <HiChevronDown className="text-gray-500" />
                )}
              </div>

              {/* Conditional Rendering for Images, Headings, and Descriptions */}
              {openIndex === index && (
                <div className="flex flex-col lg:flex-row  mt-10">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-20">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={subItem.img}
                          alt={`${item.mainQuestion} - ${subItem.heading}`}
                          className="w-full sm:w-96 h-40 sm:h-60 object-cover rounded-2xl"
                        />
                      </div>

                      {/* Heading and Text */}
                      <div className="w-full">
                        <h4 className="font-nunito font-semibold text-lg sm:text-xl mb-2">
                          {subItem.heading}
                        </h4>
                        <p className="font-nunito text-gray-600 text-base sm:text-lg">
                          {subItem.text}
                        </p>
                        <button className="mt-4 ">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


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

      <Image />

      <Footer />

    </>
  );
};

export default Products;
