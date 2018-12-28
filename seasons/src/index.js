import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//
//   return (
//     <div>Latitude: </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, lon: null, errorMessage: '' };
  }

  componentDidMount() {
    console.log('My component was rendered to the screen');

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState
        this.setState({ lat: position.coords.latitude });

        // We did not
        // this.state.lat = position.coords.latitude;
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just update');
  }

  // React says  we have to define render
  render() {
    console.log('render');
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>Latitude: {this.state.lat}</div>
      );
    } else {
      return (
        <div>Loading!</div>
      );
    }
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));