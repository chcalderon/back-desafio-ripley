import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export default class Product extends Component {
	render() {
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
				<div className="card mb-3">
					<ProductConsumer>
						{(value) => (
							<div
								className="img-container p-5"
								onClick={() => {
									value.handleDetail(this.props.product.uniqueID);
								}}
							>
								<Link to={`/productos/${this.props.product.uniqueID}`}>
									<img src={this.props.product.fullImage} alt={this.props.product.name} className="card-img-top" />
								</Link>
								<button
									className="cart-btn"
									disabled={this.props.product.inCart ? true : false}
									onClick={() => {
										value.addToCart(this.props.product.uniqueID);
										value.openModal(this.props.product.uniqueID);
									}}
								>
									{this.props.product.inCart ? (
										<p className="text-capitalize mb-0 small" disabled>
											{' '}
											 Agregado!
										</p>
									) : (
										<i className="fas fa-cart-plus" />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>

					{/* Card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{this.props.product.shortDescription || this.props.product.name}</p>
						<h6 className="mb-0">
							<span className="mr-1">CLP</span>
							{this.props.product.prices.listPrice}
						</h6>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// Set up PropTypes to check for propTypes and make them required
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		prices: PropTypes.object
	})
};

const ProductWrapper = styled.div`
	.card {
		border-radius: 0;
		border-color: transparent;
		transition: all .25s linear;
	}
	.card-footer {
		border-top: transparent;
		background: transparent;
		transition: all .25s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(247, 247, 247);
			box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.card-img-top {
		transition: all .25s linear;
	}
	.cart-btn {
		cursor: pointer;
		position: absolute;
		right: 0;
		bottom: 0;
		border: none;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		color: var(--mainWhite);
		font-size: 1.35rem;
		transition: all .25s linear;
		&:focus {
			outline: none;
		}
		transform: translate(100%, 100%);
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
`;
