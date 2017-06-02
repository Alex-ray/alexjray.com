import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';
import DocumentTitle from 'react-document-title';

class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    renderProps: PropTypes.object
  }

  render () {
    const PROD = process.env.NODE_ENV === 'production';

    const {
      store,
      assets,
      renderProps
    } = this.props;

    const {
      manifest,
      app,
      vendor
    } = assets || {};

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;

    /**
     * Provider: Makes the Redux store available to the connect() calls in the component hierarchy below.
     * Normally, you can’t use connect() without wrapping the root component in <Provider>.
     * see https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
     *
     * RouterContext: A <RouterContext> renders the component tree for a given router state.
     * Its used by <Router> but also useful for server rendering and integrating in brownfield development.
     * see https://github.com/reactjs/react-router/blob/master/docs/API.md#routercontext
     **/
    const root = PROD && renderToString(
      <Provider store={store}>
        <DocumentTitle>
          <RouterContext {...renderProps}/>
        </DocumentTitle>
      </Provider>
    );

    let title = DocumentTitle.rewind();

    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <meta name="viewport" content="width=device-width" />
         <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Averia+Serif+Libre:300,400,400i,700|Poppins:300,400,500" rel="stylesheet" />
         {PROD && <link rel="stylesheet" href={app.css} type="text/css" />}
         <title>{title || 'Alexander J Ray'}</title>
       </head>
       <body>
         <script dangerouslySetInnerHTML={{__html: initialState}} />
          {PROD ? <div id="root" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="root"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {PROD && <script src={vendor.js}/>}
         <script src={PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
