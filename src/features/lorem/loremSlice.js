import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { 
    data: [],
    isSuccess: false,
    message: '',
    loading: false
}

//=========== createAsyncThunk ===========
export const getLorem = createAsyncThunk('lorem/getData', (arg, {rejectWithValue}) => {
    try {
        const { data } = axios.get('https://baconipsum.com/api/?type=meat-and-filler')

        return data;
    } catch (err) {
        rejectWithValue(err.response.data)
    }
})
//========================================

const loremSlice = createSlice({
    name: 'lorem',
    initialState,
    reducers: {},
    extraReducers: {
        [getLorem.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getLorem.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = payload;
        }
    }
})

export default loremSlice;