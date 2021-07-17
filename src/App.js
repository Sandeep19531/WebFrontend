import React, { useEffect, useRef } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/SubComponents/Payment";
import Loading from "./Components/Loading";

import Scrollbar from 'smooth-scrollbar';

function App() {
  const [state,dispatch] = useStateValue();
  const Appref = useRef(null);
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log(`The user is`,authUser);
      if(authUser){
        //the user just loggedin or was logged in
        dispatch({
          type : 'SET_USER',
          user : authUser,
        })
      }else{
        //the user is logged out
        dispatch({
          type : 'SET_USER',
          user : null,
        })
      }
    })
  }, [])
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header/>
              <CheckOut/>
              <Footer />
            </Route>
            <Route path='/payment'>
              <Header/>
              <Payment />
              <Footer />
            </Route>
            <Route path='/'>
              <Header/>
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
