import React from 'react'
import './Card.css'
function Card({myName,imge}) {
  return (
    <>   
                
                  <div className="card "  >
                    <img src={imge} className="card-img-top " alt="..." />
                       <div className="card-body">
                          <h3 className="card-title">{myName}</h3>
                       </div>
                      <div className='text-center pt-1 pb-3'>
                          <button className='btn btn-primary'>VIEW MORE</button>
                       </div>
                   </div>
               
                   
                   
            
     </>

 
    
  )
}

export default Card