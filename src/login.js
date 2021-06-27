import React from 'react';
import Button from '@material-ui/core/Button';

import SnackbarComponent from './snackbarComponent';

import EventBus from 'eventing-bus';

class Login extends React.Component {
    state = {
        isOpenSnackbar: false,
        message: "This is a success message!"
    };

    handleClick = ()=> {
        console.log(this.props);
        this.setState({ isOpenSnackbar: true});
    };

    closeSnackbar = ()=> {
        this.setState({ isOpenSnackbar: false});
    }

  componentDidMount() {
    EventBus.publish("changedRoute", "Login");
  }


    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>Up</Button>
                <SnackbarComponent
                    isOpen = {this.state.isOpenSnackbar}
                    close = {this.closeSnackbar}
                    variant="success"
                    message={this.state.message}
                />
            </div>
        );
    }
}

export default Login;
