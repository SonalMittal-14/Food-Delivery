import { createContext, useEffect, useState } from "react" 
import { food_list } from "../assets/assets"


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1})) // create the new entry in our cart
        }
        else{
            setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1})) // if something is already exist there then it increase the value by one
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1})) // it will remove the entry
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
 
export default StoreContextProvider
