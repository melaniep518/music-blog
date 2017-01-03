import React from 'react';

const GuardianArticle = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{new Date(props.date).toDateString()}</h2>
      <h3>{props.content}</h3>
    </div>
  )
}

export default GuardianArticle;