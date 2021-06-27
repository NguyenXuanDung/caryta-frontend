import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const styles = theme => ({
  root: {
    justifyContent: 'center',
  },

  textField: {
    marginBottom: 20,
  },

  actionForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});

class ChangePassTest extends React.Component {
  state = {
    formData: {
      id: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    isValidated: false,
    errorMessage: '',
  };

  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  componentWillMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.formData.newPassword) {
        return false;
      }
      return true;
    });
  }

  componentDidMount() {
    console.log('didmounted');
  }

  handleChange = (event, value) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData, errorMessage: '' });
  };

  handleSubmit = () => {
    console.log('handleSubmit called');
  };

  validatorListener = () => {
    let result = true;
    let childs = this.form.current.childs;
    console.log(childs);
    childs.forEach((child) => {
      if (!child.isValid()) {
        result = false;
      }
    });
    console.log('result: ', result);
    this.setState({isValidated: result})
  }

  render() {
    const { formData, isValidated } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card} aria-labelledby="form-dialog-title">
          <CardContent>
            <ValidatorForm ref={this.form} onSubmit={this.handleSubmit}>

              <Typography variant="title" gutterBottom color="primary">
                Change password
              </Typography>

              <TextValidator
                floatingLabelText="Current password"
                required
                onChange={this.handleChange}
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                className={classes.textField}
                validators={['required']}
                errorMessages={['This field is required']}
                fullWidth
                validatorListener={this.validatorListener}
              />

              <TextValidator
                floatingLabelText="New password"
                required
                onChange={this.handleChange}
                type="password"
                className={classes.textField}
                name="newPassword"
                value={formData.newPassword}
                validators={['required', 'matchRegexp:^.{8,}$']}
                errorMessages={['This field is required', 'Password must be at least 8 characters']}
                fullWidth
                validatorListener={this.validatorListener}
              />

              <TextValidator
                floatingLabelText="Confirm password"
                onChange={this.handleChange}
                required
                name="confirmPassword"
                type="password"
                className={classes.textField}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'This field is required']}
                value={formData.confirmPassword}
                fullWidth
                validatorListener={this.validatorListener}
              />

              <div className={classes.actionForm}>
                <div>
                  {this.state.errorMessage && (
                    <Typography color="error">
                      {this.state.errorMessage}
                    </Typography>
                  )}
                </div>
                <div>
                  <Button color="primary" type="submit" disabled={!isValidated}>
                    Submit
                  </Button>
                </div>
              </div>
            </ValidatorForm>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ChangePassTest);
