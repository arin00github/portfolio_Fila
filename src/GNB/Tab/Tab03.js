import React, { useState } from 'react';
import Question from './../../data/FAQ'


function TabBox03 (){

    let [open , setOpen] = useState(0);

    const FAQList = (idx) =>{
        setOpen(idx)
    }

    const TabQuest = {
        0 : <MakeList01 data={Question}/>, 1 : <MakeList02 data={Question}/>, 2 : <MakeList03 data={Question}/>, 3 : <MakeList04 data={Question}/>, 4 : <MakeList05 data={Question}/>,
    }


    return(
        <div id="tab03">
            <ul className="questMenu">
                <li onClick={()=>{FAQList(0)}}>회원가입/변경/탈퇴</li>
                <li onClick={()=>{FAQList(1)}}>취소/교환/반품</li>
                <li onClick={()=>{FAQList(2)}}>주문/결제</li>
                <li onClick={()=>{FAQList(3)}}>배송관련</li>
                <li onClick={()=>{FAQList(4)}}>멤버쉽</li>
            </ul>
            { TabQuest[open] }
        </div>
    )
}

function MakeList01 (props){
    return(
        <ul className="questWrap">
        {
            props.data[0].map(function(a,i){
                return(<li key={i}>{a}</li>) })
        }
        </ul>
    )
}
function MakeList02 (props){
    return(
        <ul className="questWrap">
        {
            props.data[1].map(function(a,i){
                return(<li key={i}>{a}</li>) })
        }
        </ul>
    )
}
function MakeList03 (props){
    return(
        <ul className="questWrap">
        {
            props.data[2].map(function(a,i){
                return(<li key={i}>{a}</li>) 
            })
        }
        </ul>
    )
}
function MakeList04 (props){
    return(
        <ul className="questWrap">
        {
            props.data[3].map(function(a,i){
                return(<li key={i}>{a}</li>) 
            })
        }
        </ul>
    )
}
function MakeList05 (props){
    return(
        <ul className="questWrap">
        {
            props.data[4].map(function(a,i){
                return(<li key={i}>{a}</li>) 
            })
        }
        </ul>
    )
}

export default TabBox03;