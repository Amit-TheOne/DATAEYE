import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 pb-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">
          DATAEYE.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          possimus autem natus magni non dolores pariatur iste asperiores ea
          quas?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 sm:px-3 md:mx-auto hover:cursor-pointer">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 md:mx-5">
        <div>
          <h5 className="font-medium text-gray-400">Solutions</h5>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Analytics</li>
            <li className="py-2 text-sm hover:cursor-pointer">Marketing</li>
            <li className="py-2 text-sm hover:cursor-pointer">Commerce</li>
            <li className="py-2 text-sm hover:cursor-pointer">Insights</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-gray-400">Support</h5>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Pricing</li>
            <li className="py-2 text-sm hover:cursor-pointer">Documentation</li>
            <li className="py-2 text-sm hover:cursor-pointer">Guides</li>
            <li className="py-2 text-sm hover:cursor-pointer">API Status</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-gray-400">Company</h5>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">About</li>
            <li className="py-2 text-sm hover:cursor-pointer">Blog</li>
            <li className="py-2 text-sm hover:cursor-pointer">Jobs</li>
            <li className="py-2 text-sm hover:cursor-pointer">Press</li>
            <li className="py-2 text-sm hover:cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-gray-400">Legal</h5>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Claim</li>
            <li className="py-2 text-sm hover:cursor-pointer">Policy</li>
            <li className="py-2 text-sm hover:cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
      {/* <div className=" mb-[-6] mx-auto"> */}
      <p className="font-medium text-gray-200 mx-auto lg:col-span-3">
        Made with ♥ by <span className="text-[#00df9a]">Amit Dewangan</span>
      </p>
      {/* </div> */}
    </div>
  );
};

export default Footer;
