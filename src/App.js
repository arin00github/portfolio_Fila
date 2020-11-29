import React, { lazy, Suspense } from 'react';
import { Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Loading from './Component/Loading';
///import Shoes from './Category/Shoes';
//import Bag from './Category/Bag';
//import Cap from './Category/Cap';
//import Login from './GNB/Login';
//import Service from './GNB/Service';
//import ShoesPage from './Category/Shoes_page';
//import BagPage from './Category/Bag_page';
//import CapPage from './Category/cap_page';


let Main = lazy(()=>{return import('./Main/Main')})
let Cart = lazy(()=>{return import('./Cart/Cart')})
let Shoes = lazy(()=>{return import('./Category/Shoes')})
let Bag = lazy(()=>{return import('./Category/Bag')})
let Cap = lazy(()=>{return import('./Category/Cap')})
let Login = lazy(()=>{return import('./GNB/Login')})
let Service = lazy(()=>{return import('./GNB/Service')})
let ShoesPage = lazy(()=>{return import('./Category/Shoes_page')})
let BagPage = lazy(()=>{return import('./Category/Bag_page')})
let CapPage = lazy(()=>{return import('./Category/cap_page')})




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
      
    <Suspense fallback={<Loading></Loading>}>
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
      </Suspense>
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
