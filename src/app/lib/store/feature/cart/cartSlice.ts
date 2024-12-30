import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartitem {
    id : number,
    quantity : number ,
}


export interface CartState {
    item: cartitem[]
}
const initialState: CartState = {
    item: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
            add : (state , actions : PayloadAction <cartitem> ) => {
                const {id, quantity} = actions.payload
               state.item.push({id, quantity} )
            },
            remove : (state , actions : PayloadAction <number> ) => {
                state.item = state.item.filter((item) => item.id !== actions.payload  )
            }
    }
})

// Action creators are generated for each case reducer function
export const {add , remove } = cartSlice.actions

export default cartSlice.reducer