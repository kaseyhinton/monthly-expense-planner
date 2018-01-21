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
              href: "//cdn.muicss.com/mui-0.9.35/css/mui.min.css"
            }, {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Roboto"
            }
          ]}
            script={[{
              src: "//cdn.muicss.com/mui-0.9.35/js/mui.min.js",
              type: "text/javascript"
            }
          ]}
            style={[{
              type: "text/css",
              cssText: "html, body { height: 100%; width: 100%; padding: 0; margin: 0; font-family: 'Roboto', sans-serif;; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } * { box-sizing: border-box; user-select: none; } #app { height: 100%; } .link {color: #fff; padding: 0 8px;}.route { padding: 16px; width: 100%; }"
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