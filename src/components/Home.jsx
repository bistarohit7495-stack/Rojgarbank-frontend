import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Latestjobs from './Latestjobs'
import Footer from './Footer'
import Topemployers from './Topemployers'
import Whyus from './Whyus'
import Faq from './Faq'


const Home = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Header />
      <Topemployers/>
      <Latestjobs/>
      <Whyus/>
      <Faq/>
      <Footer/>
    
    </div>
  )
}

export default Home