import React from 'react';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

const WhatWeDo = () => {
  return (
    <div className="section">
      <div className="p-8">
        <h1 className="text-4xl font-normal text-sky-700">What We Do</h1>
        <p className="mt-10 text-gray-500 leading-8">
          This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our{" "}
          <span className="text-sky-700">Tooplate Facebook page</span>.
        </p>
      </div>

      {/* Responsive grid for different screen sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

        {/* Market Analysis */}
        <div className="flex flex-col md:flex-row items-center m-6 p-8 gap-5">
          <BsGraphUpArrow className="text-6xl text-sky-700" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl text-sky-700">Market analysis</h1>
            <p className="text-gray-500 text-sm">Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
          </div>
        </div>

        {/* Fast Support */}
        <div className="flex flex-col md:flex-row items-center m-6 p-8 gap-5">
          <IoMdText className="text-6xl text-sky-700" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl text-sky-700">Fast Support</h1>
            <p className="text-gray-500 text-sm">Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
          </div>
        </div>

        {/* Top Security */}
        <div className="flex flex-col md:flex-row items-center m-6 p-8 gap-5">
          <FaFingerprint className="text-6xl text-sky-700" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl text-sky-700">Top Security</h1>
            <p className="text-gray-500 text-sm">Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click Me
            </button>
          </div>
        </div>

        {/* Social Work */}
        <div className="flex flex-col md:flex-row items-center m-6 p-8 gap-5">
          <IoIosPeople className="text-6xl text-sky-700" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl text-sky-700">Social Work</h1>
            <p className="text-gray-500 text-sm">Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
