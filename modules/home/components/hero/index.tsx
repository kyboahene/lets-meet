import React from "react";

const Hero = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

  return (
    <div className="h-[300px] relative w-full rounded-[20px] bg-hero overflow-hidden bg-center bg-cover max-md:px-6 max-md:py-9">
      <div className=" flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal z-40">
          Upcoming meeting at 12:30 PM
        </h2>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl z-40">{time}</h1>
          <p className="text-lg font-medium text-sky-1 lg:text-2xl z-40">
            {date}
          </p>
        </div>
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
    </div>
  );
};

export default Hero;
