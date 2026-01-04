import { useState } from "react";
import MyProjectsLists from "../Components/MyProjectsLists";
const Projects = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div
      className="h-[100%] bg-gradient-to-tr from-black via-slate-900 to-black text-white pt-[70px] p-[30px] flex flex-col items-center gap-[60px] relative z-10"
      id="projects"
    >
      <h1 className="text-4xl ">My Projects</h1>
      <div className="grid grid-cols-3 gap-[25px] ">
        {MyProjectsLists.map((data) => (
          <div className="bg-gray-700/30 h-[550px] w-[330px] rounded-3xl backdrop-blur-md flex flex-col overflow-hidden border border-solid border-gray-700 ">
            <img
              src={data.img}
              alt=""
              className="bg-cover bg-origin-padding w-full h-[310px] "
            />
            <div className="w-full h-full flex flex-col justify-start p-3">
              <h1 className="text-xl font-bold ">{data.projectname}</h1>
              <p className="text-slate-400 font-thin mb-[18px] mt-[4px] text-[15px]">
                {data.projectsummary}
              </p>
              <div className="flex flex-col gap-[10px] text-[14px] ">
                <div className="flex  gap-[30px]">
                  <p className="p-[8px] bg-gray-800 w-[100px] rounded-full text-center shadow-xl">
                    React Js
                  </p>
                  <p className="p-[8px] bg-gray-800 w-[150px] rounded-full text-center shadow-xl ">
                    Tailwind Css
                  </p>
                </div>
                <div className="flex gap-[15px]">
                  <p className="p-[8px] bg-gray-800 w-[100px] rounded-full text-center shadow-xl ">
                    REST API
                  </p>
                  <p className="p-[8px] bg-gray-800 w-[150px] rounded-full text-center shadow-xl">
                    API Integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="py-[10px] px-[25px] flex relative items-center gap-[10px] rounded-lg  bg-gradient-to-tl from-gray-500 to-slate-950"
        onClick={() => {
          setShow(true);
        }}
      >
        Explore More Projects
      </button>
    </div>
  );
};

export default Projects;
