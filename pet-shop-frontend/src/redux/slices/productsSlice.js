import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    productByID: null,
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3333/products/all') 
    return response.data
})

export const fetchProductById = createAsyncThunk('products/fetchProductById', async(id) => {
    const response = await axios.get(`http://localhost:3333/products/${id}`)
    return response.data[0]
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

        // for Product by Id-----------------

        .addCase(fetchProductById.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
            state.productById = action.payload
            state.loading = false
        })
        .addCase(fetchProductById.rejected, (state, action) => {
            state.loading  = false
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer