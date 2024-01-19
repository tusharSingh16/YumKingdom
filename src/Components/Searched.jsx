import React, { useEffect, useState,useCallback } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Search from './Search';
import Navbar from './Navbar';
function Searched() {

        const params = useParams();
         const [search,setSearch] = useState([])

             const getSearched = useCallback(async (type) =>{
                       try {
                          const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c9cd476d6c3d46aea6c2584dc887490c&query=${type}&number=10`)
                          setSearch(res.data.results);
                          
                         } 
                        catch (error) {
                          console.log(error);
                        }
                    },[])
                  useEffect(()=> {

                     getSearched(params.search);

                    },[params.search])


  return (
    <>                 
                     <Navbar />
                     <Search />
                     <div className='mx-3'>
                            <h4>{params.search} for you!!! </h4>
                     </div>
                        <div className='cardcontainer'>
                            {search?.map((post) => {
                                   const {id,title,image} = post;
                                               return (
                                                 <div className='p-4' id ={id}>
                                                    <Card myName={title.toUpperCase()} imge = {image}/>
                                                 </div>
                                              );
                                           })
                              }
                        </div>
</>
  )
}

export default Searched