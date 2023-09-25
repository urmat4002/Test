import {Container, Nav, Navbar} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>TEST</Nav.Link>
          <Nav.Link onClick={() => navigate('/maketest')}>Edit test</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
