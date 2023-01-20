import React from 'react';
import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png';
import ProductItem from './ProductItem';

const OrderItem = ({product}) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;