import React, { useEffect, useState } from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import shopContext from './component/context/shopContext'
import Cart from './component/hooks/cart'
import Home from './component/hooks/home'
import NavBar from './component/utils/navbar'
import NotFound from './component/hooks/notFound';


const internalItems=[
  {_id:1,title:'watch',price:'100',image:"/products/1.jpg"},
  {_id:2,title:'Usb-Bluetooth',price:'200',image:"/products/2.jpg"},
  {_id:3,title:'Barcode-Reader',price:'300',image:"/products/3.jpg"},
  {_id:4,title:'Mac-book pro',price:'400',image:"/products/4.jpg"},
  {_id:5,title:'Mic-Wireless',price:'500',image:"/products/5.jpg"},
  {_id:6,title:'MP3',price:'600',image:"/products/6.jpg"},
]
export default function App(){ 
  const cartFromLocalStorage=JSON.parse(localStorage.getItem('cart')||'[]')
  const [cart,setCart]=useState(cartFromLocalStorage)
 
  
  useEffect(()=>{
   localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])



   // cart //
  const handleAddToCart=(product)=>{
    const newCart=[...cart]
    let itemInCart=newCart.find(item=>product._id===item._id)
    if(itemInCart){
      itemInCart.quantity++
    }else{
      itemInCart={
        ...product,
        quantity:1
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)

  }
  const handleIncrease=(item)=>{
    const newCart=[...cart]
    let itemInCart=newCart.find(product=>item._id===product._id)
    if(itemInCart)
      itemInCart.quantity++
    setCart(newCart)

  }
  const handleDecrease=(item)=>{
    const newCart=[...cart]
    let itemInCart=newCart.find(product=>item._id===product._id)
    if(itemInCart)
      itemInCart.quantity--
    setCart(newCart)

  }
  const totalItemsInCart=()=>{
    return cart.reduce((sum,{quantity})=>sum+quantity,0)
  }
  const totalPriceInCart=()=>{
    return cart.reduce((sum,{price,quantity})=>sum+price*quantity,0)
  }
  const handleDeleteItemInCart=(item)=>{
     setCart(cart.filter(product=>item._id!==product._id))
  }
  const clearCart=()=>{
    setCart([])
  }

  return(
    <React.Fragment>
      
      <shopContext.Provider value={{internalItems,handleAddToCart,cart,totalItemsInCart,handleDeleteItemInCart,totalPriceInCart,clearCart,handleIncrease,handleDecrease,}}>
      <NavBar/>
        <div className="container" style={{ paddingTop: "70px"}}>
        <Switch>
          <Route path="/cart"><Cart/></Route>
          <Route path="/" exact><Home/></Route>
          <Route path="/not-found"><NotFound/></Route>
          <Redirect to="/not-found"/>
        </Switch>
      </div>
      </shopContext.Provider>
    </React.Fragment>
  )
}