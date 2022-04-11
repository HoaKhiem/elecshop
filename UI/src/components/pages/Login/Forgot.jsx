import React, {useState, useRef, useEffect} from 'react'
import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Loading/Spinner/Spinner';
import './Forgot.css'
import {Link}  from 'react-router-dom'
const Forgot = () => {
    //ref for store input from input fields
    const emailref = useRef('');
    const otpRef1 = useRef('');
    const otpRef2 = useRef('');
    const otpRef3 = useRef('');
    const otpRef4 = useRef('');
    const passwordRef = useRef('');
    const passwordConfirmRef = useRef('');
    //for loading state:
    const [showingSpinner, setshowingSpinner] = useState(false);
    //for showing layout:
    const [showMailSection, setShowMailSection] = useState(true);
    const [showOTPSection, setShowOTPSection] = useState(false);
    const [showSavingSection, setShowSavingSection] = useState(false);
    //state for store password
    const [password, setPassword] = useState('');
    //state for manage password validity
    const [validPassword, setValidPassword] = useState(null);
    const [validPasswordLength, setValidPasswordLength] = useState(null);
    const [validityPasswordConfirm, setValidityPasswordConfirm] = useState(null);
    const [validAll, setValidAll] = useState(false);
    //state for store email and Otp
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    //state for change password status
    const [changedPassword, setChangedPassword] = useState(false);

    //validity states
    const [validEmail, setValidEmail] = useState(null);
    const [validOtp, setValidOtp] = useState(null);
    const sendOtpHandler = () => {
        if(!validEmail) return;
        setshowingSpinner(true);
        setTimeout(() => {
            setshowingSpinner(false);
            setShowMailSection(false);
            setShowOTPSection(true);
        }, 2000)
    }
    const verifyOtpHandler = () => {
        setshowingSpinner(true);
        setTimeout(() => {
            setShowOTPSection(false);
            setShowSavingSection(true);
            setshowingSpinner(false);
        }, 2000)
    }
    const savePasswordHandler = () => {
        setshowingSpinner(true);
        setTimeout(() => {
            setshowingSpinner(false);
            setChangedPassword(true);
        }, 2000)
    }

    //change handler functions
    const emailChangeHanlder = () => {
       const email = emailref.current.value;
       const emailValidity = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
       setValidEmail(emailValidity ? true : false);
       if(validEmail){
           setEmail(email);
       }
    }
    //otp change functions
    let otpInput = '';
    const otpChange = (index) => {
        switch(index){
            case 1:
                otpInput += otpRef1.current.value;
                if(otpInput.length == 1) otpRef2.current.focus();
                break;
            case 2:
                otpInput += otpRef2.current.value;
                if(otpInput.length == 2) otpRef3.current.focus();
                break;
            case 3:
                otpInput += otpRef3.current.value;
                if(otpInput.length == 3) otpRef4.current.focus();
                break;
            case 4:
                otpInput += otpRef4.current.value;
                if(otpInput.length == 4) setValidOtp(true);
                otpRef4.current.blur();
                setOtp(otpInput);
                break;
        }
    }
    //password change and validity
    const passwordChangeHandler = () => {
        const specialCharactersFormat = /[ `^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const password = passwordRef.current.value;
        setValidPassword(!specialCharactersFormat.test(password));
        if(!validPassword) return;
        setValidPasswordLength(password.length >= 6);
        setPassword(password);
    }
    const passwordConfirmChangeHanler = () => {
        const confirmPassword = passwordConfirmRef.current.value;
        setValidityPasswordConfirm(confirmPassword === password);
    }
    useEffect(() => {
        setValidAll(validPassword === true && validPasswordLength === true && validityPasswordConfirm === true);
    }, [validPassword, validPasswordLength, validityPasswordConfirm])
  return (
    <div className='forgot-container'>
        <div className="forgot">
            {showMailSection &&
                <div className="forgot-mail">
                    <div className="forgot-header">
                        <h5>Forgot your password?</h5>
                        <p>Don't worry, let us help you</p>
                    </div>
                    <div className="forgot-input">
                        <input ref={emailref} onChange={emailChangeHanlder} type="text" placeholder='Type your email here' autoComplete='off' />
                    </div>
                    <div className="forgot-action">
                        <Button onClick ={sendOtpHandler} className={`forgot-action-btn ${!validEmail && 'disabled'}`}>{showingSpinner ? <Spinner width='20px' height='20px' color='white' size='3px'/>:'Send OTP code'}</Button>
                    </div>
                </div>
            }
            {showOTPSection &&
                <div className="forgot-otp">
                    <div className="forgot-otp-header">
                        <p>We have sent you and OTP code, please check and type here:</p>
                    </div>
                    <div className="forgot-input-in">
                        <input ref={otpRef1} onChange={() => otpChange(1)} type="number"/>
                        <input ref={otpRef2} onChange={() => otpChange(2)} type="number"/>
                        <input ref={otpRef3} onChange={() => otpChange(3)} type="number"/>
                        <input ref={otpRef4} onChange={() => otpChange(4)} type="number"/>
                    </div>
                    <div className="forgot-action">
                        <Button onClick={verifyOtpHandler} className={`forgot-action-btn ${!validOtp && 'disabled'}`}>{showingSpinner ? <Spinner width='20px' height='20px' color='white' size='3px'/>:'Verify'}</Button>
                    </div>
                    {/* <div className="forgot-alert">
                        <p>OTP code is invalid, try again</p>
                    </div> */}
                </div>
            }
            {showSavingSection &&
                <div className="forgot-change">
                    <div className="forgot-change-header">
                        <p>Verify success, enter your new password:</p>
                    </div>
                    <div className="forgot-input">
                        <input onChange={passwordChangeHandler} ref={passwordRef} type="text" placeholder='Enter your new password' autoComplete='off' />
                        {validPassword === false && <span className='forgot-alert'>Password can't contain special characters</span>}
                        {validPassword && validPasswordLength === false && <span className='forgot-alert'>Password's length should greater than 5 characters</span>}
                    </div>
                    <div className="forgot-input">
                        <input onChange={passwordConfirmChangeHanler} ref={passwordConfirmRef} type="text" placeholder='Confirm your new password' autoComplete='off' />
                        {validityPasswordConfirm === false && <span className='forgot-alert'>Password does not match</span>}
                    </div>
                    <div className="forgot-action">
                        <Button onClick={savePasswordHandler} className={`forgot-action-btn ${validAll === false && 'disabled'}`}>{showingSpinner ? <Spinner width='20px' height='20px' color='white' size='3px'/>:'Save'}</Button>
                    </div>
                    <div className="forgot-result">
                        {changedPassword &&
                            <p>Change password success <Link to='/login' className='forgot-result-link'>login now</Link></p>
                        }
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Forgot