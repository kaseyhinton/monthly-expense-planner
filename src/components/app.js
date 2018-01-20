import {h, Component} from 'preact';
import {Router} from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from './header';
import Home from '../routes/home';

import {Provider} from 'unistore/preact'
import store from '../store';
import Helmet from 'preact-helmet';

function getAdd(url, cb, props) {
  return System
    .import ('../routes/add')
    .then(module => module.default);
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Helmet
            link={[
            {
              rel: "stylesheet",
              href: "//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"
            }, {
              rel: "stylesheet",
              href: "//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
            }
          ]}
            style={[
            {
              type: "text/css",
              cssText: "html, body { height: 100%; width: 100%; padding: 0; margin: 0; background: #FAFAFA; font-family: 'Roboto', sans-serif !important; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } * { box-sizing: border-box; user-select: none; } #app { height: 100%; } .button { float: right; }"
            }, {
              type: "text/css",
              cssText: ".header { position: fixed; left: 0; top: 0; width: 100%; height: 55px; background: #9b4dca; color: #FFF; padding: 0 16px; } .header h4 { float: left; line-height: 55px; } .header nav { float: right; } .header nav a { line-height: 55px; padding: 20px; text-align: center; color: #fff; } .header nav a.active { background-color: #FAFAFA; color: #424242; }"
            }, {
              type: "text/css",
              cssText: "svg { fill: #757575; cursor: pointer; transition: .2s ease; } svg:hover { fill: #444; }"
            }, {
              type: "text/css",
              cssText: ".route { padding: 70px 20px; min-height: 100%; width: 100%; } "
            }
          ]}/>
          <Header/>
          <Router onChange={this.handleRoute}>
            <Home path="/"/>
            <AsyncRoute path="/add" getComponent={getAdd}/>
          </Router>
        </div>
      </Provider>
    );
  }
}