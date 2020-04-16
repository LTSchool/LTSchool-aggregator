import React from 'react';
import Popup from './Popup';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.handleUserName = this.handleUserName.bind(this);
        this.handlePopup= this.handlePopup.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {
          showPopup: false,// реализация окна формы через всплывающее окно
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
            aggregator: 'Alligator'
        });
        this.props.iLI();
    }

    handleUserName(userName) {
        this.setState({
            aggregator: userName
        });
    }

    render(){
        return (
            (

                <div className = "header">
                    <div className = "left-news">
                        <div className="aggregator">{this.state.aggregator}</div>
                    </div>
                    
                    <div className = "right-buttons">
                        <div>
                            {this.props.stateLI ? 
                                <LogoutButton logoutClick={this.handleLogoutClick}/>
                                :
                                <LoginButton loginClick={this.handlePopup}/>
                            }
                        </div>

                        {this.state.showPopup ? 
                            <Popup 
                                text='Вход'
                                closePopup={this.handlePopup}
                                userLogin={this.props.uLI}
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
