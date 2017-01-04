module.exports = {
// ACTIONS:
  apiActions: 'client/actions/apiActions',
  formActions: 'client/actions/formActions',
// CONSTANTS:
  constants: 'client/constants',
  actionTypes: 'client/actions/types',
// COMPONENTS:
	Navbar: 'client/components/Navbar',
	Home: 'client/components/Home',
  HiddenGems: 'client/components/HiddenGems',
  TasteTests: 'client/components/TasteTests',
  SeeingSounds: 'client/components/SeeingSounds',
  NewMusic: 'client/components/NewMusic',
  GuardianArticle: 'client/components/GuardianArticle',
  NPRArticle: 'client/components/NPRArticle',
  CreatePlaylist: 'client/components/CreatePlaylist',
// CONTAINERS: 
  HomeContainer: 'client/containers/HomeContainer',
  CreatePlaylistContainer: 'client/containers/CreatePlaylistContainer',
// STORE:
  store: 'client/store',
// REDUCERS:
  rootReducer: 'client/reducers/rootReducers',
  apiReducer: 'client/reducers/apiReducer',
  formReducer: 'client/reducers/formReducer'
}