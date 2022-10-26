import React from "react";


function Getlist({userList}){
console.log(userList);
return(
    <>
    {
        userList !== undefined ?  <ul className="post-list">
         {userList.map(post => {
             return (
                 <a href={`description/${post._id}`} style={{color:'black'}} ><div key={post._id} style={{border: '1px black  ',display:'inline-block',width:'30%',padding:'25px 0px',margin:'0px 10px',borderRadius:'2px',backgroundColor:'grey'}}>
                     <h2>{post.Fullname}</h2>
                    
                     <br/>
                 </div></a>
 
             );
        })} 
     </ul> :<> </>
    }

    </>
   
    

)


}

export default Getlist