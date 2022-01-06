import Header from './Header'
import React ,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Login(){

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/profile")
        }
    }, [])



    const[username,setUsername]=useState("")

    const[password,setPassword]=useState("")

    const navigate = useNavigate();

   async function login(){
        let item = {username,password}
        console.warn(item)

      let result = await fetch("http://localhost:8000/api/login",{
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
        <h1>Login</h1>
       
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" className="form-control" required/><br></br>
        
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" className="form-control" required/><br></br>
        <button onClick={login} className="btn btn-primary">Login</button>
        </div>
        </>
    )
}

export default Login
