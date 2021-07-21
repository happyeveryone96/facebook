import React from "react";
import "./App.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Login from '../pages/Login';
import Feed from '../components/Feed';
import PostList from '../pages/PostList';

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const App = () => {
  const user = null;
  return (
    <div className="app">
      {/* {!user
        ? (
          <Login />
        )
        : ( */}
      <React.Fragment>
        <Header />
        <ConnectedRouter history={history}>
          <div className="app_body">
            <PostList />
          </div>
        </ConnectedRouter>
      </React.Fragment>
      {/* )} */}
    </div>
  );
}

export default App;
