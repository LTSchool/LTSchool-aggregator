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
                    <button className = "buttons" onClick={this.props.closePopup} >x</button>
                        <div className = 'field-input'>

                            <h1>{this.props.text}</h1>
                            <div>
                                <input type="text" placeholder="Email" value={this.user}  required onChange={this.handleOnChange} />
                            </div>
                            <div>
                                <input type="password" placeholder="Пароль" required />
                            </div>
                            <div>
                                <input type="submit" value = "Войти"/>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Popup;