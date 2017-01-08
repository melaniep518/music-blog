import React from 'react';
import $ from 'jquery';
import {createNewProducer} from 'formActions';


const CreateProducer = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/producers',
      type: 'POST',
      data: {
        producerName: props.producerName
      }
    });
    console.log('New producer found or created.')
  };

  function handleChange(e) {
    console.log(props.producerName);
    let name = e.target.name;
    let value = e.target.value;
    createNewProducer(name, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Producer name: <input type="text" name="producerName"  placeholder="Producer name" onChange={handleChange}/><br/>
        <input type="submit" name="createProducerSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateProducer;