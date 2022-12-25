import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../Redux-toolkit/slices/Card-slice';
import { fetchProducts } from '../Redux-toolkit/slices/Products-slice';
import './Card.css'

function Products() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <Container className='mt-5'>
            <Row>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card style={{ width: '18rem' }} className="m-auto p-4 mt-5 mb-5 card">
                            <Card.Img variant="top" src={product.image} height="300px"/>
                            <Card.Body className='card-body'>
                                <Card.Title className='category'>{product.category}</Card.Title>
                                <Card.Text className='title'>
                                    {product.title}
                                </Card.Text>
                                <h3 className='price'>{Number(product.price).toFixed(2)}$</h3>
                                <Button className='position-absolute btn' variant="primary" onClick={() => dispatch(addCard(product))}>Add to Card</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;