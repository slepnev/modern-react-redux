// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click Me!';
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <div>
        <input type="text" name="name" id="name"/>
        <button style={style}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Take the react component and shwo it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);