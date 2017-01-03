import React from 'react';

const GuardianArticle = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{new Date(props.date).toDateString()}</h4>
      <h5>{props.content}</h5>
    </div>
  )
}

export default GuardianArticle;