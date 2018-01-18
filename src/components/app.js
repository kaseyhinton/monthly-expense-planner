import {h, Component} from 'preact';
import {Router} from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home'; import Profile from
// 'async!../routes/profile';

import {Provider, connect} from 'unistore/preact'
import store from '../store';
import Helmet from 'preact-helmet';

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
              href: "//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
            }, {
              rel: "stylesheet",
              href: "//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"
            }, {
              rel: "stylesheet",
              href: "//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
            }
          ]}/>
          <Header/>
          <Router onChange={this.handleRoute}>
            <Home path="/"/>
            <Profile path="/profile/" user="me"/>
            <Profile path="/profile/:user"/>
          </Router>
        </div>
      </Provider>
    );
  }
}
