import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const Context = createContext(null);

export class AppContextProvider extends Component {
  state = {
    appName: 'ReactApp Basics',
    description: 'A boilerplate orango.io ReactJS application',
    user: null,
  };

  setUser = user => this.setState({ user });

  render() {
    const context = {
      ...this.state,
      setUser: this.setUser,
    };

    return (
      <Context.Provider value={context}>{this.props.children}</Context.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

export default Context;
export const AppContextConsumer = Context.Consumer;
