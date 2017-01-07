import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'App';
import {HomeContainer} from 'HomeContainer';
import HiddenGems from 'HiddenGems';
import TasteTests from 'TasteTests';
import SeeingSounds from 'SeeingSounds';
import NewMusic from 'NewMusic';
import {CreatePlaylistContainer} from 'CreatePlaylistContainer';
import {CreateSongContainer} from 'CreateSongContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer}/>
    <Route path="tastetests" component={TasteTests}/>
    <Route path="seeingsounds" component={SeeingSounds}/>
    <Route path="hiddengems" component={HiddenGems}/>
    <Route path="newmusic" component={NewMusic}/>
    <Route path="createplaylist" component={CreatePlaylistContainer}/>
    <Route path="createsong" component={CreateSongContainer}/>
  </Route>
  );