import React from 'react';
import $ from 'jquery';
import {guardianKey, nprKey} from 'constants';
import {displayGuardianData} from 'apiActions';
import GuardianArticle from 'GuardianArticle';

const Home = React.createClass({
  componentDidMount: function() {
    $.ajax({
      // add if else statement for api key
      type: "GET",
      url: 'http://content.guardianapis.com/search?section=music&api-key=' + guardianKey,
      success: function(content) {
        console.log('THE GUARDIAN', content);
        displayGuardianData(content);
      }
    })
// Create redux action to render data
    $.ajax({
      type: 'GET',
      url: 'http://api.npr.org/query?id=1106&apiKey=' + nprKey + '&format=json',
      success: function(content) {
        console.log('NPR', JSON.parse(content))
      }
    })
  },

  render: function() {
    return (
      <div>
        <h1>YOUR MUSIC NEWS</h1>
          {this.props.guardianData.response ?
            this.props.guardianData.response.results.map(function(val, idx) {
              return (
                <GuardianArticle key={idx} title={val.webTitle} date={val.webPublicationDate} content={val.webUrl} />
              )
            }) : null}
      </div>
    )  
  }
})


export default Home;