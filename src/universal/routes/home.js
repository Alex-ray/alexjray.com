import HomeContainer from 'universal/containers/Home/HomeContainer.js';

export default (store) => {
  return {
    path: '/',
    component: HomeContainer,
    childRoutes: []
  }
}
