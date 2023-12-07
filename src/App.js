import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data'

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">
      <p>     {shoes[0].id}</p>
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
        <Row>
          {data.map((item) => (
            <Card item={item}/>
          ))}
        </Row>
      </div>



    </div>
  );
}

function Card(props){
  return (
    <Col>
      <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </Col>
  )
}

export default App;
