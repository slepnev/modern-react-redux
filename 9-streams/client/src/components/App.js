import React from 'react';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" render={() => <StreamCreate/>} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/show/:id" component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;