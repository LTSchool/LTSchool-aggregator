import React from 'react';
import './index.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            user : ''
        }
    }

    handleOnChange(event) {
        this.setState({
            user: event.target.value
        });
    }

    handleSubmit (event){          // submit форма входа
        this.props.userLogin();    // пользователь прошел авторизацию ...
        this.props.closePopup();   // закрыть форму входа
        this.props.userName(this.state.user); // сохранить имя пользователя
        event.preventDefault();
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <form className="form-style" onSubmit={this.handleSubmit}>
                        <h1>{this.props.text}</h1>

                        <div className = 'input'>
                            <label className="text">
                                Логин:
                                <input type="text" value={this.user}  onChange={this.handleOnChange} />
                            </label>
                        </div>
                        <div className = 'input'>
                            <label className="text">   
                                Пароль:
                                <input type="password"/>
                            </label>
                        </div>
                        <div>
                            <input className = "buttons" type="submit" value = "войти"/>
                            <button className = "buttons" onClick={this.props.closePopup} >Закрыть</button>
                            <button  >Регистрация</button>

                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Popup;