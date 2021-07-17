import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";
// import { history } from "./redux/configureStore";
import Feed from "./components/Feed"

import PostList from "./pages/PostList"

function App() {
  return (
    <div className="app">
      {/* <Header/> */}

      <div className="app__body">
      <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
