import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import {Link, useHistory, useParams} from 'react-router-dom';
import './ItemPage.scss';


function ShoesPage(props){
    

    let [value , setValue] = useState("")
    let basket = useRef();

    let {id}= useParams();
    //console.log(props)
    let history = useHistory();
    //count버튼 변수
    

   //오브젝트가 추가 되는 배열
   //기존배열과 나중배열이 합쳐져야 한다. 

   



   const imgRef = useRef();
    const ChangeImg = (e) => {
        let url = e.target.getAttribute('src');
        let main = imgRef.current;
        main.setAttribute('src', url);
    } 
    
    

    return(
        <>
        <div id="container" className="unit-page">
            <div className="mainInfo">
                <div className="item-img">
                    <div className="bg-circle"></div>
                    <img src={props.data[id].imgUrl[0]} alt={props.data[id].title} className="image"/>
                </div>
                <div className="item-info">
                    <p className="number">{props.data[id].number}</p>
                    <h2 className="title">{props.data[id].title}</h2>
                    <h3>가격<span className="price">{props.data[id].price}</span>  원</h3>
                    
                    
                    <div className="sizeWrap">
                        {
                            props.data[id].size.map(function(a, i){
                                return(
                                <button onClick={()=>{
                                    setValue(a)
                                }} key={i} className="sizebtn">{a}</button>
                                )
                            })
                        }
                    </div>
                    <ul className="item-color"> 
                        <p>색상</p>
                        {
                            props.data[id].diff
                            ? props.data[id].diff.map(function(a,i){
                                return(
                                    <li key={i}><Link to={'/shoes/'+a} ><img src={props.data[a].imgUrl[0]} alt="link"/></Link></li>
                                )
                            })
                            : null
                        }
                    </ul>
                    <div className="selectItem" ref={basket}>
                        <div className="box-list">
                            <div><img src={props.data[id].imgUrl[0]} width="80px" alt=""/></div>
                            <div className="box-in-info">
                                <div>{props.data[id].title}</div>
                                <div>
                                    <div>{props.data[id].color}</div>
                                    <div>{value}</div>
                                </div>
                                {/* <div>{props.data[id].count}개</div> */}
                            </div>
                        </div>
                    
                    </div>
                    <div className="btn-buy">
                        <button type="button">구매하기</button>
                        <button type="button" onClick={()=>{
                            history.push('/cart');
                            props.dispatch({type:'select', payload:
                            {
                                thum : props.data[id].imgUrl[0],
                                title : props.data[id].title,
                                color : props.data[id].color,
                                count : props.data[id].count,
                                number : props.data[id].number,
                                size : value,
                                price : props.data[id].price,
                            }
                        })}}>장바구니넣기</button>
                    </div>
                </div>
            </div>

            <div className="recomend"></div>
            <div className="intro">
                <p className="title">{props.data[id].title}</p>
                <p className="desc">{props.data[id].desc}</p>
            </div>
            <div className="display">
                <div className="display-inner">
                    <div className="mag-img">
                        <img id="mainImg" src={props.data[id].imgUrl[0]} ref={imgRef} alt={props.data[id].title}/>
                    </div>
                    <ul className="cut-list">
                        {props.data[id].imgUrl.map(function(a, i){
                            return(
                                <li key={i} className="cut-indicate"><img src={a} onClick={ChangeImg} alt=""/></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="information">
                <table className="table-info">
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <td>{props.data[id].title}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>제품소재</th>
                            <td>{props.data[id].material}</td>
                        </tr>
                        <tr>
                            <th>색상</th>
                            <td>{props.data[id].color}</td>
                        </tr>
                        <tr>
                            <th>사이즈</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>제조국</th>
                            <td>{props.data[id].country_Manufacture}</td>
                        </tr>
                        <tr>
                            <th>제조사</th>
                            <td>휠라코리아</td>
                        </tr>
                        <tr>
                            <th>세탁방법 및 취급시 주의사항</th>
                            <td>상세 취급방법 제품라벨 참조</td>
                        </tr>
                        <tr>
                            <th>품질보증기준</th>
                            <td>관련법 및 소비자 분쟁해결기준에 따름</td>
                        </tr>
                        <tr>
                            <th>A/S 책임자와 전화번호</th>
                            <td>휠라코리아㈜ 온라인 고객센터 1577-3472</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            
        </div>
        
        </>


    )
}

// 컴포넌트


//Redux 데이터 받는 함수
function toCart(state){
    
    return{
        fromCart : state.UserArray
    }
}

export default connect(toCart)(ShoesPage);