import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './Popup'


class Header extends React.Component { 

    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    
        render(){
            const aggregator = 'Alligator';
            return (
                   <div className = "header">
                        <div className = "left-news">
                            aggregator
                            <div className="right-buttons">
                                <button class="buttons" type="button" onClick={this.togglePopup.bind(this)} >
                                    Вход
                                </button>
                
                                <button class="buttons" type="button">
                                    Регистрация
                                </button>
                            </div>

                        </div>
                        <div>
                        { this.state.showPopup ? 
                            <Popup
                            text='Введите логин и пароль'
                            closePopup={this.togglePopup.bind(this)}
                            />
                            : null
                        } 
                    </div>
                    </div>
                    
            );
                        
        }
}




ReactDOM.render(<Header />, document.getElementById('root'));



