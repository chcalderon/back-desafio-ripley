import React, { Component } from 'react'
import {  productosID } from './data';

//create a new context object 
const ProductContext = React.createContext();
// Contetx API comes with 2 components Provider, Consumer

class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct: {}
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        productosID.forEach(item => {
            products.push(fetch(`https://back-ripley-desafio.herokuapp.com/getProducto/${item}`).then(res => res.json()));
        });
        Promise.all(products)
            .then((productss) => {
                this.setState(() => {
                    let castProduct = [];
                    productss.forEach(element => {
                        castProduct.push(element.body)
                    });

                    products = castProduct;
            
                    return {products}
                });  
        }).catch((err) => {
              console.log(err);
        });
        console.log(products);
        return products;
       
    }

    // get an item based on id 
    getItem = (id) => {
        console.log(id);
        const product = this.state.products.find(item => item.uniqueID ===id);
        return product;
    }
    
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }


    render() {
        return (
            <ProductContext.Provider value={{
                // use destructuring here
                ...this.state,
                handleDetail: this.handleDetail
            }}
        >

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };