import Header from './Header'
import React ,{useState, useEffect} from 'react'
function Profile(){
     let user = JSON.parse(localStorage.getItem('user-info'))
     
   
    return(
        <div>
  <Header />
  <h1> Profile </h1>
  <br></br><br></br>

  Username:<input type="text"  value={user && user.username || user && user.Username} disabled></input><br></br>
  Name:<input type="text"  value={user && user.name || user && user.Name} disabled></input><br></br>
  Email:<input type="text"  value={user && user.email || user && user.Email} disabled></input><br></br>
  
        </div>
    )
}

export default Profile