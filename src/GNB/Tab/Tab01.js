import React from 'react';


function TabBox01 (){
    return(
        <div id="tab01" >
            <div className="serv01">
                <div className="title">CUSTOMER CENTER</div>
                <div className="sub">
                    <p><b>평일 9:00 ~ 18:00</b><br/> (토,일요일 및 공휴일 휴무)</p>
                    <p><b>FILA 대표번호 :</b> 1577-3472</p>
                    <button>문의하기</button>
                </div>
            </div>
            <div className="serv02">
                <div className="title">교환 및 반품 주소</div>
                <div className="sub">
                    <p>부천시 송내대로 30번길 13 CJ 대한통운 부천지점</p>
                    <p>문의사항은 고객센터(1577-6429) 및 1:1 문의주시기 바랍니다.</p>
                </div>
            </div>
            
        </div>
    )
}
export default TabBox01;