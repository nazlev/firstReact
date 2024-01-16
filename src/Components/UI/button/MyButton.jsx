import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, isActive, ...props}) => {
  return (
    <button 
      {...props} 
      className={isActive ? classes.myBtnActive : classes.myBtnDis}
    >
      {children}
    </button>
  )
}

export default MyButton;