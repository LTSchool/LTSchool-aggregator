import React from 'react';
import Popup from './Popup';
//import LoginButton from './LoginButton';
//import LogoutButton from './LogoutButton';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePopup= this.handlePopup.bind(this);

        this.state = {
          showPopup: false,// реализация окна формы через всплывающее окно
          isLoggedIn: false,
          aggregator: 'Alligator'
        };
    }
    handlePopup() { // переключить состояние (скрыть/показать окно)
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false,
            aggregator: 'Alligator'
        });
    }

    handleUserName(userName) {
        this.setState({
            aggregator: userName
        });
    }

    handleUserLogin(){
        //this.setState({isLoggedIn: true})
        this.setState({
            isLoggedIn: true
        })
    }
      
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        //const aggregator = 'Alligator';
        let button;

        if (isLoggedIn) {
            //button =  <LogoutButton onClick={this.handleLogoutClick} />;
            button = <button className = "buttons" onClick={this.handleLogoutClick} > выход </button>  
        } else {
            button = <button className = "buttons" onClick={this.handlePopup} > вход </button>  
    }
        return (
            (

                <div className = "header">
                    <div className = "left-news">
                        <div className="aggregator">{this.state.aggregator}</div>
                    </div>
                    
                    <div className = "right-buttons">
                        <div>
                            {button}
                        </div>

                        {this.state.showPopup ? 
                            <Popup 
                                text='Введите логин и пароль'
                                closePopup={this.handlePopup}
                                userLogin={this.handleUserLogin}
                                userName={this.handleUserName}
                            />
                        : null
                        }

                    </div>
                </div>
            )
            
        )
    }
}




export default Header;
