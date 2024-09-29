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
            const idEmployee = action.payload;
            state.employees = state.employees.filter((employee) => employee.id !== idEmployee);
        },
        resetEmployees: (state, action) => {
            state.employees = action.payload;
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
