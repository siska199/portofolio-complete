import React, { useRef, useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Section from "../layouts/Section";
import CardLearning from "../atoms/CardLearning";
import { learningJourneys } from "../../lib/data";
import Link from "next/link";

const MyLearningJourney = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const cardLJ = useRef(null);
  const conLJ = useRef(null);
  const widthCardLJ = cardLJ.current && cardLJ.current.offsetWidth + 20;

  const handleScroll = () => {
    conLJ.current.scrollLeft > 0 ? setShowLeft(true) : setShowLeft(false);
    (conLJ.current.clientWidth==(conLJ.current.scrollWidth-conLJ.current.scrollLeft))?setShowRight(false) : setShowRight(true);

  };

  return (
    <Section id="my-learning-journey">
      <div className="flex w-full flex-col gap-[3rem] ">
        <h1 className="header-section-menu ">My Learning Journey &#128220;</h1>
        <div className="relative flex flex-col">
          {showLeft && (
            <span
              onClick={() => {
                conLJ.current.scrollLeft -=(widthCardLJ);
              }}
              className={`absolute -top-[2rem] font-bold left-0 z-[50] text-end px-3 cursor-pointer`}
            >
              <AiOutlineArrowLeft />
            </span>
          )}
          {showRight && (
            <span
              onClick={() => {
                conLJ.current.scrollLeft += widthCardLJ;
              }}
              className={`absolute -top-[2rem] font-bold right-0 z-[50] text-end px-3 cursor-pointer`}
            >
              <AiOutlineArrowRight />
            </span>
          )}

          <div
            ref={conLJ}
            onScroll={handleScroll}
            className="container-lj transition-all duration-300 ease-in-out scroll-smooth px-3 flex w-full overflow-x-scroll gap-4 scrollbar-hidden"
          >
            {learningJourneys.map((data, i) => (
              <CardLearning refElm={cardLJ} key={i} data={data} />
            ))}
          </div>
          <Link href="https://www.linkedin.com/in/siska-apriana-rifianti/">
            <a
              target="_blank"
              className="border-cl600 dark:border-cd600 hover:border-none hover:bg-cl700 hover:dark:bg-cd700 mx-auto my-5 gap-3 text-sm md:text-base border-[0.005rem] px-3 py-1 font-bold flex items-center"
            >
              <AiFillLinkedin className="text-[1.3rem]" /> View my linkind
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default MyLearningJourney;
