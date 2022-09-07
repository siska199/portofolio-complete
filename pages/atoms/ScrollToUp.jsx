import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToUp = ({ elm }) => {
  const handleScrollToUp = () => {
    document.querySelector(elm).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={() => handleScrollToUp()}
      className="bg-cl700 cursor-pointer dark:bg-cd700 p-2 fixed bottom-3 right-3 rounded-full"
    >
      <BsFillArrowUpCircleFill size="2rem" color="white" />
    </div>
  );
};

export default ScrollToUp;
