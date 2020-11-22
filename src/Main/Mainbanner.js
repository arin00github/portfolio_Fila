import React from 'react';
import './Main.scss';
import Slider from 'react-slick';


function MainBanner(){

    let settings = {
        dots:true,
        arrows:false,
        autoplay:false,
        infinite:false,
        slidesToShow:1,
        slideToScroll:1,
        dotsClass : 'item-dots',
        customPaging : (i) => <button className="indicator" key={i}></button>,
    }

    return(
    
            <Slider {...settings} className="main-bn-area">
                <div className="unit-slide banner01">
                    <div className="bn-circle"></div>
                    <div className="bn-txt">
                        <div className="txt-inner">
                            <p className="txt-01">FILA Online Store</p>
                            <h3>OPEN</h3>
                            <p className="txt-kr">오픈기념 이벤트 행사</p>
                        </div>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/img/shoes/휠라레인져스크립트_0.png'} alt="" className="bn-img"/ >
                </div>
                <div className="unit-slide banner02">
                <div className="bn-circle"></div>
                    <div className="bn-txt">
                        <div className="txt-inner">
                            <p className="txt-01">FILA Online Store</p>
                            <h3>OPEN</h3>
                            <p className="txt-kr">오픈기념 이벤트 행사</p>
                        </div>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/img/shoes/휠라레인져스크립트_0.png'} alt="" className="bn-img"/ >
                </div>
                <div className="unit-slide banner03">
                <div className="bn-circle"></div>
                    <div className="bn-txt">
                        <div className="txt-inner">
                            <p className="txt-01">FILA Online Store</p>
                            <h3>OPEN</h3>
                            <p className="txt-kr">오픈기념 이벤트 행사</p>
                        </div>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/img/shoes/휠라레인져스크립트_0.png'} alt="" className="bn-img"/ >
                </div>
                <div className="unit-slide banner04">
                <div className="bn-circle"></div>
                    <div className="bn-txt">
                        <div className="txt-inner">
                            <p className="txt-01">FILA Online Store</p>
                            <h3>OPEN</h3>
                            <p className="txt-kr">오픈기념 이벤트 행사</p>
                        </div>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/img/shoes/휠라레인져스크립트_0.png'} alt="" className="bn-img"/ >
                </div>
            </Slider>

        
    )
}


export default MainBanner;