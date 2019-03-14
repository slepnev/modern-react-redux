import React, { Component, useState } from 'react';
import axios from 'axios';

const ResourceList = (props) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
  `http://jsonplaceholder.typicode.com/${props.resource}`
    );

    setResources({ resources: response.data });
  };


  return (
    <div>
      {resources.length}
    </div>
  );
};

export default ResourceList;