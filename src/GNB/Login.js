import React from 'react';
import './gnb.scss';


function Login (){

    return(
        <div className="gnb-container login-con">
            <h2 className="gnb-title">로그인</h2>
            
            <div className="login-content">
                <form>
                    <p><label htmlFor="id">아이디</label></p>
                    <p><input type="text" id="id" name="id"/></p>
                    <p><label htmlFor="pw">비밀번호</label></p>
                    <p><input type="text" id="pw" name="pw"/></p>
                    <p><button id="submit-btn">로그인하기</button></p>
                    
                </form>

                <div className="subfn">
                    <p>아이디/비밀번호찾기</p>
                    <p>회원가입</p>
                    

                </div>
            </div>


        </div>
    )

}

export default Login;