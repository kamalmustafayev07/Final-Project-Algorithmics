import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async (urlInfo) => {
        let url = `http://localhost:3000/${urlInfo}`;
        const res = await fetch(url);
        const data = await res.json();
        return { data, urlInfo };
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        bestsellers: [],
        favorites: [],
        cart: [],
        cartProductsCount: 0,
        categories: [],
        notFound: false,
        isLoading: null,
        error: false,
        notClickedFavorites:false,
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
        },
        addToCart: (state, action) => {
            const cartIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (cartIndex < 0) {
                state.cart.push({ ...action.payload, count: 1 });
            } else {
                state.cart[cartIndex].count += 1;
            }
            state.cartProductsCount += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            const { data, urlInfo } = action.payload;
            if (data.categories) {
                state.categories = data.categories;
            } else if (data.response) {
                if (urlInfo.includes('bestsellers?')) {
                    state.bestsellers = data.products;
                } else {
                    state.products = data.products;
                }
                state.isLoading = false;
            } else {
                state.notFound = true;
            }
        });
        builder.addCase(fetchContent.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    },
});


export const { addToFavorites, deleteFromFavorites, addToCart } = productsSlice.actions;

export default productsSlice.reducer;