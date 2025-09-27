import React from "react";
import Weather1avif from "../Images/Weather1.avif";
const Projects = () => {
  return (
    <div className="h-[100%] bg-gradient-to-tr from-black via-slate-900 to-black text-white p-[30px] flex flex-col items-center gap-[60px]">
      <h1 className="text-4xl ">My Projects</h1>
      <div className="grid grid-cols-2 gap-[10px]">
        <div className="bg-gray-700/30 h-[500px] w-[320px] rounded-3xl backdrop-blur-md grid grid-rows-2 overflow-hidden">
          <img
            src={Weather1avif}
            alt=""
            className="bg-cover bg-origin-padding w-full h-[190px] "
          />
          <div className="bg-gray-100">
            <h1>Weather</h1>
            <p>
              Developed a responsive weather application in React.js that
              fetches and displays real-time weather data from an external API,
              allowing users to search for weather by city or use geolocation
              for automatic location detection.
            </p>
            <div className="grid grid-cols-2">
              <p>React Js</p>
              <p>Tailwind Css</p>
              <p>REST API</p>
              <p>API Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
