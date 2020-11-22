import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './category.scss';

function Bag(props){
    //onsole.log(props.bagState);

    return(
        <>
        <h2 className="cate-title">SHOSE</h2>
        <div id="container">
           {
               props.bagState.map(function(a,i){
                   //console.log(a);
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
        <div className="item-list bag">
            <Link to={'/bag/'+props.data.id }>
            <p className="item-num">{props.data.number}</p>
            <h3 className="item-title">{props.data.title}</h3>
            <img src={props.data.imgUrl[0]} alt="" width="76%"/>
            <p className="price">{props.data.price}</p>
            </Link>
        </div>
    )
}

function takeBag (state){
    //console.log(state.ShoesFn)
    return{
        bagState : state.BagFn
    }
}


export default connect(takeBag)(Bag);

