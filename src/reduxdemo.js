import React from 'react';
import * as Redux from 'redux';


let defaultState = {
  temperate: 0
};

let myReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, temperate: state.temperate + 1}
    case 'DESCREASE':
      return {...state, temperate: state.temperate - 1}
    default:
      return state;
  }
};

let reducer = Redux.combineReducers(
  {
    template: myReducer
  }
);

let store = Redux.createStore(reducer, Redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));
store.subscribe(() => {
  console.log('changed: ', store.getState());
  let str = store.getState();
  //document.getElementById('p-detail').innerHTML = JSON.stringify(str);
});

store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DESCREASE'});
store.dispatch({type: 'INCREASE'});



class ReduxDemo extends React.Component {

  componentDidMount() {
    console.log('redux demo mounted');
  }

  render() {
    return (
      <div>
        Demo redux
        sdfd
      </div>
    );
  }
}

export default ReduxDemo;
