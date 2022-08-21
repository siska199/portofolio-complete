import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import Section from "../layouts/Section";
import Comments from "../components/Comments";
import Project from "../atoms/Project";
import { handleGetProjects } from "../../redux/features/projectSlice";

const MyProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.value.projects);
  const modalComment = useSelector((state) => state.project.value.modalComment);
  const styleButtonSlider =
    "absolute top-[30%] md:top-[50%] text-[2.2rem] md:text-[3rem] !text-white z-[10]";
  const [indexData, setIndexData] = useState(0);
  useEffect(() => {
    dispatch(handleGetProjects());
  }, []);
  const handlePrevButton = () => {
    setIndexData((prev) => prev - 1);
  };
  const handleNextButton = () => {
    setIndexData((prev) => prev + 1);
  };
  return (
    <Section id="my-projects">
      {indexData > 0 && (
        <button
          onClick={() => handlePrevButton()}
          className={`${styleButtonSlider} left-0`}
        >
          <CgPlayTrackPrev color="white" />
        </button>
      )}
      <div className="flex flex-col w-full gap-[3rem] md:px-[5rem] ">
        <header className="header-section-menu">My Projects &#128187;</header>
        <div className="relative min-h-[105vh] md:min-h-[110vh] lg:min-h-[85vh] scrollbar-hidden  w-full overflow-x-hidden">
          {projects.map((data, i) => (
            <Project
              key={i}
              data={data}
              active={i == indexData ? true : false}
              prevElement={i < indexData ? true : false}
            />
          ))}
        </div>
      </div>
      {indexData < projects.length - 1 && (
        <button
          onClick={() => handleNextButton()}
          className={`${styleButtonSlider} right-0`}
        >
          <CgPlayTrackNext color="white" />
        </button>
      )}
      {modalComment && <Comments />}
    </Section>
  );
};

export default MyProjects;
