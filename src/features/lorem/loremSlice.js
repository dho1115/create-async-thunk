import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { 
    data: [],
    isSuccess: false,
    message: '',
    loading: false
}

//=========== createAsyncThunk ===========
export const getLorem = createAsyncThunk('lorem/getData', async (arg, {rejectWithValue}) => {
    try {
        const { data } = await axios.get('https://baconipsum.com/api/?type=meat-and-filler') //This is the async function.

        return data; //You MUST 'return' some data or it will return 'undefined'.
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
            console.log({ result: "pending", loading: state.loading, state })
        },
        //The keys here (e.g.: 'lorem/getData/fulfilled') is pretty much the same as the 'case' names for the switch/case. So here, it would be case 'lorem/getData/fulfilled': [ code goes here ] return state.
        'lorem/getData/fulfilled': (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;

            console.log({ result: "SUCCESS!!!", loading: state.loading, data: state.data, state, payload })

            return state
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = payload;

            console.log({ result: "ERROR!!!", loading: state.loading, message: state.message, state })
        }
    }
})

export default loremSlice;