import { FaCode } from "react-icons/fa";

const MemberInfo = ({
  content,
  name,
  title,
  img,
  iconGithub,
  iconLinkedin,
  flag,
  githubLink,
  linkedinLink,
}) => (
  <div className="flex justify-between flex-col px-5 mb-4 py-8 max-w-full md:max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-1 duration-300 hover:-translate-y-3 bg-gray-100 shadow-md hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <div className="flex justify-center object-contain">
      {/* keep the object-cover please, it fixes the px's values */}
      <img
        src={img}
        alt={name}
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
    </div>

    <div className="flex flex-row justify-center items-center mt-4">
      <h4 className="font-semibold text-[25px] leading-[32px] text-gray-800 dark:text-gray-200 flex items-center">
        {name}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img
            className="w-[20px] duration-300 hover:scale-125 active:scale-75 cursor-pointer h-[20px] ml-1"
            src={iconLinkedin}
            alt="linkedin icon"
          />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            className="w-[20px] h-[20px] duration-300 hover:scale-125 active:scale-75 cursor-pointer ml-1"
            src={iconGithub}
            alt="github icon"
          />
        </a>
      </h4>
    </div>
    <div className="border-b border-gray-300 w-full mt-2"></div>
    <div>
      <p className="font-normal text-wrap text-[18px] leading-[30.4px] text-gray-800 dark:text-gray-200 p-3">
        {content}
      </p>
    </div>
  </div>
);

export default MemberInfo;
