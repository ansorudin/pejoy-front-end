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
import CardSimilarProduct from './Pages/DetailProduct/DetailProductComponent/CardSimilarProduct';
import Registration from './Pages/Registration/Registration/Registration'
import Cart from './Pages/Cart/Cart'
import Verification from './Pages/Registration/Registration/Screens/verification/verficication'
import ResetPass from './Pages/Registration/Registration/Screens/Reset/ResetPass'
import SkeletonLoadingListProduct from './Pages/ListProduct/ComponentListProduct/SkeletonLoadingListProduct';
import SkeletonDetailProduct from './Pages/DetailProduct/DetailProductComponent/SkeletonDetailProduct';



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

