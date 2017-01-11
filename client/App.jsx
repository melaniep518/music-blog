import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from 'store';

import Navbar from 'Navbar';
import Home from 'Home';
import HiddenGems from 'HiddenGems';
import TasteTests from 'TasteTests';
import SeeingSounds from 'SeeingSounds';
import NewMusic from 'NewMusic';


import {HomeContainer} from 'HomeContainer';
import {CreatePlaylistContainer} from 'CreatePlaylistContainer';
import {CreateSongContainer} from 'CreateSongContainer';
import {CreateArtistContainer} from 'CreateArtistContainer';
import {CreateGenreContainer} from 'CreateGenreContainer';
import {CreateProducerContainer} from 'CreateProducerContainer';
import {CreateAlbumContainer} from 'CreateAlbumContainer';
import {DisplayPlaylistsContainer} from 'DisplayPlaylistsContainer';

const App = (props) => {
	const {create, display} = props;
	return (
		<div>
			<div>
				<Navbar/>
				{props.children}
			</div>
			<div>
				{create}
			</div>
			<div>
				{display}
			</div>
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
				<Route path="createplaylist" components={
					{create: CreatePlaylistContainer, 
					display: DisplayPlaylistsContainer}
				}/>
				<Route path="createsong" component={CreateSongContainer}/>
				<Route path="createartist" component={CreateArtistContainer}/>
				<Route path="creategenre" component={CreateGenreContainer}/>
				<Route path="createproducer" component={CreateProducerContainer}/>
				<Route path="createalbum" component={CreateAlbumContainer}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)