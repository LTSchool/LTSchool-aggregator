import React from 'react';

function LoginButton(props) {

  return (
    <button className = "buttons" onClick={this.props.togglePopup.bind(this)} > 
        Войти 
    </button>
  );
}
export default LoginButton;
