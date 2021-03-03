import React, { useContext } from 'react';
import shopContext from '../context/shopContext';

const Home = () => {
  const shop=useContext(shopContext)
  let products=shop.internalItems
  let handleAddToCart=shop.handleAddToCart
  return (
    <div className="row mt-5">
      <div className="col-md-9 mx-auto mb-5 ">
        <div className="row">
        {products.map(product=>(
        <div className="col-md-4 mt-2 text-center" key={product._id}>
            <div className="card card-body ">
              <div className="text-center">
              <img src={product.image} alt={product.title} width="200" height="200" />
              </div>
              <h3>{product.title}</h3>
              <h5 className="text-info">$ {product.price}</h5>
        </div>
        <button className="btn btn-primary mt-2"onClick={()=>handleAddToCart(product)} >Add to cart</button>

        </div>
        
      ))}
        </div>
      
      </div>
     
    </div>
  );
};

export default Home;