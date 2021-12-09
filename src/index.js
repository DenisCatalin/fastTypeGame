import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.component';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

/*
    Stocare dificultate in redux
    primirea a x secunde in functie de dificultate
*/