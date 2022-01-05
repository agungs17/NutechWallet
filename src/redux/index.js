import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    // register reducers jika tidak dalam whitelist tidak di persisting
    whitelist: ['ReducerAuth'],
    storage: AsyncStorage,
}

const peristedReducer = persistReducer(persistConfig, reducers)

export default () => {
    const Store = createStore(peristedReducer, applyMiddleware(thunk));
    const Persistor = persistStore(Store);
    return { Store, Persistor }
}

export * from './actions'