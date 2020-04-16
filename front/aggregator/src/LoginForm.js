class LoginForm extends React.Component{ // api (на будущее......)
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    onSubmit(event){
        event.preventDefault();
    }


}