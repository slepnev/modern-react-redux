import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>PageOne
      <Link to="/pageTwo">Go to pageTwo</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click me!</button>
      <Link to="/">Go to pageTwo</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pageTwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;