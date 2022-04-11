import React, {useState, useRef} from 'react'
import Count from 'react-countup'
import Button from '../../UI/Button/Button'
import Spinner from '../../UI/Loading/Spinner/Spinner'
import './SignUpOTP.css'
const SingUpOTP = () => {
  const input1Ref = useRef('');
  const input2Ref = useRef('');
  const input3Ref = useRef('');
  const input4Ref = useRef('');
  const [otp, setOtp] = useState('');
  const [validOtp, setValidOtp] = useState();
  const [verifying, setVerifying] = useState(false);
  let otpInput = '';
  const otpChangeHandler = (index) => {
    switch(index){
      case 1:
        otpInput += input1Ref.current.value;
        input2Ref.current.focus();
        break;
      case 2:
        otpInput += input2Ref.current.value;
        input3Ref.current.focus();
        break;
      case 3:
        otpInput += input3Ref.current.value;
        input4Ref.current.focus();
        break;
      case 4:
        otpInput += input4Ref.current.value;
        input4Ref.current.blur();
        setValidOtp(true);
        setOtp(otpInput);
        break;
    }
  }
  const verifyHandler = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      alert(otp);
    }, 2000)
  }
  return (
    <div className='otp'>
      <div className="otp-header">
        <h3>We have sent to your email an OTP code</h3>
        <h5>Please check and type here:</h5>
      </div>
      <div className="otp-form">
        <div className="otp-form-inputs">
          <input onChange={() => otpChangeHandler(1)} ref={input1Ref} type="number" min='0'></input>
          <input onChange={() => otpChangeHandler(2)} ref={input2Ref} type="number" min='0'></input>
          <input onChange={() => otpChangeHandler(3)} ref={input3Ref} type="number" min='0'></input>
          <input onChange={() => otpChangeHandler(4)} ref={input4Ref} type="number" min='0'></input>
        </div>
        <Button onClick={verifyHandler} className={`otp-form-btn ${!validOtp && 'disabled'}`}>{verifying ? <Spinner width='17px' height='17px' color='white' size='2px'/> : 'Verify'}</Button>
      </div>
      <div className="otp-time">
        <i className="fa-solid fa-clock"></i>
        <span><Count start={90} end={0} duration={90}/>s</span>
      </div>
    </div>
  )
}

export default SingUpOTP