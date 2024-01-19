import React, { useEffect } from 'react'
import { useState } from 'react';
import './Search.css'
import { NavLink, useNavigate } from 'react-router-dom';
function Search() {
        const [input,setInput] = useState("");
        const navigate = useNavigate();
        const handle = (e) => {e.preventDefault(); navigate("/searched/"+input); }
  return (
    <div className="container">

                    <div className = "row height d-flex justify-content-center align-items-center">

                      <div className = "d-flex justify-content-center ">

                        <div className = "search">
                          <input type="text" onChange={(e) => {setInput(e.target.value)}} value = {input}   className = "form-control" placeholder="Search Recipes Now !!" />
                          <button onClick = {handle} className = "btn btn-primary">Search</button>
                        </div>
                        
                      </div>
                      
                    </div>
                   
                </div>
             
            
    
  )
}

export default Search