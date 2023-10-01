import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './validate.css';

const Validate = () => {
    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);


    const isPasswordValid = () => {
      return password === '23/03/2004';
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

    // const handleButtonClick = () => {
    //     if (isPasswordCorrect) {
    //       alert('Password is valid');
    //     } else {
    //       alert('Password is invalid');
    //     }
    //   }
    
    
  
    const navigate = useNavigate();
  
    const contentpage = () => {
      navigate("/content"); 
    }

  return (
    <div className='box'>
       <div className="password-container">
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        className="password-input"
        // Update isPasswordCorrect when the password is valid
        onBlur={() => setIsPasswordCorrect(isPasswordValid())}
      />
      {isPasswordCorrect && (
        <button onClick={contentpage} className="validate-button">
          Validate Password
        </button>
      )}
    </div>

    </div>
  )
}

export default Validate


