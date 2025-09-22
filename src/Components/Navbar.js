const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 px-[200px] py-[15px] bg-white/5 backdrop-blur-lg border-b border-white/20 shadow-2xl flex items-center justify-between z-40">
      <h1 className="text-white text-2xl font-bold relative pl-[23px]">
        <span className="absolute -top-12 left-[0px]  w-36 h-10 "style={{background:"radial-gradient(ellipse at center, rgba(233, 224, 224, 0.63) 40%, rgba(255, 255, 255, 0.18) 40%, transparent 100%)",filter: "blur(6px)",opacity: 0.9,}}
        ></span>
        Portfolio
      </h1>
      <div className="text-white flex gap-[30px] items-center text-[14px] font-extralight">
        <p className="cursor-pointer w-[70px] text-center rounded-sm  py-[6px] hover:bg-gray-900 boxshadow-[0_-4px_6px_-1px_rgba(0,0,0,0.9)] ">Home</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm  py-[6px] hover:bg-gray-900 boxshadow-[0_-4px_6px_-1px_rgba(0,0,0,0.9)] ">About Me</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm  py-[6px] hover:bg-gray-900 boxshadow-[0_-4px_6px_-1px_rgba(0,0,0,0.9)] ">Skills</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm  py-[6px] hover:bg-gray-900 boxshadow-[0_-4px_6px_-1px_rgba(0,0,0,0.9)] ">Projects</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm  py-[6px] hover:bg-gray-900 boxshadow-[0_-4px_6px_-1px_rgba(0,0,0,0.9)] ">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
