// indexjs
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; 
import FontAwesome from 'font-awesome/css/font-awesome.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <Router>
        <div>
          <h1>Hi World</h1>
        </div>
      </Router>
    );
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
