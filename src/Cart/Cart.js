import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Cart.scss';

function Cart(props){
    

    let history = useHistory();

    return(
        <div className="gnb-container">
            <h2 className="gnb-title">장바구니</h2>

            <div className="cart-table">
                <table>
                    <thead>
                        <tr><th>상품번호</th><th>상품이름/정보</th><th>갯수</th><th>상품가격</th><th>구매가격</th></tr>
                    </thead>
                    <tbody>
                        {
                            props.cartInfo
                            ? props.cartInfo.map(function(a, i){
                                return(
                                    <tr key={i}>
                                        <td>{a.number}</td>
                                        <td>
                                            <div className="cart-main-info">
                                                <img src={a.thum} width="100px" alt=""/>
                                                <span className="cart-it-title">{a.title}</span>
                                                <span className="cart-it-size">{a.size}</span>
                                                <span className="cart-it-size">{a.color}</span>

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

            <div className="buy-action">
                <button>결제하기</button>
                <button onClick={()=>{
                    history.push('/');
                }}>홈으로 가기</button>
                
            </div>

            
            
        </div>


    )
}

function takeCart (state){
    return{
        cartInfo : state.UserArray
    }
}


export default connect(takeCart)(Cart);