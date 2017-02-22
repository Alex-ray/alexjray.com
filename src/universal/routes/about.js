import About from 'universal/components/About/About.js';

export default (store) => {
  return {
    path: '/about',
    component: About,
    childRoutes: []
  }
}
