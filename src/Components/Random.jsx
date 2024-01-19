import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

function Random() {
    const [Randomrec,setRandom] = useState([]);
    const getRandom = useCallback( async () => {
        try{
            const res = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=c9cd476d6c3d46aea6c2584dc887490c&number=10&include-tags=vegetarian,dessert');
            console.log(res);
            setRandom(res.data.recipes);
        }
        catch(error){
         console.log(error);
        }
    },[])


    useEffect(()=>{
        getRandom();
    },[])


  return (
    <>
    <div className='mx-3'>
                  <h4>Trending deserets!!!</h4>
    </div>
    <div className='cardcontainer'>
                  {Randomrec?.map((post) => {
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

export default Random