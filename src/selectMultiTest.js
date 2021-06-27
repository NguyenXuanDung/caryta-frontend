import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
});

const inviteeTypes = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class SelectMultiTest extends React.Component {
  state = {
    inviteeTypes: [],
  };

  handleChange = event => {
    this.setState({ inviteeTypes: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Invitee Types</InputLabel>
          <Select
            multiple
            value={this.state.inviteeTypes}
            onChange={this.handleChange}
            input={<Input id="select-multiple" />}
          >
            {inviteeTypes.map(inviteeType => (
              <MenuItem
                key={inviteeType}
                value={inviteeType}
              >
                {inviteeType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(SelectMultiTest);