import { useState,useEffect } from 'react';
import { connect } from 'react-redux';


function CartPC (props){

    
    let [total,setTotal] = useState("cost")

    // function TotalCounter(){

    //     let totolPrice = 0;
    //     console.log(props.cartInfo);
    //     for(let i = 0; i < props.cartInfo.length; i++){
    //         let price = props.cartInfo[i].price;
    //         console.log(price)
    //         let count = props.cartInfo[i].count;
    
    //         totolPrice += (price * count)
    //     }
    //     setTotal(totolPrice)
    // }
    

    useEffect(()=>{
        function TotalCounter(){

            let totolPrice = 0;
            for(let i= 0; i < props.cartInfo.length ; i++){
                let price = props.cartInfo[i].price;
                //console.log(price)
                let count = props.cartInfo[i].count;
        
                totolPrice += (price * count)
            }
            setTotal(totolPrice)
        }
        TotalCounter()
        
        return TotalCounter()

    },[props.cartInfo])
    

    return(
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
                                            <span className="cart-it-color">{a.color}</span>
                                        </div>
                                        
                                    </td>
                                    <td> 
                                        <button 
                                        onClick= {()=>{
                                            //TotalCounter()
                                            props.dispatch({type:'subtract', index : i})
                                        }} className="countbtn">-</button>
                                        {a.count}
                                        <button 
                                        onClick= {()=>{
                                            //TotalCounter()
                                            props.dispatch({type:'add', index : i})
                                        }} className="countbtn"
                                        >+</button>
                                    </td>
                                    <td>{a.price}</td>
                                    <td>{a.price * a.count}</td>
                                </tr>
                            )
                        })
                        :null
                    }
                    
                </tbody>
            </table>
            <section id="counter">
                <div className="counter-inner">
                    <div className="counter-box">
                        <div>총 합계</div>
                        <div className="total">{total}원</div>
                    </div>
                    
                </div>
                
            </section>
        </div>
    )
}


function takeCart (state){
    return{
        cartInfo : state.UserArray
    }
}


export default connect(takeCart)(CartPC);