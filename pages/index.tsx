import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Page from './layouts/Page'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'

const Home: NextPage = () => {
  return (
      <Page title={"Homepage"} type={"homepage"}>
        <>
          <Introduction/>
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
        </>
      </Page>
  )
}

export default Home
