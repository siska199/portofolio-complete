import React, { useRef } from "react";
import { motion } from "framer-motion";

const Section = ({ children, id }) => {
  const scrollRef = useRef(null)
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
    <div ref={scrollRef}>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id={id}
        className={`relative ${customeStyle} border-b-[0.005rem] border-cl800 dark:border-cd800 text-cl100 dark:text-cd100 flex items-center justify-center gap-5`}
      >

        {children}
      </motion.article>
    </div>
  );
};

export default Section;
