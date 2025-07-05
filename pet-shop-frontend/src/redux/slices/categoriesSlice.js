import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    categories: [],
    loading: false,
    error: null
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get('http://localhost:3333/categories/all')
    return response.data
})  

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
    
    )
    }
})


export default categoriesSlice.reducer