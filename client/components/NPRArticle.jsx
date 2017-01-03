import React from 'react';

const NPRArticle = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{new Date(props.date).toDateString()}</h4>
      {props.content ? props.content.map(function(val, idx) {
        return (
          <h5 key={idx}>{val.$text}</h5>
        )
      }) : null}
    </div>
  )
}

export default NPRArticle;