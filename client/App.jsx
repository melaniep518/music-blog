import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from 'store';

// make alias
import Navbar from 'Navbar';
import Home from 'Home';
import {HomeContainer} from 'HomeContainer';
import HiddenGems from 'HiddenGems';
import TasteTests from 'TasteTests';
import SeeingSounds from 'SeeingSounds';
import NewMusic from 'NewMusic';

const App = (props) => {
	// console.log(props)
		return (
			<div>
				<Navbar/>
				{props.children}
			</div>
		)	
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={HomeContainer}/>
				<Route path="tastetests" component={TasteTests}/>
				<Route path="seeingsounds" component={SeeingSounds}/>
				<Route path="hiddengems" component={HiddenGems}/>
				<Route path="newmusic" component={NewMusic}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)