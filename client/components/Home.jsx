import React from 'react';
import $ from 'jquery';
import {guardianKey} from 'constants';
import {displayGuardianData} from 'apiActions';

const Home = React.createClass({
  componentDidMount: function() {
    console.log('mounted')
    $.ajax({
      // add if else statement for api key
      url: 'http://content.guardianapis.com/search?section=music&api-key=' + guardianKey,
      type: "GET",
      success: function(content) {
        console.log(content);
        displayGuardianData(content);
      }
    })
  },

  render: function() {
    console.log('PROPS:', this.props);
    return (
      <h1>This is the home page.</h1>
    )  
  }
})


export default Home;