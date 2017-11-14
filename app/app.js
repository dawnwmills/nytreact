import React = require('react');
import ReactDOM = require('react-dom');
import routes from './routes';
import Main from './components/Main.jsx';

const reactRouter = require("react-router");
const hashHistory = reactRouter.hashHistory;
const Router = reactRouter.Router;


ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'))
	