import React, { Component } from 'react';
import axios from 'axios';

//creacion de contexto
export const myContext = React.createContext();

//creacion de proveedor
export class MyProvider extends Component {
    state = {
        storeProducts:[],
        items: [],
        subtotal:0
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

    //Agregar al carrito
    addToCart = (product) =>{
        //verificar si el producto esta en el carrito
        let exists = this.state.items.filter(item => item.id === product.id);

        //si existe actualizar cantidad
        if (exists.length > 0) {
            const newState = {...this.state};
            newState.items.forEach (item=> {
                if( item.id === exists[0].id){
                    item.quantity = item.quantity + 1;
                }
            });

            newState.subtotal = this.calculateSubtotal();
            this.setState(newState);
            return;
        }

        //si el producto no existe, se agrega
        const formattedProduct ={
            id:product.id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.images[0].src,
            quantity: 1
        }

        const newState = {...this.state};
        newState.items.push(formattedProduct);
        newState.subtotal = this.calculateSubtotal();
        this.setState(newState);
    }

    //Eliminar del carrito
    removeFromCart = (id) => {
        const updateItems = this.state.items.filter(item => item.id !== id);
        let subtotal = 0;

        if (updateItems.length > 0){
            updateItems.forEach(item =>{
                subtotal = subtotal + (item.price * item.quantity);
                subtotal = this.round(subtotal,2);
            });
        }

        this.addToCart.setState({
            items:updateItems,
            subtotal: subtotal
        })
    }

    //Calcular subtotal
    calculateSubtotal = () => {
        let subtotal = 0;

        this.state.items.forEach(item=>{
            subtotal = subtotal + ( item.price * item.quantity);
        });
        subtotal = this. round (subtotal,2);
        return subtotal;
    }

    //Redondeo
    round = (value,decimals) => {
        return Number (Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    render() {
        return (
          <myContext.Provider value={{ state: this.state, addToCart: this.addToCart, removeFromCart: this.removeFromCart }}>
            {this.props.children}
          </myContext.Provider>
        )
      }

}