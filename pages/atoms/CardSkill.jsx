import React from "react";
import { MdVerified } from "react-icons/md";
const CardSkill = ({ data }) => {
  return (
    <div className="flex w-1/2 items-center gap-3 text-cl300 dark:text-cd300">
      <div className="md:text-[1.4rem] ">
        <MdVerified />
      </div>
      <div className="">
        <h1 className=" flex text-sm md:text-base items-center gap-3 font-bold">
          {data.name}
        </h1>
        <p className=" text-sm md:text-base font-thin">{data.level}</p>
      </div>
    </div>
  );
};

export default CardSkill;
