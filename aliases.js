module.exports = {
// ACTIONS:
  apiActions: 'client/actions/apiActions',
  formActions: 'client/actions/formActions',
// CONSTANTS:
  constants: 'client/constants',
  actionTypes: 'client/actions/types',
// FRONT END ROUTES:
  Routes: 'client/Routes',
// COMPONENTS:
  App: 'client/App',
	Navbar: 'client/components/Navbar',
	Home: 'client/components/Home',
  HiddenGems: 'client/components/HiddenGems',
  TasteTests: 'client/components/TasteTests',
  SeeingSounds: 'client/components/SeeingSounds',
  NewMusic: 'client/components/NewMusic',
  GuardianArticle: 'client/components/GuardianArticle',
  NPRArticle: 'client/components/NPRArticle',
  CreatePlaylist: 'client/components/CreatePlaylist',
  CreateSong: 'client/components/CreateSong',
  CreateArtist: 'client/components/CreateArtist',
  CreateGenre: 'client/components/CreateGenre',
  CreateProducer: 'client/components/CreateProducer',
  CreateAlbum: 'client/components/CreateProject',
// CONTAINERS: 
  HomeContainer: 'client/containers/HomeContainer',
  CreatePlaylistContainer: 'client/containers/CreatePlaylistContainer',
  CreateSongContainer: 'client/containers/CreateSongContainer',
  CreateArtistContainer: 'client/containers/CreateArtistContainer',
  CreateGenreContainer: 'client/containers/CreateGenreContainer',
// STORE:
  store: 'client/store',
// REDUCERS:
  rootReducer: 'client/reducers/rootReducers',
  apiReducer: 'client/reducers/apiReducer',
  formReducer: 'client/reducers/formReducer'
}