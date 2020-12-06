import React from 'react';
import './footer.scss';

function Footer(){
    return(
        <div id="footer">
            <div className="ft-inner">
                <ul className="ft-list">
                    <li>공지사항</li>
                    <li>매장안내</li> 
                    <li>통합회원 이용약관</li>
                    <li>개인정보 처리방침</li>
                    <li>About Fila</li>
                    <li>Recruit</li>
                </ul>
                <div className="ft-info">
                    <h4>(주)휠라코리아 사업자정보</h4>
                    <div className="company-info">
                        <ul>
                            <li>서울시 강동구 천호대로 1077 이스트센트럴타원 16층</li>
                            <li>대표이사 | 윤근창</li>
                            <li>법인명(상호명) | 휠라코리아(주)</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="alert">
                    <p className="text">본 페이지는 웹사이트구축 연습 및 포트폴리오용으로 만들어졌으며, 저작권에 문제 있을시 연락 부탁드립니다. </p>
                    <p className="email">teru325@naver.com</p>
                </div>
            </div>
            
            
        </div>


    )
}

export default Footer