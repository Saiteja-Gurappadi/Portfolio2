const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 px-[200px] py-[15px] bg-white/5 backdrop-blur-md border-b border-white/20 shadow-lg flex items-center justify-between z-50">
      <h1 className="text-white text-2xl font-bold relative pl-[23px]">
        <span className="absolute -top-12 left-[0px]  w-36 h-10 "style={{background:"radial-gradient(ellipse at center, rgba(233, 224, 224, 0.63) 40%, rgba(255, 255, 255, 0.18) 40%, transparent 100%)",filter: "blur(6px)",opacity: 0.9,}}
        ></span>
        Portfolio
      </h1>
      <div className="text-white flex gap-[30px] items-center text-[14px] font-extralight">
        <p className="cursor-pointer w-[70px] text-center rounded-sm border-b border-solid border-white py-[6px] hover:bg-slate-950 ">Home</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm border-b border-solid border-white py-[6px] hover:bg-slate-950 ">About Me</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm border-b border-solid border-white py-[6px] hover:bg-slate-950 ">Skills</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm border-b border-solid border-white py-[6px] hover:bg-slate-950 ">Projects</p>
        <p className="cursor-pointer w-[70px] text-center rounded-sm border-b border-solid border-white py-[6px] hover:bg-slate-950 ">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
