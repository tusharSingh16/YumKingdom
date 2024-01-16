import React from 'react'
import Test from '../Test'
import Search from '../Components/Search'
import Navbar from '../Components/Navbar'
function Home() {
  return (
        <div className='container'>
          <Navbar />
          <Search />
          <Test />
        </div>
  )
}

export default Home