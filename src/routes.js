// ./src/components/routes.js

import HomeContainer from './components/HomeContainer';
import NotFound from './components/NotFound';

const getSomeData = () => {
  let data = 
    {
      loadedData: 'something from db',
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
