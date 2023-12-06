import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
  if(exisitingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    }
   return  [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if(existingCartItem.quantity === 1) {
   return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if(existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
}


export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  totalValue: 0,
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const addCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(addCartCount);
    }, [cartItems])
    
    useEffect(() => {
        const addTotalValueCount = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setTotalValue(addTotalValueCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeCartItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearCartItemFromCart = (cartItemToRemove) => {
      setCartItems(clearCartItem(cartItems, cartItemToRemove))
    }

    const value = {
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      removeCartItemFromCart,
      clearCartItemFromCart,
      cartItems,
      cartCount,
      totalValue,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
