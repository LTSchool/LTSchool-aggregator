import React from 'react';

function LogoutButton(props) {
  return (
    <button className = "buttons" onClick={props.logoutClick} > 
      Выход 
    </button>  
  );
}
export default LogoutButton;