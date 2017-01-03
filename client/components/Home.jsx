import React from 'react';
import $ from 'jquery';
import {guardianKey, nprKey} from 'constants';
import {displayGuardianData, displayNPRData} from 'apiActions';
import GuardianArticle from 'GuardianArticle';
import NPRArticle from 'NPRArticle';

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

    $.ajax({
      type: 'GET',
      url: 'http://api.npr.org/query?id=1106&apiKey=' + nprKey + '&format=json',
      success: function(content) {
        console.log('NPR', JSON.parse(content));
        displayNPRData(JSON.parse(content));
      }
    })
  },

  render: function() {
    console.log("NPR DATA: ", this.props.nprData.list)
    return (
      <div>
        <h1>MUSIC NEWS FROM THE GUARDIAN</h1>
          {this.props.guardianData.response ?
            this.props.guardianData.response.results.map(function(val, idx) {
              return (
                <GuardianArticle key={idx} title={val.webTitle} date={val.webPublicationDate} content={val.webUrl} />
              )
            }) : null}
        <h1>MUSIC NEWS FROM NPR</h1>
          {this.props.nprData.list ? 
            this.props.nprData.list.story.map(function(val, idx) {
              return (
                <NPRArticle key={idx} title={val.title.$text} date={val.pubDate.$text} content={val.text.paragraph}/>
              )
            }) : null}
      </div>
    )  
  }
})


export default Home;