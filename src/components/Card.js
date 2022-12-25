import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteCard } from '../Redux-toolkit/slices/Card-slice';
import './Card.css'

function Card() {
    const card = useSelector((state) => state.card);
    const dispatch = useDispatch();
    const totalPrice = card.reduce((acc, product) => {
        Number(acc += product.price * product.quantity).toFixed(2);
        return acc; 
    }, 0)
    console.log(card);
    return (
        <div className='py-3 p-3 main-card'>
            <h3>Final Price : {totalPrice}$</h3>
            <Button onClick={() => dispatch(clear())} className='mt-5 clear' variant='primary'>Clear All</Button>
            {card.map((product) => (
                <div key={product.id} className="card-app">
                    <h2 className='mt-2'>{product.category}</h2>
                    <img className='img-fluid' src={product.image} />
                    <h4>{product.title}</h4>
                    <h5>{product.description}</h5>
                    <p>x {product.quantity}</p>
                    <Button className='btn' variant='danger' onClick={() => dispatch(deleteCard(product))}>X</Button>
                </div>
            ))}
        </div>
    )
};

export default Card;