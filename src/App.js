import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Payment from "./Components/SubComponents/Payment";
import colors from 'colors';
import Register from "./Components/Register";
import Sell from "./Components/Sell";
import Error from "./Components/Error";
import YoungAdult from "./Ads/YoungAdult";
import Market from "./Components/Market";


function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser =>{
  //     console.log(`The user is`,authUser);
  //     if(authUser){
  //       //the user just loggedin or was logged in
  //       store.dispatch({
  //         type : SET_USER,
  //         user : authUser,
  //       })
  //     }else{
  //       //the user is logged out
  //       store.dispatch({
  //         type : SET_USER,
  //         user : null,
  //       })
  //     }
  //   })
  // }, [])
  return (
    <Router>
      {
        console.log(colors.white(
          '\n' +
          'Hi there, fellow developer! Thanks for visiting.\n' +
          'Just like you , I want to create worldwide solutions.\n\n' +
          'My motive is to help Indian Farmers by                 ("\`-’-/").___..--’’"\`-._\n' +
          'taking away all the stress they might face              \`6_ 6  )   \`-.  (     ).\`-.__.‘)\n' +
          'in a physical mandi.                                    (_Y_.)’  ._   )  \`._ \`. \`\`-..-’\n' +
          'In case you want to support me just DM me              _..\`--’_..-_/  /--’_.’ ,’\n' +
          'on my LinkedIn here:                                  (il),-’‘  (li),’  ((!.-‘\n\n' +
          ' https://www.linkedin.com/in/sandeep-chander-62a638167/ \n\n'+
          'Send me any kind of information/advice you might have\n\n'+
          'Take Care and have a nice day\n\n'+
          'I know this is not much but it is honest work ;)\n' +
          '— Sandeep\n'
        ))
      }
        <div className="App">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/sell' >
              <Sell/>
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
            <Route path='/soldItems' >
              <Header />
              <Error />
              <Footer />
            </Route>
            <Route path='/market' >
              <Header />
              <Market />
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
