import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import './Productos.css'


class Products extends Component {
    state = {
        storeProducts:[]
    };
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://margar311.dreamhosters.com/Empowerit/wp-json/wc/v3/products',
            auth: {
                username: 'ck_bd2c15c763b0ac1aecfe4775fe3297b03cc7059c',
                password: 'cs_f54caf0192a2b8ba2236866748fa3170757f2965',
            }
        })
        .then( response => {
            console.log('Store products:', response.data);
            this.setState({
                storeProducts: response.data
            });
        });
    };
    render() {
        
        if ( this.state.storeProducts.length > 0 ) {
            
            const products = this.state.storeProducts.map( product => {
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
            return <div className="cuerpo-prod">

                
                    {products}
                
                </div>
        }else {
            return 'Loading...';
        }
        
        
    }
    
        
    
};

export default Products;