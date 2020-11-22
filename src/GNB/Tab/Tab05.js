import React from 'react';
import storeData from '../../data/store'


let storeMake = storeData



//대리점 개설문의
function TabBox05 (){
    return(
        <div id="tab05">
            <p className="text01">대리점 개설시 필요한 정보를 안내해 드립니다.</p>
            <p className="text02">대리점 OPEN은 상권 분석을 통해 연단위 게획에 따라 시행하고 있습니다. 자세한 문의는 전화 상담을 해 주세요.</p>
            <button className="store-alert">대리점 개설 절차 및 유의사항</button>
               {
                   storeMake.map(function(a,i){
                       return(
                           <StoreList store={a} key={i}/>
                       )
                   })
               }
        </div>
    )
}


function StoreList (props){
    //console.log(props.store)
    return (
        <div className="storeWrap">
            <div className="store">
                <div>{props.store.title}</div>
            </div>
            <div className="storeInfo">
                <table>
                    <tbody>
                        <tr>
                            <th>매장조건</th>
                            <td>{props.store.condition}</td>
                        </tr>
                        <tr>
                            <th>담보조건</th>
                            <td>{props.store.money}</td>
                        </tr>
                        <tr>
                            <th>인테리어</th>
                            <td>{props.store.interior}</td>
                        </tr>
                        <tr>
                            <th>기타</th>
                            <td>{props.store.ext}</td>
                        </tr>
                        <tr>
                            <th>상담문의</th>
                            <td>{props.store.consult}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>

        </div>

    )
}
export default TabBox05;