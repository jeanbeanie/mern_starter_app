// ./src/components/App.jsx

import React from 'react';
import {matchPath, Route, Switch} from 'react-router-dom';

import routes from '../routes';
import Layout from './Layout';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  renderRoute(){
    return( 
      <Switch>
        {  
          routes.map((route, i) => {
            const routeProps = { ...route, component: undefined };
            const childProps = {...this.props};

            return (
              <Route key={i} {...routeProps} render={() =>(
                <route.component {...route.loadInitialData()}/>
              )}/>
            );
          })                     
        }
      </Switch>
    );
  }

  render(){
    return(
      <Layout>
        {this.renderRoute()}
      </Layout>
    );
  }
}

export default App;
