import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Попытка входа пользователя: ' + this.state.value);
        event.preventDefault();
      }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <form className="form-style" onSubmit={this.handleSubmit}>
              <h1>{this.props.text}</h1>

              <label>
                Логин:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>

              <label>
                Пароль:
                <input type="password"/>
              </label>

              <button className = "buttons" type="submit" >Войти</button>
              <button className = "buttons" onClick={this.props.closePopup} >Закрыть</button>
          
            </form>
          </div>
        </div>
      );
    }
  }

export default Popup;