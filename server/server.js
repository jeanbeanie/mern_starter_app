// ./server/server.js

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from '../src/components/Html';
import App from '../src/components/App';

const app = express();

//Serve static files from directory './client'
app.use(express.static('client'));

import {StaticRouter as Router} from 'react-router';
import { matchPath } from 'react-router-dom';
import routes from '../src/routes';

app.get('*', (req, res) => {
  const promises = [];
  const context = {};
  
  // use 'some' method to imitate <Switch> behavior of selecting only
  // the first route to match
  routes.some(route => {
    const match = matchPath(req.url, route);
    if(match){
      promises.push(route.loadInitialData(match));
    }
    return match;
  });

  if (context.url){
    // context.status was added if our custom Redirect or Status route component renders
    redirect(context.status, context.url);

  } else {
    Promise.all(promises).then( data => {
      // route specific initial data is either returned from promise or empty
      // TODO throw err on empty data!!
      const routeData = data[0] || [];

      // markup to be rendered by server with StaticRouter
      const markup =  ReactDOMServer.renderToNodeStream(
        <Router location={req.url} context={context}>
          <Html initialData={routeData}>
            <App {...routeData}  />
          </Html>
        </Router>
      );

      //render the application
      markup.pipe(res);
    });
  } 
});

export default app;
