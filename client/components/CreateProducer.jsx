import React from 'react';
import $ from 'jquery';

const CreateProducer = (props) => {
  return (
    <div>
      <form>
        Producer name: <input type="text" name="producerName"  placeholder="Producer name"/><br/>
        <input type="submit" name="createProducerSubmit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateProducer;