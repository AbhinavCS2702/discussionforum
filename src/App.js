import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import React from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is', authUser);
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/login' element={<Login/>}>
            
          </Route>
          <Route path='/'>
            {/* <Header/>
            <Home/> */}

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
