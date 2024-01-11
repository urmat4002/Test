import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Test</Nav.Link>
          <Nav.Link onClick={() => navigate('/maketest')}>Edit test</Nav.Link>
          <a href="https://api.whatsapp.com/send/?phone=996700871222&text=Здравствуйте%2C+у+меня+есть+вопрос">
            Whatsup
          </a>
        </Nav>
      </Container>
    </Navbar>
  )
}
