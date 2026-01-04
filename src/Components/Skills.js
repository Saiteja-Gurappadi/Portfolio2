import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="p-[75px] bg-gradient-to-tl from-black via-slate-900 to-black h-[100vh] text-white flex flex-col items-center gap-[35px]" id="skills">
      <h1 className="text-4xl ">My Skills</h1>
      <p className="text-gray-400">
        technologies that are used to develop my digital experiences
      </p>
        <div className="flex gap-[60px] relative z-10">
          <div className="bg-gray-800 p-7  w-[250px] h-[280px] rounded-xl shadow-2xl border border-solid border-gray-700">
            <div className="">
              <FaLaptopCode className="text-2xl mb-[1px]" />
              <h3 className="text-xl font-bold mb-4">
                Frontend <hr />
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300  text-[18px] ">
              <li className="flex items-center gap-[8px]" >
                React.js{" "}
                <FaReact
                  className="text-cyan-400 text-[21px]"
                  title="React.js"
                />
              </li>
              <li className="flex items-center gap-[8px] ">
                Next.js{" "}
                <SiNextdotjs
                  className="text-white text-[21px]"
                  title="Next.js"
                />
              </li>
              <li className="flex items-center gap-[8px] ">
                Tailwind CSS
                <SiTailwindcss
                  className="text-sky-400 text-[21px]"
                  title="Tailwind CSS"
                />
              </li>
              <li className="flex items-center gap-[8px] ">
                Redux{" "}
                <SiRedux
                  className="text-purple-500 text-[21px]"
                  title="Redux"
                />
              </li>
            </ul>
          </div>

          <div className=" bg-gray-800 p-7  w-[250px] h-[280px] rounded-xl shadow-2xl border border-solid border-gray-700 ">
            <div>
              <FaServer className="text-2xl mb-[1px]" />
              <h3 className="text-xl font-bold mb-4">
                Backend <hr />
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300 text-[18px]">
              <li className="flex items-center gap-[8px]">
                Node.js{" "}
                <FaNodeJs
                  className="text-green-500 text-lg text-[21px]"
                  title="Node.js"
                />
              </li>

              <li className="flex items-center gap-[8px]">
                Express.js{" "}
                <SiExpress
                  className="text-gray-400 text-[21px]"
                  title="Express.js"
                />
              </li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-7 w-[240px] h-[280px] rounded-xl shadow-2xl border border-solid border-gray-700">
            <div>
              <FaDatabase className="text-2xl mb-[1px]" />
              <h3 className="text-xl font-bold mb-4">
                Database & Tools <hr />
              </h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-[18px]">
              <li className="flex items-center gap-[8px]">
                MongoDB{" "}
                <SiMongodb
                  className="text-green-400 text-[21px]"
                  title="MongoDB"
                />
              </li>
              <li>SQL Basics</li>
              <li className="flex items-center gap-[8px]">
                Git & GitHub{" "}
                <FaGithub className="text-white text-[21px]" title="GitHub" />
              </li>
              <li className="flex items-center gap-[8px]">
                VS Code{" "}
                <BiLogoVisualStudio
                  className="text-[#007ACC] text-[21px]"
                  title="Visual Studio"
                />
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-[35px] px-[30px] py-[8px] text-[12px] border border-solid rounded-full"> <span className="mr-2 text-gray-300 w-[20px] px-[5px] bg-gray-900 rounded-full ">•</span>
Always learning and Evolving</p>
        
    </div>
  );
};

export default Skills;
