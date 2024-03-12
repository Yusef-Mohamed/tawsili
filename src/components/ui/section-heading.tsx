import React from "react";
interface SectionHeadingProps {
  title: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="relative">
      <h2 className="relative bg-white font-semibold heading2 z-[1] w-fit mx-auto px-6">
        {title}
      </h2>
      <div className=" h-[1px] w-full bg-[#EBEBEB] absolute top-1/2" />
    </div>
  );
};

export default SectionHeading;
