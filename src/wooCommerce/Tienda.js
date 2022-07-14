import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../shopContext';
import { Card } from 'react-bootstrap';
import './Products/Productos.css'
import Nav from './Products/Nav.js'

class Tienda extends Component {
    static contextType = myContext;

    componentDidUpdate(){
        console.log('Tienda context: ',this.context);
    }
    render(){
        if (this.context.state.storeProducts.length > 0) {
            const products = this.context.state.storeProducts.map(product=>{
                return(
                    <div key={product.id} product={product} className='cont-cards '>
                        
                            <Card className='card-product shadow  rounded ' style={{ width: '20rem' }}>
                            <Link to={{
                                pathname: `/product/${product.id}`,
                                state: {product: {...product}}
                            }}>
                                <Card.Img variant="top" src={product.images[0].src} alt={product.images[0].name} width='300' />
                            </Link>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                {product.price}$
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>   
                        
                    </div>
                )
            });
            return <div className='cuerpo-prod'>
                <Nav/>
                {products} 
                </div>
        } else {
            return 'Loading...';
        }
    }
}

export default Tienda;