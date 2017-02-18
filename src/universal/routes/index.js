import AppContainer from 'universal/containers/App/AppContainer.js';
import home from './home.js';

export default (store) => {
  return {
    component: AppContainer,
    childRoutes: [
      home(store)
    ]
  }
}
