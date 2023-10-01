import React from 'react';
import './mainpage.css';
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();
  
    const validatepage = () => {
      navigate("/validate"); 
    }
  return (
    <div>

      <div className='text'>
        Click the Heart
      </div>
    <div className='main_h' onClick={validatepage}>
      <div className='heart'>
        <span className='span1'></span>
        <span className='span2'></span>

      </div>
    </div>
    </div>

  )
}

export default Mainpage
