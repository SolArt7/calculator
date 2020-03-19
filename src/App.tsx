import React from 'react';
import {Provider} from 'react-redux'
import store from './redux'
import RootPage from './pages/RootPage';

function App() {
  return (
    <Provider store={store}>
      <RootPage />
    </Provider>
  );
}

export default App;
