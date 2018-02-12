// ./src/components/App.jsx

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import routes from '../routes';
import Layout from './Layout';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <Layout>
        <Switch>
          {
            routes.map((route, i) => {
              const routeProps = { ...route, component: undefined };
              return (
                <Route key={i} {...routeProps} render={() =>(
                  <route.component {...this.props}/>
                )}/>
              );
            })                     
          }
        </Switch>
      </Layout>
    );
  }
}

export default App;
