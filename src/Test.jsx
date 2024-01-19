import { useCallback, useEffect, useState } from 'react'
import Card from './Components/Card';
import axios from 'axios'


function Test() {
  
  const [Mydata,setMyData] = useState()
  
  const getApiData =  useCallback( async () => {
    try {
      const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=c9cd476d6c3d46aea6c2584dc887490c&query=dumplings&number=10')
       console.log(res)
      setMyData(res.data.results);
      } 
    catch (error) {
      console.log(error);
    }
      
      
  },[])
  
  useEffect(() => {
    getApiData();
  },[])
  

  return (
    <>
    <h4>Our random picks!!!</h4>
   <div className='cardcontainer' >
     
    {Mydata?.map((post) =>  {
      const {id,title,image} = post;
                    return (
                             <div className='p-4' id={id}>
                             <Card  myName = {title.toUpperCase()}  imge = {image}/> 
                             </div> 
                            ); 
                       
                     } 
                )
    } 
    </div>
    </>
 
    

    
     )
}

export default Test
