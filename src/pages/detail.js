import { useParams } from "react-router-dom"

export default function Detail(props) {

    let {id} = useParams();

    console.log("id",id)

    let findItem = props.shoes.filter((item) => item.id === Number(id))[0];


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
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