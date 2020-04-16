import React from 'react';

function LoginButton(props) {
  return (
    <button className = "buttons" onClick={props.loginClick} > 
      Вход 
    </button>  
  );
}

export default LoginButton;