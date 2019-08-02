import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
        <ProductConsumer>
          {value => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto text-center my-3">
                    <h1>{ value.detailProduct.shortDescription || value.detailProduct.name}</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={ value.detailProduct.fullImage} alt={ value.detailProduct.name} className="img-fluid" />
                  </div>

                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h3>{value.detailProduct.name}</h3>
                    <h6>Precio Normal: <strong> CLP <span>{value.detailProduct.prices.listPrice}</span> </strong></h6>
                    <h6>Precio Oferta: <strong> CLP <span>{value.detailProduct.prices.offerPrice}</span> </strong></h6>
                    <p className="mt-3 mb-0">
                      {value.detailProduct.attributes.map((atributo, index) =>
                        <p key={index}><strong>{atributo.name} : </strong>{atributo.value}</p>
                      )}
                    </p>
                    <p className="text-muted">clase mute {value.detailProduct.name}</p>

                    <div className="">
                      <Link to="/">
                        <ButtonContainer>
                          Volver
                        </ButtonContainer>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
    )
  }
}