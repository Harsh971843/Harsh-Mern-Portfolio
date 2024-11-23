import { createSlice } from "@reduxjs/toolkit";
const rootslice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        portfoliodata: null,
    },
    reducers: {
        Showloading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        GetPortfolioData: (state, action) => {
            state.portfoliodata = action.payload;
        },
    }
});

export default rootslice.reducer;
export const{Showloading,HideLoading,GetPortfolioData} = rootslice.actions;