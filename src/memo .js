import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail';
import Card from './components/Card';

function App() {

    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();

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
                }>
                </Route>

                <Route path='/detail' element={<><Detail /></>} />
                <Route path='*' element={<div>없는 페이지</div>} />

                {/* Nested Routes */}
                {/* 장점 자식 엘레멘트를 통시에 보여줄 수 있음 Outelet부분에 해당 컴포넌트가 보여짐 */}
                {/* 여러 유사한 페이지 필요할 때 */}
                <Route path='/about' element={<About />} >
                    <Route path='member' element={<div>맴버임</div>} />
                    <Route path='location' element={<div>위치정보</div>} />
                </Route >

                <Route path='/event' element={<Event />} >
                    <Route path='one' element={<div>1주년 이벤트</div>} />
                    <Route path='two' element={<div>블랙 프라이데이</div>} />
                </Route >

                {/* <Route path='/about' element={<></>} />
        <Route path='/about/member' element={<></>} />
        <Route path='/about/loc' element={<></>} /> */}

            </Routes>
        </div>
    );

    function About() {
        return (
            <div>
                <h4>회사정보</h4>
                <Outlet></Outlet>
            </div>
        )
    }

    function Event() {
        return (
            <div>
                <h4>오늘의 이벤트</h4>
                <Outlet></Outlet>
            </div>
        )
    }
}

export default App;

