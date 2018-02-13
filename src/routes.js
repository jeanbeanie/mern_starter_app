// ./src/components/routes.js

import HomeContainer from './components/HomeContainer';
import NotFound from './components/NotFound';

const loadInitialData = (props) => {
  //props should be an object
  let defaultData = 
    {
      metaTitle: 'Mern Starter App',
      metaKeywords: 'MERN, Mongo, Express, React, Node',
      metaDescription: 'A starter using the Mern stack.',
      metaAuthor: 'Jean',
    };

  return {   
    ...defaultData,
    ...props,
  };
};

// loadInitialData property is required and must return obj
const routes = [
  { path: '/',
    exact: true,
    component: HomeContainer,
    loadInitialData: () => loadInitialData(),
  },
  { component: NotFound,
    loadInitialData: () => {
      return loadInitialData({metaTitle: '404 Status'});
    }
  },
];

export default routes;
