import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer} from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom'; 

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {/* get the value params */}
                {(value) => {
                    const {modalOpen, closeModal} = value;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                        <h5>Item agregado al carro de compras</h5>
                                        <img src={value.modalProduct.fullImage} className="img-fluid" alt="product" />
                                        <h5>{value.modalProduct.shortDescripcion || value.modalProduct.name }</h5>
                                        <h6 className="text-muted">price: ${value.modalProduct.prices.offerPrice}</h6>
                                        <Link to='/'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Continuar
                                            </ButtonContainer>
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to='/carroCompras'>
                                            <ButtonContainer 
                                                cart 
                                                onClick={() => closeModal()}
                                                className="mt-1">
                                                Ir a carro de compras
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;