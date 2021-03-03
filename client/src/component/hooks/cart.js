import React, { useContext } from 'react'
import shopContext from '../context/shopContext'


export default function Cart(){
  const product=useContext(shopContext)
  let itemsInCart=product.cart
  const clearCart=product.clearCart
  const handleDeleteItemInCart=product.handleDeleteItemInCart
  const totalPriceInCart=product.totalPriceInCart
  const handleIncrease=product.handleIncrease
  const handleDecrease=product.handleDecrease


  return(
    <React.Fragment>
      <div className="row mt-2 text-center">
        <div className="col-md-9 mx-auto">
          <div className="table-responsive-sm mb-5">
          <table className="table   ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col">price</th>
                <th scope="col">QTY</th>
                <th scope="col"> {itemsInCart.length>=1 &&(<button className="btn btn-danger btn-sm" onClick={clearCart}>Clear All</button>)} </th>
              </tr>
            </thead>
            <tbody >
              {itemsInCart.map(item=>(
                <tr key={item._id}  >
                <th ><img src={item.image} alt={item.title} width="100" height="100"  /></th>
                <td className="align-middle" >{item.title}</td>
                <td className="align-middle">{item.price}</td>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                  <button className="btn btn-primary btn-sm" disabled={item.quantity===1}onClick={()=>handleDecrease(item)}>-</button>
                  <span className="badge bg-secondary m-2">{item.quantity}</span>
                  <button className='btn btn-primary btn-sm' onClick={()=>handleIncrease(item)}>+</button>
                  </div>
                  </td>
                <td className="align-middle"><button className="btn btn-danger" onClick={()=>handleDeleteItemInCart(item)}><i className="fa fa-trash"></i></button></td>
              </tr>
              ))}
              
            </tbody>
            
          </table>
          <div>
              <h3 className="text-center">Total Price: $ {totalPriceInCart()}</h3>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}