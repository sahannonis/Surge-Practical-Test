
import './App.css';

import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import EditProfile from './EditProfile';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
   
    <Routes>
    <Route path="/login" element={<Login/>}>
    </Route>
    <Route path="/register" element={<Register/>}>
    </Route>
    <Route path="/profile" element={<Profile/>}>
    </Route>
    <Route path="/editprofile" element={<EditProfile/>}>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
