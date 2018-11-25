import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import { tabState } from "./reducers/tabState";
import Tabs from "./components/Tabs";
import Bedroom from "./containers/Bedroom";
import Kitchen from "./containers/Kitchen";
import DinningRoom from "./containers/DinningRoom";
import Office from "./containers/Office";
import "./App.scss";

const middlewares = [createLogger({ collapsed: false, timestamp: false })];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  tabState,
  composeEnhancers(applyMiddleware(...middlewares))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>React Redux Tab Control Example</h1>
          <div className="tab-components">
            <Tabs>
              <div label="Bedroom">
                <Bedroom />
              </div>
              <div label="Kitchen">
                <Kitchen />
              </div>
              <div label="DinningRoom">
                <DinningRoom />
              </div>
              <div label="Office">
                <Office />
              </div>
            </Tabs>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
