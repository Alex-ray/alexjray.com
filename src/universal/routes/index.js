// containers
import AppContainer from 'universal/containers/App/AppContainer.js';

// Routes
import home           from './home.js';
import about          from './about.js';
import buffer         from './buffer.js';
import redInteractive from './redInteractive.js';
import addvocate      from './addvocate.js';
import ck12           from './ck12.js';
import stash          from './stash.js';

export default (store) => {
  return {
    component: AppContainer,
    onEnter: (prevState, nextState) => {
      if (window) {
        setTimeout(() => {window.scrollTo(0, 0)}, 0);
      }
    },
    onChange: (prevState, nextState) => {
      console.log('window scroll')
      if (window) {
        window.scrollTo(0, 0);
      }
    },
    childRoutes: [
      home(store),
      about(store),
      buffer(store),
      redInteractive(store),
      addvocate(store),
      ck12(store),
      stash(store)
    ]
  }
}
