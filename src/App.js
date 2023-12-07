import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data'

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Shoes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {
            shoes.map((item, index) => (
              <Card item={item} index={index} />
            ))
          }
        </div>
      </div>



    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'./shoes' + (props.index + 1) + '.jpg'} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  )
}

export default App;
