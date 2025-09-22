import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 h-[100vh] flex flex-col items-center text-center text-white">
      <div>
        <h1 className=" text-5xl font-bold ">About Me</h1>
        <p className="text-gray-300">
          Passionate about creating digital experiences that push the boundaries
          of what's possible
        </p>
      </div>
      <div className="flex">
        <div className="relative">
          <p className="px-[170px] py-[150px] rounded-lg bg-gray-400 relative z-0"></p>
          <p className="px-[150px] py-[120px] bg-red-200 transform -translate-6"></p>
          <img src="" alt="" />
        </div>
        <div className="text-white">
            <h1 className="text-2xl">Hello Again I'm Saiteja Gurappadi </h1>

        </div>
      </div>
    </div>
  );
};

export default About;
