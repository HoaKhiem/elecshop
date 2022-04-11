import React, {useState, useRef} from 'react'
import './Login.css'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputRef = useRef('');
    const usernameInputRef = useRef('');
    const [isValidUserName, setIsValidateUserName] = useState(null);
    const [isValidPasswordLength, setIsValidPasswordLength] = useState(null);
    const [isValidUsernameLength, setIsValidUsernameLength] = useState(null);
    const [isValidPasswordFormat, setIsValidPasswordFormat] = useState(null);
    const [isValidForm, setIsValidForm] = useState(false);
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }
    const validateUserNameHandler = () => {
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const userName = usernameInputRef.current.value;
        setIsValidateUserName(!format.test(userName));
        if(!isValidUserName) return;
        setIsValidUsernameLength(userName.length < 6 ? false : true);
        setIsValidForm(isValidPasswordFormat && isValidPasswordLength && isValidUserName && isValidUsernameLength);
    }
    const validatePasswordHandler = () => {
        let format = /[ `!^*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const password = passwordInputRef.current.value;
        setIsValidPasswordFormat(!format.test(password));
        if(!isValidPasswordFormat) return;
        setIsValidPasswordLength(password.length < 6 ? false : true);
        setIsValidForm(isValidPasswordFormat && isValidPasswordLength && isValidUserName && isValidUsernameLength);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(!isValidForm) return;
        alert('okkk')
    }
    return (
        <div className='login'>
            <div className="login-container">
                <div className="login-left">
                    <div className="login-img">
                        <img src="/images/macbook-login.jpg" alt="login" />
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-right-content">
                        <div className="login-right-brand">
                            <h3>elec</h3>
                            <h3>store</h3>
                        </div>
                        <div className="login-right-title">
                            <h2>Welcome back</h2>
                        </div>
                    </div>
                    <form className="login-right-form" onSubmit={submitHandler}>
                        <div className="login-right-form-row">
                            <p className="login-form-header">Login with your account</p>
                        </div>
                        <div className="login-right-form-row">
                            <input onChange={validateUserNameHandler} ref={usernameInputRef} autoComplete='off' className='login-right-form-row-input' type="text" name="username" id="username" placeholder='User name' />
                            {isValidUserName === false && <div className="login-right-form-alert">User name can not contain special character!</div>}
                            {isValidUsernameLength === false && isValidUserName &&<div className="login-right-form-alert">Password's length should greater than 6 characters!</div>}
                        </div>
                        <div className="login-right-form-row">
                            <input ref={passwordInputRef} onChange={validatePasswordHandler} className='login-right-form-row-input' type={!showPassword ? 'password':'text'} name="password" id="password" placeholder='Password' />
                            {isValidPasswordFormat === false && <div className="login-right-form-alert">Password can not contain special character!</div>}
                            {isValidPasswordLength === false && isValidPasswordFormat && <div className="login-right-form-alert">Password's length should greater than 6 characters!</div>}
                            <i onClick={showPasswordHandler} className={`fa-solid ${!showPassword?'fa-eye':'fa-eye-slash'} form-right-icon`}></i>
                        </div>
                        <div className="login-right-form-row">
                            <Button className={`login-right-form-row-btn ${!isValidForm && 'invalidForm'}`}>Login</Button>
                        </div>
                        <div className="login-right-form-row-signup">
                            <div>
                                <Link to='/signup' className='login-link'>Create an account</Link>
                            </div>
                            <div>
                                <Link to='/forgot' className='login-link'>Forgot my password</Link>
                            </div>
                        </div>
                        <div className="login-right-form-row">
                            <Button className='login-right-form-row-btn-gg'><Link className='login-right-form-row-btn-gg-link' to=''><i class="fa-brands fa-google"></i>login with Google</Link></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login