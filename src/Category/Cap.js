import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './category.scss';

function Cap(props){
    //console.log(props.capState);

    return(
        <>
        <h2 className="cate-title">CAP</h2>
        <div id="container">
           {
               props.capState.map(function(a,i){
                   return(
                    <Item key={i} data={a}></Item>
                   )  
               })
           }
 
        </div>
        </>
    )
}


function Item(props) {
    //console.log(props.data)
    return(
        <div className="item-list">
            <Link to={'/cap/'+props.data.id }>
            <p className="item-num">{props.data.number}</p>
            <h3 className="item-title">{props.data.title}</h3>
            <img src={props.data.imgUrl[0]} alt="" width="70%"/>
            <p className="price">{props.data.price}</p>
            </Link>
        </div>
    )
}

function takecaps (state){
    //console.log(state.CapFn)
    return{
        capState : state.CapFn
    }
}


export default connect(takecaps)(Cap);

