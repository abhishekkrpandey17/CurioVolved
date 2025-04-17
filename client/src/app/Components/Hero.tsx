import React from "react";
import Image from "next/image"; // Ensure the file './Image.tsx' exists in the same directory

const Hero = () => {
  return (
    <div className="w-full p-0 md:p-20 pb-[40vmin] pt-[40vmin] md:pt-0 md:pb-0 md:h-[90vh] bg-[#3C3C3C]">
      <div className="flex flex-col gap-y-7 justify-center  items-center border-white h-full w-full">
        <h1 className="text-6xl md:text-8xl font-sans font-bold">
          Curio<span className="text-[#ff5757]">Volved</span>
        </h1>
        <h5>( Evolve your curiosity with CurioVolved )</h5>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-[80vw] md:w-[45vw] h-13 bg-white placeholder-gray-400 placeholder:italic pl-5"
            placeholder="search your blogs..."
          />
          <div className=" h-13 w-15 bg-[#ff5757] flex justify-center items-center">
            <Image
              src="/Icons/search-interface-symbol.png"
              alt="Search Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
