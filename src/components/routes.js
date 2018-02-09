// ./src/components/routes.js

import HomeContainer from './HomeContainer';
import NotFound from './NotFound';

const getSomeData = () => {
  let data = 
    {
      loadedData: 'something from db',
      metaTitle: 'Home Example Title',
      otherProps: 'something else',
    };
  return data;
};

// loadInitialData property is required and must return obj
const routes = [
  { path: '/',
    exact: true,
    component: HomeContainer,
    loadInitialData: () => getSomeData(),
  },
  { component: NotFound,
    loadInitialData: () => {
      return {metaTitle: '404 Status'};
    }
  },
];

export default routes;
