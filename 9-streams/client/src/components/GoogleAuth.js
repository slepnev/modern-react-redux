import React, { Component } from 'react';

class GoogleAuth extends Component{
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '64765399693-sr3dd8q4d1euufefg4402bvli3qouold.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    );
  }
}

export default GoogleAuth;