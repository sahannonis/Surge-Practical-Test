import Header from './Header'
import React ,{useState, useEffect} from 'react'
function EditProfile(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   
    // function updateuser(){
    //     let item = {id,name,username,email,password}
    //     console.warn("item",item)
    //     fetch(`http://localhost:8000/api/update`,{
    //     method: 'PUT',
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"

    //     },
    //     body:JSON.stringify(item)
    // }).then((result)=>{
    //     result.json().then(resp)=>{
    //         console.warn(resp)
    //     }
    // }
    
    // }
    return(
        <div>
  <Header />
  <h1> Edit Profile </h1>
  <br></br><br></br>
  Name:<input type="hidden"  onChange={(e)=>setId(e.target.value)} value={user && user.id || user && user.ID} ></input><br></br>      
  Name:<input type="text"  onChange={(e)=>setName(e.target.value)} value={user && user.username || user && user.Name} ></input><br></br>
  Username:<input type="text"  onChange={(e)=>setUsername(e.target.value)} value={user && user.name || user && user.Username} ></input><br></br>
  Email:<input type="text"  onChange={(e)=>setEmail(e.target.value)} value={user && user.email || user && user.Email} ></input><br></br>
  Password:<input type="text"  onChange={(e)=>setPassword(e.target.value)}  ></input><br></br>
  Confirm Password:<input type="text"  ></input><br></br>
  <button className="btn btn-primary">UpdateUser</button>
        </div>
    )
}

export default EditProfile