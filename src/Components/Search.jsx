import React from 'react'
import './Search.css'
function Search() {
  return (
    <div class="container">

                    <div className = "row height d-flex justify-content-center align-items-center">

                      <div className = "d-flex justify-content-center ">

                        <div className = "search">
                          <input type="text" className = "form-control" placeholder="Search Recipes Now !!" />
                          <button className = "btn btn-primary">Search</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>
            
    
  )
}

export default Search