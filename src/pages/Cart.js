import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let a =useSelector((state) => {return state.stock})
    console.log(a);

    function ItemList({stock}){
        console.log("stock",stock)
        return (
            <>
                <tr>
                    <td>{stock.name}</td>
                    <td>{stock.count}</td>
                    <td>안녕</td>
                    <td>안녕</td>
                </tr>
            </>
        )
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((stock, index) => {
                        return (
                            <ItemList stock={stock} />
                        )
                    })}
                </tbody>

            </Table> 
        </div>
    )
}


export default Cart;