import React, { Component, Fragment } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Title name="Listado" title="Productos"/>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map( product => {
                                    return <Product 
                                        key={product.uniqueID} 
                                        product={product} />
                                    })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </Fragment>
        )
    }
}