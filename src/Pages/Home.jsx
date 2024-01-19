import React from 'react'
import Random from '../Components/Random'
import Test from '../Test.jsx'
import Search from '../Components/Search'
import Navbar from '../Components/Navbar'
function Home() {
  
  return (
  <>
        <div className='container'>
                <Navbar />
                <Search />
                <Random />
                <Test />
        </div>
  </>
        
  )
}

export default Home