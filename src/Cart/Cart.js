import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Cart.scss';

function Cart(props){
    

    let history = useHistory();
    //console.log(props.cartInfo)
    let [device, setDevice] = useState('false');

    useEffect(()=>{
        const view1024 = window.matchMedia("(max-width:1024px)")
        const checkDevice = ()=>{
            if(view1024.matches){
                console.log("mobile")
                setDevice(false)
            }else{
                console.log("pc")
                setDevice(true)
            }
        }
        checkDevice();
        window.addEventListener('load',checkDevice)
        window.addEventListener('resize',checkDevice)
        return ()=>{
            window.removeEventListener('load',checkDevice)
            window.removeEventListener('resize',checkDevice)
        }
    },[])

    return(
        <div className="cart-container">
            <h2 className="cart-title">장바구니</h2>


            <div className="cart-cont-wrap">
                {
                    device
                    ? <CartPC cartData={props.cartInfo}></CartPC>
                    : <CartMobile cartData={props.cartInfo}></CartMobile>
                    
                }
                
            </div>
            

            <div className="buy-action">
                <button>결제하기</button>
                <button onClick={()=>{
                    history.push('/');
                }}>홈으로 가기</button>
                
            </div>

            
            
        </div>


    )
}


function CartPC (props){
    return(
        <div className="cart-table">
                    <table>
                        <thead>
                            <tr><th>상품번호</th><th>상품이름/정보</th><th>갯수</th><th>상품가격</th><th>구매가격</th></tr>
                        </thead> 
                        <tbody>
                            {
                                props.cartData
                                ? props.cartData.map(function(a, i){
                                    return(
                                        <tr key={i}>
                                            <td>{a.number}</td>
                                            <td>
                                                <div className="cart-main-info">
                                                    <img src={a.thum} width="100px" alt=""/>
                                                    <span className="cart-it-title">{a.title}</span>
                                                    <span className="cart-it-size">{a.size}</span>
                                                    <span className="cart-it-color">{a.color}</span>
                                                </div>
                                                
                                            </td>
                                            <td>
                                                <button className="countbtn"
                                                onClick={()=>{
                                                    props.dispatch({type:'subtract',index:i})
                                                }}>-</button>
                                                {a.count}
                                                <button className="countbtn"
                                                onClick={()=>{
                                                    props.dispatch({type:'add',index:i})
                                                }}
                                                >+</button>
                                            </td>
                                            <td>{a.price}</td>
                                            <td>{a.price}</td>
                                        </tr>
                                    )
                                })
                                :null
                            }
                            
                        </tbody>
                    </table>
                </div>
    )
}

function CartMobile(props){
    return(
        <div className="cart-m-content">
            {
                props.cartData.map(function(a,i){
                    return(
                        <div className="cart-list" key={i}>
                            <div className="cart-image">
                                <img src={a.thum} alt=""/>
                            </div>
                            <div className="cart-m-info">
                                <p className="title">{a.title}</p>
                                <p className="size">사이즈 <span>{a.size}</span></p>
                                <p className="color">색상 <span>{a.color}</span></p>
                                <p className="price">가격 <span>{a.price}</span></p>
                                <div className="cart-select">
                                    <button>삭제</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

function takeCart (state){
    return{
        cartInfo : state.UserArray
    }
}


export default connect(takeCart)(Cart);