import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        removeEmployee: (state, action) => {
            state.employees.splice(action.payload, 1);
        },
    },
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, employeeSlice.reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
