// index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; 
import FontAwesome from 'font-awesome/css/font-awesome.css';

import Layout from './components/layout';
import HomeContainer from './components/home';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    const routes = <Route path="/" component={HomeContainer}/>;

    return(
      <Router>
        <Layout>
          {routes}
        </Layout>
      </Router>
    );
  }
}


const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
