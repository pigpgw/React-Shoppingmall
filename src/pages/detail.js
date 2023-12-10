import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export default function Detail(props) {

    let a = setTimeout(() => {
        setAlert(false)
    }, 2000)

    let [count, setCount] = useState(0);
    let [alert , setAlert] = useState(true);
    let [countNumber , setCountNumber] = useState("")
    let [alertCountInput, setAlertCountInput ] = useState(false);
    let { id } = useParams();


    useEffect(() => {
       //  유즈 이펙트 전에 실행되는 코드
       return () => {
        clearTimeout(a);
       }
    }, [count])

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
        <div className="container">
            {alert && ( 
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
            )}
            {count}
            <button onClick={() => { setCount(count + 1) }}>버튼</button>
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
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
};