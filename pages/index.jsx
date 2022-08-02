import {AiOutlineClose} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import Page from './layouts/Page'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'

const Home= () => {
  const styleIconMenu = "cursor-pointer z-[99] text-white text-[3rem] fixed top-3 left-3 transition-all  duration-1000 ease-in-out"
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
          {
            showSidebar?(
              <AiOutlineClose onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
            ):(
              <FiMenu onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
            )
          }
          <Introduction/>
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
        </div>
      </Page>
  )
}

export default Home
