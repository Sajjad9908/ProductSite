import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchproduct = createAsyncThunk('product/fetchproduct', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok) throw new error('error occoured',error)
            const data= await response.json()
        return data

    } catch (error) {
       if (err){
        console.log('error occoured due to',error)
       }
    }
});

const initialState={
    product:[],
    error:false,
    loading:true
}
    
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{

    },
     extraReducers: (builder) => {
        builder
          // When fetchProducts is pending (start of async action)
          .addCase(fetchproduct.pending, (state) => {
            state.loading = true;
            state.error = null; // Clear previous errors
          })
          // When fetchProducts is fulfilled (successful async action)
          .addCase(fetchproduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload; // Set fetched data
          })
          // When fetchProducts is rejected (error during async action)
          .addCase(fetchproduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // Set error message
          });
      },
})
export {fetchproduct}
export default productSlice.reducer