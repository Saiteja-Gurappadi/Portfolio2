import { LuArrowDown, LuGithub, LuLinkedin,LuSparkles } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <div
      className="flex justify-center h-[100vh] text-white bg-gradient-to-tl from-black via-slate-900 to-black"
      id="home"
    >
      <Shapes/>
      <div className="flex flex-col items-center justify-center gap-[20px] w-[40%] mt-[75px]">
        {/* <p className="text-4xl font-bold border border-solid p-[60px] border-white border-2 rounded-full">
          ST
        </p> */}
        <p className="text-5xl font-bold text-center">
          Hello,
          <br />
          I'm Saiteja Gurappadi
        </p>
        <p className="font-extralight text-2xl text-gray-400">Web Developer</p>
        <div className="font-thin text-[13px] text-gray-500">
          <p className="">
            Building Websites Using ReactJS,NodeJS,NextJS, using real world
            data.
          </p>
          <p className="">
            Passionate About solving complex problems through code and
            creativity.
          </p>
        </div>
        <div className="mt-[15px] flex gap-[15px] text-white">
          <p className="bg-gray-800 text-3xl p-[10px] rounded-lg ">
            <LuGithub />
          </p>
          <p className="bg-gray-800 text-3xl p-[10px] rounded-lg ">
            <LuLinkedin />
          </p>
          <p className="bg-gray-800 text-3xl p-[10px] rounded-lg ">
            <MdOutlineMailOutline />
          </p>
        </div>
        <div className="text-white flex gap-[15px] mt-[18px]">
          <a href="#projects">
            {" "}
            <button className="py-[10px] px-[25px] flex relative items-center gap-[10px] rounded-lg  bg-gradient-to-tr from-gray-400 to-slate-950">
              <LuSparkles className="" />{" "}
              <LuArrowDown className="absolute right-0 top-0 text-[20px]" />{" "}
              Explore My Work
            </button>
          </a>
          <a href="/SAI_TEJA_.pdf" download>
            {" "}
            <button className="py-[10px] px-[40px] border border-white rounded-lg hover:bg-gray-900 ">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
