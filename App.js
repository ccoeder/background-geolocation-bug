/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Products from "./src/containers/Products";
import LocationTracking from "./src/containers/LocationTracking";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Products />
        <LocationTracking />
      </Provider>
    );
  }
}
