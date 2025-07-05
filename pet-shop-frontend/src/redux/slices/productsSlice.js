import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3333/products/all') 
    return response.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer