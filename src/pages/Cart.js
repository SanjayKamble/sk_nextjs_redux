import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';



const Cart = () => {
  //whenever we want to change the store, we have to dispatch
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  let singleProduct = useSelector(state => state.cart);
  const navigate = useNavigate();

  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    total += singleProduct[i].price;
  }
  // console.log(singleProduct[0].price);

  // useEffect(() => {
  //   dispatch(calculateTotal());
  // }, []);




  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }

  const navigateToCheckout = () => {

    navigate('/cart/checkout');
    // to get total amount 
  }

  // const totalAmount = (price) => {
  //   return  price += price ;
  // };
  return (

    <div>
      <h3> Cart items </h3>
      <div className='cartWrapper'>
        {

          products.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>

            </div>
          ))
        }
      </div>
      <button className='btn-checkout' onClick={navigateToCheckout}>Proceed to checkout</button>
      <span>
        <h2>Total :{total}</h2>
      </span>





    </div>

  )
}

export default Cart