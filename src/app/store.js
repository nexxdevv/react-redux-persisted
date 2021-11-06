import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import myCounterReducer from '../features/counter/myCounterSlice'

const persistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	counter: myCounterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
})

let persistor = persistStore(store)

export { store, persistor }
