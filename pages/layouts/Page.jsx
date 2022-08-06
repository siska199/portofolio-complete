import Head from 'next/head'
import React from 'react'

const Page = ({children, title, type,}) => {

  let customeStyle 
  switch(type){
    case "auth":
      customeStyle = ""
      break;
    case "homepage":
      customeStyle = ""
      break;
    case "profile":
      customeStyle = ""
      break;
    default :
      break;
  }

  return (
    <main className={`container ${customeStyle}`}>
      <Head>
        <title>{title} | Siska199</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </main>
  )
}

export default Page