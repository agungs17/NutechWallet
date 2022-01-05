import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './src/redux'

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
    const { Store, Persistor } = reduxStore();
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={Persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    );
}

export default App;