import React from "react";
import "./App.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Login from '../pages/Login';
import Feed from '../components/Feed';
import PostList from '../pages/PostList';

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const App = () => {
  const user = null;
  return (
    <React.Fragment className="app">
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
    // {/* 
    // {!user
    //   ? (
    //     <Login />
    //   )
    //   : (
    //     <React.Fragment>
    //       <Header />
    //       <PostList />
    //     </React.Fragment>
    //   )} */}

  );
}

export default App;
