import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail';
import Card from './components/Card';
import axios from 'axios'

export let Context1 = createContext()

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [getDataClick, setGetDataClick] = useState(0);

  let [stocks , setStocks] = useState([10, 11, 12])

  function sortItem() {
    let list = [...shoes];
    list.sort((a, b) => a.title.localeCompare(b.title));
    setShoes(list);
  }

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={(() => { navigate('/') })}>홈</Nav.Link>
            <Nav.Link onClick={(() => { navigate('/detail') })}>Detail</Nav.Link>
            {/* <Nav.Link onClick={(() => { navigate(-1) })}>뒤로가기</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='sortBtnContainer'>
              <button className='sortBtn' onClick={sortItem}>이름순 정렬</button>
            </div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((item, index) => (
                    <Card item={item} index={index} />
                  ))
                }
              </div>
            </div>
            
            {!(getDataClick == 3) && (
              <button onClick={() => {
                console.log("getDataClick", getDataClick);
                setGetDataClick(getDataClick + 1)
                console.log("getDataClick", getDataClick);
                if (getDataClick == 0) {
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((data) => {
                      console.log("data", data.data);
                      let list = [...shoes, ...data.data];
                      setShoes(list);
                    })
                    .catch(() => {
                      console.log('실패')
                    })
                } else if (getDataClick == 1) {
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                    .then((data) => {
                      console.log("data", data.data);
                      let list = [...shoes, ...data.data];
                      setShoes(list);
                    })
                    .catch(() => {
                      console.log('실패')
                    })
                } else {

                }

              }}>더보기</button>
            )}
          </>
        }>
        </Route>
        <Route path='*' element={<div>없는 페이지</div>} />
        {/* 여러개 페이지 만들기 */}
        <Route path='/detail/:id' element={
          <Context1.Provider value= {{ stocks, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
      </Routes>
    </div>
  );
}

export default App;

