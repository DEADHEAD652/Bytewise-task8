import React from "react";
import {
    
    useParams
  } from "react-router-dom";



function Getdesc({userDesc}){
    let { id } = useParams();

return(
    <>
    {
        userDesc !== undefined ?  <ul className="post-list">
        {userDesc.map( (post,idd) => (
         <div key={idd}>
         {
             post._id === id ? <h4 > {post.description} </h4> : <> </>
         }
         </div>
         
 
        ))}
 
     </ul>  :<> </>
    }

    </>

    
    
    

)


}

export default Getdesc