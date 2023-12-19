import React, { useState } from 'react'

const Addstrada = ({fnct}) => {
    const [newstrada, setnewstrada] = useState({
        nom:"",prix:"",img:"",description:""
    })
  return (
    <div>
      <input type='text' placeholder='nom' onChange={(e)=>setnewstrada({...newstrada,nom:e.target.value})}/>
      <input type='text' placeholder='prix' onChange={(e)=>setnewstrada({...newstrada,prix:e.target.value})}/>
      <input type='text' placeholder='img' onChange={(e)=>setnewstrada({...newstrada,img:e.target.value})}/>
      <input type='text' placeholder='description' onChange={(e)=>setnewstrada({...newstrada,decription:e.target.value})}/>
      <button onClick={()=>fnct(newstrada)}>Add to list</button>
    </div>
  )
}

export default Addstrada
