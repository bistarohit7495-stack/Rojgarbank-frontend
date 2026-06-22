import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Latestjobs from './Latestjobs'


const Home = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Header />
      <Latestjobs/>
      {/* {*<Footer/>  */}
    </div>
  )
}

export default Home