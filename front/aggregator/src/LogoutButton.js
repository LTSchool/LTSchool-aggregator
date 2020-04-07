import React from 'react';

function LogoutButton(props) {
  return (
    <button className = "buttons" onClick={this.togglePopup.bind(this)} > 
        Выйти
    </button>
  );
}
export default LogoutButton;