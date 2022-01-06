import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    function logout(){
        localStorage.clear();
        navigate("/login")
    }
    return(
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="">Surge Practical - React App</Navbar.Brand>
    <Nav className="me-auto navbar-wrapper">
    {
        localStorage.getItem('user-info')?
        <><Link to="/profile">Profile</Link>
      <Link to="/editprofile">Edit Profile</Link>
      </>
        :
        <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
    }
    </Nav>
    </Container>
    {localStorage.getItem('user-info')?
    <Nav>
        <NavDropdown title={user && user.username || user && user.Username} >
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
    </Nav>
: null
    }
  </Navbar>
        </div>
    )
}

export default Header