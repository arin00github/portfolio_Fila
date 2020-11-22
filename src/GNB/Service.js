import React,{ useEffect, useState} from 'react';
import TabBox01 from './Tab/Tab01';
import TabBox02 from './Tab/Tab02';
import TabBox03 from './Tab/Tab03';
import TabBox04 from './Tab/Tab04';
import TabBox05 from './Tab/Tab05';
import './gnb.scss';

function Service (){







let [show, setShow ]= useState(0);

const ClickNav = (idx)=>{ setShow(idx);}

const tabObject = {
    0 :<TabBox01 />, 1:<TabBox02 />, 2:<TabBox03 />,3:<TabBox04 />,4:<TabBox05 />
}

useEffect(()=>{
   


},[])


    return(
        <div className="gnb-container">
            <h2 className="gnb-title">고객센터</h2>

            <ul className="serv-nav">
                <li onClick={()=>{ClickNav(0)}}>고객센터</li>
                <li onClick={()=>{ClickNav(1)}}>공지사항</li>
                <li onClick={()=>{ClickNav(2)}}>FQA</li>
                <li onClick={()=>{ClickNav(3)}}>매장안내</li>
                <li onClick={()=>{ClickNav(4)}}>대리점 개설문의</li>
            </ul>
            <div className="tab-area" >
                { tabObject[show] }
            </div>
            


        </div>
    )


}

export default Service;