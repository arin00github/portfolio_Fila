import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(){
    const onOver = (e) =>{
        let $target = e.currentTarget;
        $target.style.color = '#737373';
    }
    const onOut = (e) =>{
        let $target = e.currentTarget;
        $target.style.color = '#9E9C9C';
    }

    
    return(
        <div id="hd-warp">
            <div className="hd-top">
                <div className="event-slog">
                    <p>가을신상품 세일</p>
                </div>
                <div className="logo">
                    <img src= {process.env.PUBLIC_URL + '/img/Fila_logo.png'} alt=""/>
                </div>
                <div className="user">
                    <span><Link to='/login'>로그인</Link></span>
                    <span><Link to='/service' >고객센터</Link></span>
                    <span><Link to='/cart' >장바구니</Link></span>
                </div>
            </div>
            <div className="hd-bottom">
                <ul className="nav">
                    <li><Link to='/' onMouseOver={onOver} onMouseOut={onOut}>HOME</Link></li>
                    <li><Link to='/shoes' onMouseOver={onOver} onMouseOut={onOut}>SHOES</Link></li>
                    <li><Link to='/bag' onMouseOver={onOver} onMouseOut={onOut}>BAG</Link></li>
                    <li><Link to='/cap' onMouseOver={onOver} onMouseOut={onOut}>CAP</Link></li>
                    <li><Link to='/' onMouseOver={onOver} onMouseOut={onOut}>BEST</Link></li>
                </ul>
            </div>
            
        </div>


    )
}

export default Header