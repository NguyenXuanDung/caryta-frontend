import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class TabTest extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Information" />
            <Tab label="Email history" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
        {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    );
  }
}

export default TabTest;