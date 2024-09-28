import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.handleUserLogout = this.handleUserLogout.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);

        this.state = {
            isLoggedIn: false
        }
    }
    handleUserLogout() {
        this.setState({
            isLoggedIn: false
        });
    }

    handleUserLogin(){
        this.setState({
            isLoggedIn: true
        });
    }

    render(){
        let stateLI = this.state.isLoggedIn;
        return(
            <div className='app'>
                <Header 
                    iLI={this.handleUserLogout}
                    uLI={this.handleUserLogin}
                    stateLI={stateLI}
                />
                <Body
                    stateLI={stateLI}
                />
                
            </div>
            
        )

    }

}

export default App;

