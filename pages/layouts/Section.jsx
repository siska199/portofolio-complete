import React from "react";

const Section = ({ children, id }) => {
  let customeStyle;
  switch (id) {
    case "introduction":
      customeStyle = "min-h-screen";
      break;
    case "about-me":
      customeStyle = "min-h-screen";
      break;
    case "my-skills":
      customeStyle = "min-h-screen py-[3rem]";
      break;
    case "my-projects":
      customeStyle = " py-[3rem] mb:pt-0";
      break;
    case "my-learning-journey":
      customeStyle = "min-h-screen py-[3rem] mb:pt-0";
      break;
    case "faqs":
      customeStyle = "min-h-screen py-[3rem] mb:pt-0";
      break;
    default:
      break;
  }

  return (
    <article
      id={id}
      className={`relative ${customeStyle} border-b-[0.005rem] border-cl800 dark:border-cd800 text-cl100 dark:text-cd100 flex items-center justify-center gap-5`}
    >
      {children}
    </article>
  );
};

export default Section;
