// ./server.js

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import Html from './src/components/Html';
import App from './src/components/App';

const app = express();

//Serve static files from directory './public'
app.use(express.static('public'));

const initialData = {
  metaTitle: 'Mern Starter App',
  metaKeywords: 'MERN, Mongo, Express, React, Node',
  metaDescription: 'A simple starter using the Mern stack.',
  metaAuthor: 'Jean',
};
import {StaticRouter as Router} from 'react-router';

//Public Routes
app.use ( (req, res) => {
  const context = {};
  const markup =  ReactDOMServer.renderToNodeStream(
    <Router location={req.url} context={context}>
      <Html initialData={JSON.stringify(initialData)}>
        <App {...initialData}  />
      </Html>
    </Router>
  );
  if (context.url){
    // somewhere a `<Redirect>` was rendered
    redirect(context.status, context.url);
  } else {
    markup.pipe(res);
  }
});

//Start Node server
app.listen(3000, () => console.log('> App listening on port 3000!'));
