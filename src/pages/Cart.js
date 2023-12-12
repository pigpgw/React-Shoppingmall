import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addAge } from '../userSlice';
import { addCount } from '../stockSlice';

function Cart() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
            <h6>{state.user.name} {state.user.age} 의 장바구니</h6>
            <button onClick={() => {dispatch(addAge(100))}}>버튼</button>
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
                    {state.stock.map((data, i) => (
                        <tr key={i}>
                            <td>{state.stock[i].id}</td>
                            <td>{state.stock[i].name}</td>
                            <td>{state.stock[i].count}</td>
                            <td>안녕</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(addCount(state.stock[i].id));
                                }}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
