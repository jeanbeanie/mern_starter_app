// ./src/components/App.jsx

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import HomeContainer from './HomeContainer';

import NotFound from './NotFound';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
