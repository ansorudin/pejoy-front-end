import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './Support/CSS-Utils/utils.css';

import Navbar from './Component/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import ListProduct from './Pages/ListProduct/ListProduct';
import DetailProduct from './Pages/DetailProduct/DetailProduct';
import Checkout from './Pages/Checkout/Checkout';
import UserProfile from './Pages/UserProfile/UserProfile';
import Footer from './Component/Footer/Footer';
import Cart from './Pages/Cart/Cart'
import SkeletonDetailProduct from './Pages/DetailProduct/DetailProductComponent/SkeletonDetailProduct';
import RegistrationBaru from './Pages/RegistrationUpdate/RegistrationBaru'
import UpdatePassword from './Pages/RegistrationUpdate/UpdatePassword';
import Verification from './Pages/RegistrationUpdate/Verification';



const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
   
        <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/products' component={ListProduct} />
            <Route path='/detail-product/:id' component={DetailProduct} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/member' component={UserProfile} />
            <Route path='/test' component={SkeletonDetailProduct} />
            <Route path='/register' component={RegistrationBaru}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/update-password/:id' component={UpdatePassword} />
            <Route path='/email-verification/:id' component={Verification} />
          </Switch>
        <Footer />

     
      </BrowserRouter>
    </Provider>
  )
}

export default App

