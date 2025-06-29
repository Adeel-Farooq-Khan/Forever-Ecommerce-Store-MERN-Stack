import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-0 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Us Illustration"
        />

        
        <section className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">
            7298 King Lodge
            <br />
            North Elton, Illinois 78154
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+1 800 123 1234</span>
          </p>
          <p className="text-gray-800">
            Email: <span className="text-gray-500">admin@forever.com</span>
          </p>

          <p className="text-gray-500">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </section>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
