import React from 'react';
import { Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import Shoes from './Category/Shoes';
import Bag from './Category/Bag';
import Cap from './Category/Cap';
import Login from './GNB/Login';
import Service from './GNB/Service';
import ShoesPage from './Category/Shoes_page';
import BagPage from './Category/Bag_page';
import CapPage from './Category/cap_page';


function App(props) {
  let shoesProps = props.shoesState;
  let bagProps = props.bagState;
  let capProps = props.capState;
  //console.log(bagProps);

  return (
    <div className="App">
      {
        /*redux, router, sass, react-slick, jquery */
      }
      <Header></Header>
      

      <Switch>
        <Route exact={true} path="/" component={Main} />
        

        <Route exact={true} path="/shoes" >
          <Shoes></Shoes>
        </Route>

       
        <Route exact={true} path="/shoes/:id" render={(props) => (<ShoesPage data={shoesProps}{...props}/>)}/>

        <Route exact={true} path="/bag/:id" render={(props) => (<BagPage data={bagProps}{...props}/>)}/>

        <Route exact={true} path="/cap/:id" render={(props) => (<CapPage data={capProps}{...props}/>)}/>
        
      

        <Route path="/bag" component={Bag}/>
        

        <Route path="/cap" component={Cap}/>
       

        <Route path="/cart" component={Cart}/>

        <Route path="/login" component={Login}/>

        <Route path="/service" component={Service}/>
        

      </Switch>

      <Footer></Footer>

    </div>
  );
}

function takeData (state){
  return{
      shoesState : state.ShoesFn,
      bagState : state.BagFn,
      capState : state.CapFn
  }
}

// function takeData ({ShoesFn,BagFn,CapFn}){
//   return{
//     ShoesFn, BagFn, CapFn
//   }
// }




export default connect(takeData)(App);
