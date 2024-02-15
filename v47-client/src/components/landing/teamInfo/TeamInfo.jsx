import {useEffect} from "react";
import { TeamData } from "../../../lib/feedBackData";
import MemberInfo from "./MemberInfo";
import Aos from "aos";



const TeamInfo = () => {


  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section 
    className="py-6 flex justify-center items-center flex-col relative"
     data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="text-3xl lg:text-4xl text-gray-800  dark:text-gray-200">
          Our <span className="font-bold">Chingu</span> Team
        </h2>
        <div className="w-[60%] md:mt-0 mt-6 text-center">
          <p className="mt-3 text-gray-800 dark:text-gray-200">
          We are a dedicated team of individuals brought together by our shared passion for coding and collaboration. Committed to excellence and continuous learning, we've embarked on this <span className="font-semibold	italic">Chingu Voyage</span>  with a unified goal: to create something remarkable.
          </p>
        </div>
      </div>

      <div
        className={`flex flex-wrap justify-center w-full feedback-container  relative z-[1]`}
      >
        {TeamData.map((card) => (
          <MemberInfo key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
