import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

// Ensure the image paths are correct
import blackblocks1 from '../assets/Group of Projects.png'; // Adjust the path as needed
import blackblocks2 from '../assets/Guarantee.png'; // Add another image for black blocks
import colorblocks1 from '../assets/Factory.png'; // Adjust the path as needed
import colorblocks2 from '../assets/Banner.png'; // Add another image for color blocks

import Img from "../assets/Banner.png"

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      mainQuestion: 'Black Blocks',
      subItems: [
        {
          heading: 'Heading 1 for Black Blocks',
          img: blackblocks1,
          text:
            'Our business has grown steadily since, Aapt thus becoming the largest engineering company in Iceland with offices across the country.',
        },
        {
          heading: 'Heading 2 for Black Blocks',
          img: blackblocks2,
          text:
            'We also provide state-of-the-art solutions for industrial and commercial purposes, leading innovation in many sectors.',
        },
      ],
    },
    {
      mainQuestion: 'Color Blocks',
      subItems: [
        {
          heading: 'Heading 1 for Color Blocks',
          img: colorblocks1,
          text:
            'Aspiring Bakers and Pastry Chefs, Home Bakers, Culinary Enthusiasts, Career Changers.',
        },
        {
          heading: 'Heading 2 for Color Blocks',
          img: colorblocks2,
          text:
            'Join our masterclass and learn from the experts to take your baking skills to the next level.',
        },
      ],
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    

    <div className="max-w-[90%] mx-auto p-6 sm:p-8 sm:ml-20 mt-40">
      {/* Granite Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6">
        Granite
      </h2>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <h3 className="font-nunito font-bold text-lg sm:text-2xl">{item.mainQuestion}</h3>
              {openIndex === index ? (
                <HiChevronUp className="text-gray-500" />
              ) : (
                <HiChevronDown className="text-gray-500" />
              )}
            </div>

            {/* Conditional Rendering for Images, Headings, and Descriptions */}
            {openIndex === index && (
              <div className="mt-4  grid grid-cols-1 md:grid-cols-2">
                {/* Mapping through subItems to display multiple headings, images, and text */}
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex flex-col items-center gap-4">
                    {/* Image */}
                    <div className="w-full sm:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={subItem.img}
                        alt={`${item.mainQuestion} - ${subItem.heading}`}
                        className="w-40 h-40 object-cover"
                      />
                    </div>

                    {/* Heading and Text */}
                    <div className="w-full sm:w-1/2">
                      <h4 className="font-nunito font-semibold text-lg sm:text-xl mb-2">
                        {subItem.heading}
                      </h4>
                      <p className="font-nunito text-gray-600 text-base sm:text-lg">
                        {subItem.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Book Now Button */}
                <button className=" mt-4 rounded hover:bg-blue-800 transition-colors">
                  Book Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
