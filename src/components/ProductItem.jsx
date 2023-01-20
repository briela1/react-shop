import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import add from '@icons/bt_add_to_cart.svg';
import added from '@icons/bt_added_to_cart.svg';


const ProductItem = ({product}) => {
	const {addToCart, removeFromCart, state} = useContext(AppContext);

	const handleClick = (item) => {
		// addToCart(item);
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
		//Funcion para agregar/eliminar al carrito
	}

	//Funcion para que busque en el contexto si existe el producto en el carrito
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() =>handleClick(product)}>
					{itsProductAdded() ? (
						<img src={added} alt="Add another to cart" />
						) : (<img src={add} alt="Add to cart" />)
					}
					
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;