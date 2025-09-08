import { useContext, useEffect } from "react";
import { ShoppingCart, ShoppingCartState } from "./context/context";





const Header=()=>{

    const {dispatch}=useContext(ShoppingCart);

useEffect(()=>{
   console.log( dispatch({type:"SAY_HELLO"}))
},[])

    
    

    
   


    return (
    <div>
        <h2>Shopping Cart</h2>
    </div>
    )
}

export default Header;