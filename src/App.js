import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './Support/CSS-Utils/Utils.css';

import Navbar from './Component/Navbar/Navbar';
import ListProduct from './Pages/ListProduct/ListProduct';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/list-product' component={ListProduct} />
          </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

