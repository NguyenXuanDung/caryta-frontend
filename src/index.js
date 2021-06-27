import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Login from './login.js';
import Topbar from './topbar.js';
import DialogTest from './dialogTest';
import ValidatorTest from './validatorTest';
import ChangePassTest from './changePassTest';
import SelectMultiTest from './selectMultiTest';
import TabTest from './tabTest';
import GetLink from './getLink';
import ReduxDemo from './reduxdemo';
import Note from './note';
import A12 from './a12';
import HookExample from './hookExample'
import '@com.mgmtp.a12/plasma-design/dist/plasma.css';

class Dung extends React.Component {

    constructor(props) {
        super(props);
        console.log('props: ', props);
    }

    render() {
        return (
          <MuiThemeProvider>
            <Router>
            <div>
            <Topbar/>
            <ul>
                <li><Link to={'/Home'}>Home</Link></li>
                <li><Link to={'/Login'}>Login</Link></li>
                <li><Link to={'/Dialog'}>Dialog Test</Link></li>
                <li><Link to={'/Validator'}>Validator Test</Link></li>
                <li><Link to={'/changePassTest'}>changePassTest</Link></li>
                <li><Link to={'/selectMultiTest'}>selectMultiTest</Link></li>
                <li><Link to={'/tabTest'}>tabTest</Link></li>
                <li><Link to={'/a12'}>A12</Link></li>
                <li><Link to={'/redux'}>Redux</Link></li>
                <li><Link to={'/note'}>Note</Link></li>
	              <li><Link to={'/getLink'}>GetLink</Link></li>
	              <li><Link to={'/hookExample'}>HookExample</Link></li>
            </ul>

            <hr />

            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Dialog' component={DialogTest} />
                <Route exact path='/Validator' component={ValidatorTest} />
                <Route exact path='/changePassTest' component={ChangePassTest} />
                <Route exact path='/selectMultiTest' component={SelectMultiTest} />
                <Route exact path='/tabTest' component={TabTest} />
                <Route exact path='/a12' component={A12} />
                <Route exact path='/redux' component={ReduxDemo} />
                <Route exact path='/note' component={Note} />
	              <Route exact path='/getLink' component={GetLink} />
	              <Route exact path='/hookExample' component={HookExample} />
            </Switch>
            </div>
            </Router>
          </MuiThemeProvider>);

    }
}

ReactDOM.render(
    <Dung/>,
    document.getElementById('root')
);



















