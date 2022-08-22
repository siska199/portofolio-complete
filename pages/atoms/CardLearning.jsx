import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const CardLearning = ({ data, refElm }) => {
  return (
    <section
      ref={refElm}
      className="p-5 backdrop-blur text-cl200 dark:text-cd100 bg-clCard dark:bg-cdCard min-h-[15rem] min-w-[20rem] md:min-w-[23rem] flex flex-col gap-2 md:gap-3"
    >
      <p className="font-thin flex gap-2 items-center md:text-sm text-[0.75rem]">
        {" "}
        <span>
          <AiOutlineCalendar className="text-[1.5rem]" />
        </span>
        {data?.periode}
      </p>
      <h1 className="md:text-sm text-[0.75rem] font-bold flex gap-2">
        {" "}
        <span>
          <MdOutlineMapsHomeWork className="text-[1.5rem]" />
        </span>{" "}
        {data?.constitution}
      </h1>
      <ul className="text-[0.75rem] md:text-sm font-thin flex flex-col gap-1 md:gap-2">
        {data?.activities.map((data, i) => (
          <li key={i} className="text-justify">
            &#128505; {data}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardLearning;
