import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Loading/Spinner/Spinner'
import SingUpOTP from './SingUpOTP'
const SignUp = () => {
  //State for agree accept:
  const [agreeTerms, setAgreeTerms] = useState(false);
  //Sending state:
  const [sendingForm, setSendingForm] = useState(false);
  //State for whole valid form:
  const [isValidForm, setIsValidForm] = useState(false);
  //Ref for store user input
  const emailRef = useRef('');
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const rePasswordRef = useRef('');
  //check valid for each input field
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidUserName, setIsValidUserName] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPasswordLength, setIsValidPasswordLength] = useState(null);
  const [isValidUsernameLength, setIsValidUsernameLength] = useState(null);
  const [isValidPassordConfirm, setIsValidPasswordConfirm] = useState(null);
  const specialCharactersFormat = /[ `^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const [authenticating, setAuthenticating] = useState(false);
  useEffect(() => {
    setIsValidForm(isValidEmail && isValidPassordConfirm && isValidPassword && isValidPasswordLength && isValidUserName && isValidUsernameLength && agreeTerms);
  }, [isValidEmail, isValidPassordConfirm, isValidPassword, isValidPasswordLength, isValidUserName, isValidUsernameLength, agreeTerms])
  const agreeTermsHandler = () => {
    setAgreeTerms(!agreeTerms);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(!isValidForm) return;
    setSendingForm(true);
    setTimeout(() => {
      setAuthenticating(true)
    }, 2000)
  }
  const emailChangeHandler = () => {
    const email = emailRef.current.value;
    const emailInput = String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(emailInput){
      setIsValidEmail(true);
      setEmail(emailInput.input);
    }else{
      setIsValidEmail(false);
    }
  }
  const passwordChangeHandler = () => {
    const password = passwordRef.current.value;
    setIsValidPasswordLength(password.length > 5);
    if(!isValidPasswordLength) return;
    setIsValidPassword(!specialCharactersFormat.test(password));
    if(isValidPassword) setPassword(password);
  }
  const usernameChangeHandler = () => {
    const username = usernameRef.current.value;
    setIsValidUsernameLength(username.length > 5);
    if(!isValidUsernameLength) return;
    setIsValidUserName(!specialCharactersFormat.test(username));
    if(isValidUserName) setUserName(username);
  }
  const confirmPasswordHandler = () => {
    const confirm = rePasswordRef.current.value;
    setIsValidPasswordConfirm(confirm === password);
  }
  return (
    <div className="signup-container">
      {!authenticating &&
      <div className='signup'>
        <div className="signup-left">
          <div className="signup-left-img">
            <img src="/images/sign-up.jpg" alt="" />
          </div>
        </div>
        <div className="signup-right">
          <div className="sign-up-right-brand">
            <h4>elec</h4>
            <h4>store</h4>
          </div>
          <form onSubmit={submitHandler} className="signup-right-form">
            <div className="signup-right-form-row">
              <h3>Fill up your information</h3>
            </div>
            <div className="signup-right-form-row">
              <div className="signup-right-form-row-left">
                <input ref={emailRef} onChange={emailChangeHandler} autoComplete='off' className='signup-right-form-input' type="text" name="mail" id="mail" placeholder='Email address' />
                {isValidEmail === false && <span className="signup-right-alert">email is not valid</span>}
              </div>
              <div className="signup-right-form-row-right">
                <input ref={passwordRef} onChange={passwordChangeHandler} autoComplete='off' className='signup-right-form-input' type="password" name="password" id="password" placeholder='Password' />
                {isValidPasswordLength === false && <span className="signup-right-alert">password length should greater than 5</span>}
                {isValidPassword === false &&  isValidPasswordLength && <span className="signup-right-alert">password can not contain special characters</span>}
              </div>
            </div>
            <div className="signup-right-form-row">
              <div className="signup-right-form-row-left">
                <input ref={usernameRef} onChange={usernameChangeHandler} autoComplete='off' className='signup-right-form-input' type="text" name="username" id="username" placeholder='User name' />
                {isValidUsernameLength === false && <span className="signup-right-alert">username length should greater than 5</span>}
                {isValidUsernameLength &&  !isValidUserName && <span className="signup-right-alert">username can not contain special characters</span>}
              </div>
              <div className="signup-right-form-row-right">
                <input ref={rePasswordRef} onChange={confirmPasswordHandler} autoComplete='off' className='signup-right-form-input' type="password" name="passconfirm" id="passconfirm" placeholder='Confirm password' />
                {isValidPassordConfirm === false && <span className="signup-right-alert">password does not match</span>}
              </div>
            </div>
            <div className="signup-right-form-row signup-right-form-row-check">
              <div onClick={agreeTermsHandler} className='signup-right-form-check'>
                {agreeTerms && <div className="signup-right-form-checked"></div>}
              </div>
              <div className="signup-right-form-term">
                <p onClick={agreeTermsHandler}>I agree with </p> <Link className='signup-right-form-link' to='/terms'>terms and conditions</Link>
              </div>
            </div>
            <div className="signup-right-form-row">
              <Button className={`signup-right-form-row-btn ${!isValidForm && 'disabled'}`}>{sendingForm ? <Spinner width='20px' height='20px' color='white' size='2px'/> : 'Sign Up'}</Button>
            </div>
          </form>
        </div>
      </div>}
      {authenticating && <SingUpOTP/>}
    </div>
  )
}

export default SignUp