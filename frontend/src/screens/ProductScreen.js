import React, { useState, useEffect } from 'react'
import { Button, Image, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import products from '../products'
import Rating from '../components/Rating'
import axios from 'axios'

import { listProductDetails } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

function ProductScreen({ match }) {

    // const product = products.find((p) => (p._id === match.params.id))
    // const [product, setProduct] = useState([])

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [])
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    ${product.price}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock
                                    ?
                                        'In Stock'
                                        :
                                        'Out Of Stock'
                                    }
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen