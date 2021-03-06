import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import './category.scss';


function Shoes(props){
    //console.log(props.shoesState);

    
    return(
        <>
        <h2 className="cate-title">SHOSE</h2>
        <div id="container">
           {
               props.shoesState.map(function(a,i){
                   //console.log(a);
                   return(
                    <Item key={i} data={a} ></Item>
                   )  
               })
           }
        
        
 
        </div>
        </>
    )
}


function Item(props) {
    //console.log(props);

    const onOver = (e)=>{
       let list = e.currentTarget;
       let innerList = list.children
       let item = innerList[0].children
       //console.log(item[2])

       item[2].style.transform = 'rotateZ(30deg)'
       item[2].style.transition = '0.3s'
       
    }
    const onLeave = (e) =>{
        let list = e.currentTarget;
       let innerList = list.children
       let item = innerList[0].children
       //console.log(item[2])

       item[2].style.transform = 'rotateZ(0deg)'
       item[2].style.transition = '0.3s'
        
    }

    //let {id} = useParams;
    return(
        <div className="item-list" onMouseOver={onOver} onMouseLeave={onLeave}>
            <Link to={'/shoes/'+props.data.id }>
            <p className="item-num">{props.data.number}</p>
            <h3 className="item-title">{props.data.title}</h3>
            <img src={props.data.imgUrl[0]} alt="" width="86%" />
            <p className="price">{props.data.price}</p>
            </Link>
        </div>
    )
}

function takeShoes (state){
    return{
        shoesState : state.ShoesFn
    }
}


export default connect(takeShoes)(Shoes);

