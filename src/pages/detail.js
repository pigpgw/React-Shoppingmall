import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addStock } from "../stockSlice";



export default function Detail(props) {
    let dispatch = useDispatch();

    let [alert , setAlert] = useState(true);
    let [countNumber , setCountNumber] = useState("")
    let [alertCountInput, setAlertCountInput ] = useState(false);
    let [tap , setTap] = useState();
    let [ani, setAni] = useState("");
    let { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            setAni('end')
        }, 100)
        return () => {
            setAni('');
        }
    },[])

    useEffect(() => {
        console.log(countNumber);
        if (isNaN(countNumber)){
            setAlertCountInput(true);
        } else {
            setAlertCountInput(false);
        }
        console.log("console check", countNumber, isNaN(countNumber));
    }, [countNumber, alertCountInput])

    let findItem = props.shoes.filter((item) => item.id === Number(id))[0];

    return (
        <div className={`container start ` + ani}>
            {alert && ( 
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
            )}
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                {alertCountInput && (
                    <div>경고 숫자만 입력하세요</div>
                )}
                <div className="col-md-6">
                    <input value={countNumber} placeholder="원하시는 상품 수량을 입력해주세요" onChange={(e) => setCountNumber(e.target.value) }></input>
                    <h4 className="pt-5">{findItem.title}</h4>
                    <div>{findItem.id}</div>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}원</p>
                    <button className="btn btn-danger" onClick={() => {
                        // dispatch(addStock())
                        const data = {};
                        data.id = findItem.id;
                        data.name = findItem.title;
                        data.count = Number(countNumber);
                        dispatch(addStock(data));
                        console.log("넘겨줄 데이터 체크",data)
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { setTap(0) }}  eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTap(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { setTap(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tap={tap}/>
        </div>
    )
};

function TabContent({tap}) {

    let [ani,setAni] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAni('end')
        },100)
        return () => {
            setAni('');
        }
    },[tap])

    return <div className={`start ` + ani}>
        {[<div>내용</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
}
