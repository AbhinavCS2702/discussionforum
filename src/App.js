import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import React from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {user&& <Route path="/" element={<Home />}></Route>}

          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
