import Header from './Header'
import React ,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/profile")
        }
    }, [])


    const[name,setName]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate();

   async function signup(){
        let item = {name,username,email,password}
        console.warn(item)

      let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/profile")
    }
    return(
        <>
            <Header />
        
        
        <div className="col-sm-6 offset-sm-3">
        <h1>Register</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" className="form-control" required/><br></br>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" className="form-control" required/><br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" className="form-control" required/><br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" className="form-control" required/><br></br>
        <button onClick={signup} className="btn btn-primary">Register</button>
        </div>
        </>
    )
}

export default Register