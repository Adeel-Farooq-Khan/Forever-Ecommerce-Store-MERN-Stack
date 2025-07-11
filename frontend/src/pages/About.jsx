import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quis cupiditate atque ratione ab. Minus nisi itaque consequuntur
            corporis quod ratione quam. Accusamus praesentium eligendi omnis
            similique eum excepturi, in rerum debitis possimus nam corporis
            ducimus quisquam doloribus recusandae laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            sunt! Incidunt voluptate tempora qui, deleniti quo rerum adipisci
            tempore nemo laudantium veniam officiis inventore excepturi
            doloremque itaque, ratione fugit necessitatibus voluptatibus impedit
            pariatur! Quaerat, est porro?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            dolor! Consequatur quo earum quia minima, porro amet aperiam
            impedit? Voluptates natus nisi voluptate. Perferendis vero sequi
            dolor velit nihil.
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut
            labore est fugiat sed dolorum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p  className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut
            labore est fugiat sed dolorum. Lorem, ipsum dolor.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut
            labore est fugiat sed dolorum.
          </p>
        </div>
      </div>

    <NewsletterBox />

    </div>
  );
};

export default About;
