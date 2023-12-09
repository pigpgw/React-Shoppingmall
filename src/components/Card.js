export default function Card(props) {
    return (
        <div className='col-md-4'>
            <img src={'./shoes' + (props.index + 1) + '.jpg'} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.price}</p>
        </div>
    )
}