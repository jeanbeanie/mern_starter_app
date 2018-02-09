// ./server.js

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from './src/components/Html';
import App from './src/components/App';

const app = express();

//Serve static files from directory './public'
app.use(express.static('public'));


import {StaticRouter as Router} from 'react-router';
import { matchPath } from 'react-router-dom';
import routes from './src/components/routes';
//Public Routes

app.use ( (req, res) => {
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
      const routeData = data[0] || [];

      // general app specific initial data, overwritten by routeData where possible
      const initialData = {
        metaTitle: routeData.metaTitle || 'Mern Starter App',
        metaKeywords: routeData.metaKeywords || 'MERN, Mongo, Express, React, Node',
        metaDescription: routeData.metaDescription || 'A starter using the Mern stack.',
        metaAuthor: 'Jean',
      };

      // markup to be rendered by server with StaticRouter
      const markup =  ReactDOMServer.renderToNodeStream(
        <Router location={req.url} context={context}>
          <Html initialData={initialData}>
            <App {...routeData}  />
          </Html>
        </Router>
      );

      //render the application
      markup.pipe(res);
    });
  } 
// start up the ol' Node server
}).listen(3000, () => console.log('> App listening on port 3000!'));
