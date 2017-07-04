import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<Router history={browserHistory}>
//     <Route path='/' component={App} >
//         <IndexRoute component={SignIn} />
//         <Route path='sign-in' component={SignIn} />
//         <Route path='sign-up' component={SignUp} />
//     </Route>
// </Router>, document.getElementById('app'));