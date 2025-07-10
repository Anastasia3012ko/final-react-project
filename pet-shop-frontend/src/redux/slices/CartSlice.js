import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
}

function calculateTotalPrice(items) {
  return items.reduce((sum, item) => {
    const price = item.discont_price ?? item.price
    return sum + price * item.quantity
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        item => item.id === action.payload.id
      )
      const quantityToAdd = action.payload.quantity ?? 1
      if (itemInCart) {
        itemInCart.quantity += quantityToAdd
        itemInCart.price = action.payload.price
      } else {
        state.items.push({ ...action.payload, quantity: quantityToAdd })
      }
      state.totalPrice = calculateTotalPrice(state.items)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === id)

      if (itemIndex !== -1) {
        if (quantity > 0) {
          state.items[itemIndex].quantity = quantity
        } else {
          state.items.splice(itemIndex, 1)
        }
        state.totalPrice = calculateTotalPrice(state.items)
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload
      state.items = state.items.filter((item) => item.id !== id)
      state.totalPrice = calculateTotalPrice(state.items)
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer

//  updateQuantity: (state, action) => {
//             const {id, quantity} = action.payload
//             const item = state.items.find(item => item.id === id)

//             if (item && quantity > 0) {
//                 item.quantity = quantity
//                 state.totalPrice = calculateTotalPrice(state.items)
//             }
//         },
