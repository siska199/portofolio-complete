import type { NextPage } from 'next'
import { ImHeart,ImHeartBroken } from 'react-icons/im'
import Head from 'next/head'
import Image from 'next/image'
import Page from './layouts/Page'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import { useState } from 'react'
import Sidebar from './components/Sidebar'

const Home: NextPage = () => {
  const styleIconMenu = "cursor-pointer z-[99] text-white text-[3rem] fixed top-3 left-3 transition-all  duration-1000 ease-in-out"
  const [showSidebar, setShowSidebar] = useState(false)
  const handleShowSidebar = ()=>{
    console.log("oke")
    setShowSidebar(!showSidebar)
  }
  return (
      <Page title={"Portofolio"} type={"homepage"} showSidebar={showSidebar}>
        <>
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          {
            showSidebar?(
              <ImHeartBroken onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
            ):(
              <ImHeart onClick={()=>handleShowSidebar()} className={styleIconMenu}/>
            )
          }
          
          <Introduction/>
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
        </>
      </Page>
  )
}

export default Home
