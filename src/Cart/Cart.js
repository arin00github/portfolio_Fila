import React, {useEffect, useState } from 'react';
//import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Cart.scss';
import CartPC from './Cart_pc';
import CartMobile from './Cart_m';

function Cart(props){

    
    let history = useHistory();
    console.log(props.cartInfo)
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
                    ? <CartPC ></CartPC>
                    : <CartMobile></CartMobile>
                    
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







export default Cart;