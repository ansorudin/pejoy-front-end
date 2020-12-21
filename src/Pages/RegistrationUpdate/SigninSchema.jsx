import React, {useState} from 'react'
import './RegisterCss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';
import { UrlAPI } from '../../Support/Constants/UrlAPI';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const SigninSchema = ({onClick}) => {
    const [input, setInput] = useState({
        email : '',
        password : ''
    })
    const [error, setError] = useState({
        email : '',
        password : ''
    })
    const [errorStatus, setErrorStatus] = useState(false)
    const [eye, setEye] = useState(false)

    const validationEmail = (e) => {
        const re = /\S+@\S+\.\S+/;
        let email = e.target.value

        if(re.test(email.toLowerCase())){
            setError({...error, email : 'nice'})
            setErrorStatus(false)
        }else if(email.length === 0){
            setError({...error, email : 'Email tidak boleh kosong'})
            setErrorStatus(true)
        }else{
            setError({...error, email : 'Email format salah!'})
            setErrorStatus(true)
        }
        setInput({...input, email : e.target.value})
    }

    const validationPassword = (e) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        let password = e.target.value

        if(re.test(password)){
            setError({...error, password : 'nice'})
            setErrorStatus(false)
        }else if(password.length === 0){
            setError({...error, password : 'Password tidak boleh kosong'})
            setErrorStatus(true)
        }else if(password.length < 8){
            setError({...error, password : 'Password minimal 8 character'})
            setErrorStatus(true)
        }
        else{
            setError({...error, password : 'Password at least A-z & 0-9'})
        }
        setInput({...input, password : e.target.value})
    }

    // send google token
    const sendGoogleToken = tokenId => {
        Axios.post(UrlAPI + 'authBaru/googlelogin', {idToken : tokenId})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const responseGoogle = response => {
        console.log(response)
        sendGoogleToken(response.tokenId)
    }

    const sendFacebookToken = (userID, accessToken) => {
        Axios.post(UrlAPI + 'authBaru/facebooklogin', {userID, accessToken})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log('Facebook Login Failed' + err)
        })
    }

    const responseFacebook = response => {
        sendFacebookToken(response.userID, response.accessToken)
    }


    return (
        <div className='right-side-container w-100'>
            <h6>Welcome Back</h6>
            <div className='social-auth'>
                <GoogleLogin
                clientId={'484227442752-uv4bai641h7vdjl9g83amlk46nq4alqa.apps.googleusercontent.com'}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <div onClick={renderProps.onClick} className='icon-social'>
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                )}
                >
                </GoogleLogin>

                <FacebookLogin
                appId={'390305322240658'}
                autoLoad={false}
                callback={responseFacebook}
                render={renderProps => (
                    <div onClick={renderProps.onClick} className='icon-social'>
                        <FontAwesomeIcon icon={faFacebookSquare} style={{fontSize : 18}} />
                    </div>

                )}
                >
                </FacebookLogin>
                
                <div className='icon-social'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>

            <p>or use your account</p>
            
            <div className='w-75 py-4'>
                <div className='d-flex'>
                    <span className='icon-in-form'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <div className='input-box'>
                        <input className={error.email === '' ? 'input-norm' : error.email === 'nice' ? 'input-valid' : 'input-notvalid'} type='text' value={input.email} onChange={(e) => validationEmail(e)} />
                        <label 
                            className={input.email !== '' && error.email === '' ? 'input-filed' : 
                            input.email !== '' && error.email === 'nice' ? 'input-filed-valid' : 
                            input.email !== '' && error.email !== 'nice' && error.email !== '' ? 'input-filed-notvalid' : 
                            input.email === '' && error.email !== 'nice' && error.email !== '' ? 'input-filed-notvalid' : ''} >
                                Email
                        </label>
                        <p>{error.email !== 'nice' ? error.email : ''}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <span className='icon-in-form'>
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <div className='input-box'>
                        <input className={error.password === '' ? 'input-norm' : error.password === 'nice' ? 'input-valid' : 'input-notvalid'} type={eye === true ? 'text':'password' } value={input.password} onChange={(e) => validationPassword(e)}/>
                        <label 
                            className={input.password !== '' && error.password === '' ? 'input-filed' : 
                            input.password !== '' && error.password === 'nice' ? 'input-filed-valid' : 
                            input.password !== '' && error.password !== 'nice' && error.password !== '' ? 'input-filed-notvalid' : 
                            input.password === '' && error.password !== 'nice' && error.password !== '' ? 'input-filed-notvalid' : ''} >
                                Password
                        </label>
                        <p>{error.password !== 'nice' ? error.password : ''}</p>
                        <span onClick={() => setEye(!eye)} className='icon-eye' style={{display : input.password !== '' ? 'inline' : 'none'}}>
                            <FontAwesomeIcon icon={eye === true ? faEyeSlash : faEye} />
                        </span>
                    </div>
                </div>
                <div style={{textAlign : 'end'}}>
                    <p style={{fontSize : 14, fontWeight : 'bolder', cursor : 'pointer'}}>Forgot password</p>
                </div>
                <div className='align-self-end mt-3'>
                    <button 
                        onClick={() => console.log('buton masuk')}
                        className='aa-btn' 
                        disabled=
                            {
                                errorStatus && input.email === '' || input.password === '' ? true : false
                            }
                    >
                        Submit
                    </button>
                </div>
                <div className='mt-4'>
                    <p>Don't have an account ? <span onClick={onClick} style={{cursor : 'pointer'}}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default SigninSchema
