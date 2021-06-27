import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

class ValidatorTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        password: '',
        repeatPassword: ''
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.user.password) {
        return false;
      }
      return true;
    });
  }

  handleChange(event) {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  handleSubmit() {
    // your submit logic
  }

  render() {
    const { user } = this.state;
    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
      >
        <TextValidator
          floatingLabelText="Password"
          onChange={this.handleChange}
          name="password"
          type="password"
          validators={['required']}
          errorMessages={['this field is required']}
          value={user.password}
        />
        <br/>
        <TextValidator
          floatingLabelText="Repeat password"
          onChange={this.handleChange}
          name="repeatPassword"
          type="password"
          validators={['isPasswordMatch', 'required']}
          errorMessages={['password mismatch', 'this field is required']}
          value={user.repeatPassword}
        />
        <br/>
        <RaisedButton type="submit" label="Submit Button"/>
      </ValidatorForm>
    );
  }
}

export default ValidatorTest;
