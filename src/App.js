import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
   {/*navigation*/}
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*navigation*/}
    {/*slider caroussel*/}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as2.ftcdn.net/v2/jpg/05/18/97/27/1000_F_518972795_ITA7JBzGRPXTo6AWoMwaG21vfT3A62ak.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/*formulaire*/}
    <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  );
}
export default App;
