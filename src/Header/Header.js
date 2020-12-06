import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.scss';

function Header(){

    const url = useParams()
    console.log(url)
    const onOver = (e) =>{
        let $target = e.currentTarget;
        $target.style.color = '#737373';
    }
    const onOut = (e) =>{
        let $target = e.currentTarget;
        $target.style.color = '#9E9C9C';
    }

    useEffect(()=>{
        const menuBtn = document.getElementById('modal-menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const modal = document.getElementById('modal-menu');
        const listArray = document.getElementsByClassName('list');
        //console.log(listArray);
        for(let i = 0 ; i< listArray.length ; i++ ){
            listArray[i].addEventListener('click',function(){
                modal.classList.remove('open');
            })
        }
        menuBtn.addEventListener('click',function(){
            modal.classList.add('open');
        })
        closeBtn.addEventListener('click',function(){
            modal.classList.remove('open');
        })

        

    },[])

    
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
                <button id="modal-menu-btn">
                    <img src={process.env.PUBLIC_URL + '/img/icon/menu.svg'} alt=""/>
                </button>
                <button id="cart-btn">
                    <Link to='/cart'>
                    <img src={process.env.PUBLIC_URL + '/img/icon/cart.svg'} alt=""/>
                    </Link>
                </button>
            </div>
            <div className="hd-bottom">
                <ul className="nav">
                    <li><Link to='/' onMouseOver={onOver} onMouseOut={onOut}>HOME</Link></li>
                    <li><Link to='/shoes' onMouseOver={onOver} onMouseOut={onOut}>SHOES</Link></li>
                    <li><Link to='/bag' onMouseOver={onOver} onMouseOut={onOut}>BAG</Link></li>
                    <li><Link to='/cap' onMouseOver={onOver} onMouseOut={onOut}>CAP</Link></li>
                </ul>
            </div>
            <div id="modal-menu">
                <div className="modal-inner">
                    <div className="nav-menu">
                        <ul>
                            <li><Link to='/' className="list">HOME</Link></li>
                            <li><Link to='/shoes' className="list">SHOES</Link></li>
                            <li><Link to='/bag' className="list">BAG</Link></li>
                            <li><Link to='/cap' className="list">CAP</Link></li>
                        </ul>
                    </div>
                    <div className="login-area">
                        <div className="login-inner">
                            <button><Link to='/login' className="list">로그인</Link></button>
                            <button>회원가입</button>
                        </div>
                    </div>
                    <div className="gnb-area">
                        <ul>
                            <li><Link to='/login' className="list">로그인</Link></li>
                            <li><Link to='/service' className="list">고객센터</Link></li>
                            <li><Link to='/cart' className="list">장바구니</Link></li>
                            
                        </ul>
                    </div>
                    <button id="close-btn">
                        <img src={process.env.PUBLIC_URL + '/img/icon/cancel.svg'} alt=""/>
                    </button>
                </div>
            </div>
            
        </div>


    )
}

export default Header