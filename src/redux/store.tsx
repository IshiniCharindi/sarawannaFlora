import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';



import loadingSlice from './loading-slice';
import mobileSlice from './mobile-slice';

// const persistConfig = {
//     key: 'root',
//     storage
// }


const rootReducer = combineReducers({
    loadingSlice: loadingSlice,
    mobileSlice: mobileSlice
})


const store = configureStore({
    reducer: rootReducer,

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store