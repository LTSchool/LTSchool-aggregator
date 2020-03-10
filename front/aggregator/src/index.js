import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './Popup';

class Header extends React.Component{

    render(){
        const aggregator = 'Alligator';
        return (
            (
                <div className = "divheader">
                    <div className = "leftNews">
                        <div className="aggregator">{aggregator}</div>
                    </div>
                    <AuthButtons/>
                </div>
                
            )
            
        )
    }
}
class AuthButtons extends React.Component{

    constructor() {
        super();
        this.state = {
          showPopup: false // реализация окна формы через всплывающее окно
        };
      }
      togglePopup() { // переключить состояние (скрыть/показать окно)
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render(){
        return(
            <div className = "rightButtons">
                <div>
                    <button className = "buttons" onClick={this.togglePopup.bind(this)} > вход </button>
                </div>
                <div>
                    <button className = "buttons" onClick={this.togglePopup.bind(this)} > регистрация </button>
                </div>
                

                {this.state.showPopup ? 
                 <Popup
                    text='Введите логин и пароль'
                    closePopup={this.togglePopup.bind(this)}
                 />
                    : null
                }

            </div>
            
        )
    }
}



class loginForm extends React.Component{ // api (на будущее......)
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    onSubmit(event){
        event.preventDefault();
    }


}






  
ReactDOM.render(<Header />, document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
