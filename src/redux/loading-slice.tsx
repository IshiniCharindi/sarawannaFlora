import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false

const loadingSlice = createSlice({
    name: 'loadinSlice',
    initialState,
    reducers: {
        triggerLoading: (state) => {
            state = !state
            return state
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload
        }
    }
})


export const {triggerLoading, setLoading} = loadingSlice.actions
export default loadingSlice.reducer