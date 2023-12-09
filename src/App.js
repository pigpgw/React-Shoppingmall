import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data'
import { Routes, Route, Link  } from 'react-router-dom'
import Detail from './pages/detail';
import Card from './components/Card';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to={"/"}>홈</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Shoes</Nav.Link>
      
            <Link to={"/detail"}>상세 페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
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
          </>
        }> </Route>
        <Route path='/detail' element={
          <>
            <Detail />
          </>
        } />
        <Route path='about' element={<div>어바웃 페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
