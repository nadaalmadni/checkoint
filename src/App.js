import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { label,Nav,InputGroup,FormControl,Form,Navbar,Container,NavDropdown,Card,Button } from 'react-bootstrap';

function App(){
  return ( 

    <div className='App'>

  
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<br/>
<br/>
<label>

<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      https://example.com/users/
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
<br/>
  <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  <br/>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />


  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
  <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br/>
  
  </label>
  <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  </Card.Body>
</Card>
  
  </div>)
}
export default App;