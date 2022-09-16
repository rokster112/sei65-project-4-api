import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { authUser } from './auth'
import image from '../styles/images/Rubiks.png'


const PageNavbar = () => {
  
  const location = useLocation()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
    window.location.reload(navigate('/login'))
  }

  return (
    <Navbar className='navbar'expand="lg">
      <Container className="navbar-main">
        <Navbar.Brand className="brand" as={Link} to="/"><img className="navbar-image" style={{ width: 90, height: 70 }} src={image}></img></Navbar.Brand>
        <div className="banner">The Gaming Nerd Zone</div>
        <div>
          <Navbar.Toggle className="justify-content-start" aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/games">ALL Games</Nav.Link>
            <Nav.Link as={Link} to="/games/create">CREATE a GAME</Nav.Link>
            { authUser() 
              ?
              <Nav.Link><span onClick={handleLogout}>LOGOUT</span></Nav.Link>
              :
              <>
                <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>  
                <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
              </>
            }
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default PageNavbar
