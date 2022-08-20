import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { GiButterfly } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import Page from "./layouts/Page";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import MyLearningJourney from "./components/MyLearningJourney";
import FAQs from "./components/FAQs";
import Sidebar from "./components/Sidebar";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Tooltip from "./atoms/Tooltip";
import { handleModalMenu } from "../redux/features/menuSlice";

const Home = () => {
  const dispatch = useDispatch();
  const modalAuth = useSelector((state) => state.auth.value.modal);
  const modalMenu = useSelector((state) => state.menu.value.modal);

  const styleIconMenu =
    "cursor-pointer z-[99] text-white text-[2rem] md:text-[3rem] fixed top-3 left-3 transition-all  duration-1000 ease-in-out";
  const [activeId, setActiveId] = useState("");

  let html;
  if (typeof window !== "undefined") {
    html = document.querySelector("html");
  }

  const handleShowSidebar = () => {
    modalMenu
      ? html.classList.remove("overflow-y-hidden")
      : html.classList.add("overflow-y-hidden");
    dispatch(handleModalMenu(modalMenu ? false : true));
  };

  useEffect(() => {
    html.classList.add("dark");
    const articles = document.querySelectorAll("article");
    const observer = new IntersectionObserver(handleIntersection, options);
    articles.forEach((article) => {
      observer.observe(article);
    });
    return () => {
      articles.forEach((article) => {
        observer.unobserve(article);
      });
    };
  }, []);

  const handleChangeTheme = () => {
    html.classList.toggle("dark");
  };
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting && setActiveId(`#${entry.target.id}`);
    });
  };
  const options = {
    threshold: 0.7,
  };
  return (
    <Page title={"Portofolio"} type={"homepage"}>
      <Sidebar activeId={activeId} setActiveId={setActiveId} />
      <div className="cotainer-articles scroll-behavior">
        <div>
          {modalMenu ? (
            <AiOutlineClose
              onClick={() => handleShowSidebar()}
              className={styleIconMenu}
            />
          ) : (
            <FiMenu
              onClick={() => handleShowSidebar()}
              className={styleIconMenu}
            />
          )}
          <div className="fixed z-[99] right-3 top-3 cursor-pointer group">
            <GiButterfly
              onClick={() => handleChangeTheme()}
              className=" text-white text-[2.5rem] md:text-[4rem]"
            />
            <Tooltip message={"Change color theme"} />
          </div>
        </div>
        <Introduction />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <MyLearningJourney />
        <FAQs />
        <Footer />
      </div>

      {modalAuth && <Auth />}
    </Page>
  );
};

export default Home;
