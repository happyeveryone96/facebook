import React from "react";
import "./App.css";
import Login from '../pages/Login';
import PostList from '../pages/PostList';

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const App = () => {
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
