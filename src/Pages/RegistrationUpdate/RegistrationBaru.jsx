import React, {useState} from 'react'
import './RegisterCss.css'
import {ReactComponent as Gambar1} from './../../Support/Images/drawkit-grape-pack-illustration-1.svg'
import {ReactComponent as Gambar2} from './../../Support/Images/drawkit-grape-pack-illustration-2.svg'
import {ReactComponent as Gambar3} from './../../Support/Images/drawkit-grape-pack-illustration-11.svg'
import {ReactComponent as Gambar4} from './../../Support/Images/drawkit-grape-pack-illustration-12.svg'
import {ReactComponent as Gambar5} from './../../Support/Images/drawkit-grape-pack-illustration-16.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignupSchema from './SignupSchema';
import SigninSchema from './SigninSchema';
import ForgotPassword from './ForgotPassword'



const RegistrationBaru = (props) => {
    const [loginActive, setLoginActive] = useState(false)
    const [signupActive, setSignupActive] = useState(false)
    const [forgotPass, setForgotPass] = useState(false)
    
    const desktopSettings = {
        dots: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='container' style={{paddingTop : 190, paddingBottom : 110}}>
            <div className='row' style={{position : 'relative'}}>
                <div className='col-md-7 p-5 container-carousel-left'>
                    <Slider {...desktopSettings}>
                        <div className='banner-left-side'>
                            <Gambar1 />
                        </div>
                        <div className='banner-left-side'>
                            <Gambar2 />
                        </div>
                        <div className='banner-left-side'>
                            <Gambar3 />
                        </div>
                        <div className='banner-left-side'>
                            <Gambar4 />
                        </div>
                        <div className='banner-left-side'>
                            <Gambar5 />
                        </div>
                    </Slider>
                </div>
                <div className={signupActive ? 'col-md-5 py-5 signup-schema signup-schema-active' : 'col-md-5 py-5 signup-schema' }>
                    <SignupSchema history={props.history} onClick={() => {setSignupActive(!signupActive); setLoginActive(!loginActive)}} />
                </div>
                <div  className={loginActive ? forgotPass ? 'col-md-5 py-5 login-schema login-schema-active login-forgot-active': 'col-md-5 py-5 login-schema login-schema-active'  : 'col-md-5 py-5 login-schema'}>
                    <SigninSchema onClickForgot={() => {setForgotPass(!forgotPass)}} history={props.history} onClick={() => {setLoginActive(!loginActive);setSignupActive(!signupActive)}} />
                </div>
                <div className={forgotPass ? 'col-md-5 py-5 forgot-password forgot-password-active' : 'col-md-5 py-5 forgot-password'}>
                    <ForgotPassword onClick={() => {setForgotPass(!forgotPass)}} />
                </div>
            </div>
        </div>
    )
}

export default RegistrationBaru
