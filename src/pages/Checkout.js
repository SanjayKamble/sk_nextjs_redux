import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {

    let singleProduct = useSelector(state => state.cart);
    let total = 0;
    for (let i = 0; i < singleProduct.length; i++) {
      total += singleProduct[i].price;
    }

    return (
        <div>
            <h2>Total amount : {total}</h2>
            <h3>Select Payment Method</h3>
            <ul>
                <button className='btn-checkout'>Cash on Delivery</button>
                <button className='btn-checkout'>Online Payment</button>
                <button className='btn-checkout'>Bank Transfer</button>
                <button className='btn-checkout'>Credit card</button>
            </ul>
        </div>
    )
}

export default Checkout;