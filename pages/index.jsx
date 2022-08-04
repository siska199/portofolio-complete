import { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {GiButterfly} from "react-icons/gi"
import {FiMenu} from "react-icons/fi"
import Page from './layouts/Page'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import MyLearningJourney from './components/MyLearningJourney'
import FAQs from "./components/FAQs"
import Sidebar from './components/Sidebar'
import Auth from "./components/Auth"
import Footer from "./components/Footer"

const Home= () => {
  const styleIconMenu = "cursor-pointer z-[99] text-white text-[2rem] md:text-[3rem] fixed top-3 left-3 transition-all  duration-1000 ease-in-out"
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeId, setActiveId] = useState("")
  
  const handleShowSidebar = ()=>{
    setShowSidebar(prev=>{
      const html = document.querySelector('html')
      console.log("prev: ", prev)
      prev?html.classList.remove("overflow-y-hidden"):html.classList.add("overflow-y-hidden")
      return !prev
    })
  }

  useEffect(()=>{
    const articles = document.querySelectorAll("article")
    const observer = new IntersectionObserver(handleIntersection,options)
    articles.forEach(article=>{
      observer.observe(article)
    })
    return ()=>{
      articles.forEach(article=>{
        observer.unobserve(article)
      })
    }

  },[])

  const handleIntersection = (entries)=>{
    entries.forEach(entry=>{
      console.log("test: ", entry.target.id)
      entry.isIntersecting && setActiveId(`#${entry.target.id}`)
    })
  }
  const options = {
    threshold: 0.6,
    
  }
  return (
      <Page title={"Portofolio"} type={"homepage"} showSidebar={showSidebar}>
        <Sidebar activeId={activeId} setActiveId={setActiveId} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <div className='cotainer-articles'>
          <div>
            {
              showSidebar?(
                <AiOutlineClose onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
              ):(
                <FiMenu onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
              )
            }
            <GiButterfly className='fixed text-white right-3 top-3 text-[2.5rem] md:text-[4rem]'/>
          </div>
          <Introduction/>
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
          <MyLearningJourney/>
          <FAQs/>
          <Footer/>
        </div>
        <Auth/>
      </Page>
  )
}

export default Home
