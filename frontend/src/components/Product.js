import React from 'react'
import { Card, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({ product }) {
    return (
        <Card className='mx-3 my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'}/>
                <h4 as='div' className='my-2'>
                    ${product.price}
                </h4>
            </Card.Body>
        </Card>
    )
}

export default Product
