import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false

const mobileSlice = createSlice({
    name: 'mobileSlice',
    initialState,
    reducers: {
        checkMobileView: (state, action: PayloadAction<Window>) => {
            return action.payload.innerWidth <= 768
        }
    }
})


export const {checkMobileView} = mobileSlice.actions
export default mobileSlice.reducer