import React from "react";
import "../App.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Login from '../pages/Login';

const App = () => {
  const user = null;
  return (
    <div className="app">
      {!user
        ? (
          <Login />
        )
        : (
          <React.Fragment>
            <Header />
            <div className="app_body">
              <Sidebar />
              <div>Feed</div>
              <Widgets />
            </div>
          </React.Fragment>
        )}
    </div>
  );
}

export default App;
