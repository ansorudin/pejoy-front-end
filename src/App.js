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
import CheckoutForm from './Pages/Checkout/CheckoutForm';
import MyStruck from './Pages/Checkout/MyStruck';
import UserProfile from './Pages/UserProfile/UserProfile';
import Footer from './Component/Footer/Footer';
import CardSimilarProduct from './Pages/DetailProduct/DetailProductComponent/CardSimilarProduct';
import Registration from './Pages/Registration/Registration/Registration'
import Cart from './Pages/Cart/Cart'
import Verification from './Pages/Registration/Registration/Screens/verification/verficication'
import ResetPass from './Pages/Registration/Registration/Screens/Reset/ResetPass'



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
            <Route path='/checkout-form' component={CheckoutForm} />
            <Route path='/my-struck' component={MyStruck} />
            <Route path='/member' component={UserProfile} />
            <Route path='/test' component={CardSimilarProduct} />
            <Route path='/register' component={Registration}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/verification' component={Verification}/>
            <Route path='/resetpassword/:token' component={ResetPass}/>
          </Switch>
        <Footer />

     
      </BrowserRouter>
    </Provider>
  )
}

export default App

