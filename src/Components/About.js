import React from "react";
import PF1 from "../Images/PF1.jpg";

const About = () => {
  return (
    <div className=" h-[100vh] flex flex-col gap-[30px] items-center p-[30px] text-center text-white bg-gradient-to-tr border-t border-gray-600 border-solid  from-black via-slate-900 to-black">
      <div className="flex flex-col gap-[30px]">
        <h1 className=" text-5xl font-bold ">About Me</h1>
        <p className="text-gray-400">
          Passionate about creating digital experiences that push the <br />{" "}
          boundaries of what's possible
        </p>
      </div>
      <div className="flex mt-[30px] gap-[30px]">
        <div className=" relative">
          <p className="bg-gray-800 h-[300px] w-[370px] rounded-2xl"></p>
          <p className="p-[22px] bg-gray-800 rounded-xl absolute bottom-0 transform translate-y-[25px] translate-x-[20px] shadow-xl shadow-white/10 ">
            <img src={PF1} alt="" className="h-[250px] w-[200px] rounded-xl" />
          </p>
        </div>
        <div className="text-white w-[400px] text-start">
          <h1 className="text-2xl mb-[30px]">
            Hello Again, I'm Saiteja Gurappadi{" "}
          </h1>
          <p className="text-[13px] font-thin">
            I am a passionate Web Developer skilled in creating responsive,
            user-friendly, and visually appealing interfaces using modern
            front-end technologies. Along with front-end expertise, I also work
            as a Node.js Developer, building scalable back-end systems, APIs,
            and database integrations using Node.js and Express.js. My focus is
            on delivering complete, efficient, and performance-driven web
            applications with a balance of design and functionality.
          </p>
          <p className="text-[13px] mt-[20px] font-thin">
            I specialize in developing dynamic web applications with a focus on
            both front-end design and back-end functionality. My skills include
            building interactive user interfaces, integrating databases,, and
            creating secure server-side solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
