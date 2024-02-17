import React from "react";
import Button from "../../reusable/Button";

export default function TaskFlow() {
  return (
    <div className="mt-[80px] duration-300 mx-auto p-8/ min-h-screen  flex justify-center items-center">
      <div className="flex text-center m-6 flex-col max-w-[730px]  justify-center items-center space-y-8">
        <div className="space-y-6">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:text-5xl text-4xl leading-[44px] md:leading-[60px] text-[#2d8630] font-bold"
          >
            World's most awarded online Task Management platform
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="font-bold text-[22px] dark:text-white md:text-2xl"
          >
            Find your dream schedule with{" "}
            <span className="text-[#2d8630]">Task Flow</span>
          </p>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Button link="ProductPage" innerText="Go to Product" />
          </div>
        </div>
        <figure className="md:p-4">
          <img
            data-aos="fade-in"
            data-aos-duration="3000"
            src="/assets/landing.svg"
            alt="Landing Icon"
            className="md:h-[500px] md:w-[700px]"
          />
        </figure>

        <>
        
        
        </>
      </div>
    </div>
  );
}
