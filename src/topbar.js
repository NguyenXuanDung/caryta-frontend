import React from 'react';

import EventBus from 'eventing-bus';

class Topbar extends React.Component {

  state = {
    name: ''
  };

  constructor(props) {
    super(props);
    EventBus.on("changedRoute", this.callback);
  }

  callback = (name) => {
    this.setState({name: name});
  };

  render() {
      return (
        <h1>{this.state.name} </h1>
      );
  }
}

export default Topbar;
