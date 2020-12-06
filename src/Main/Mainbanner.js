import React, { useEffect, useState } from 'react';
import './Main.scss';
import Slider from 'react-slick';
import SliderPc from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    let [idx, setIdx] = useState(0)

    const banner = [
        {maximg : process.env.PUBLIC_URL + '/img/main/banner_img01.jpg',
        tablet : process.env.PUBLIC_URL + '/img/main/banner_img_1024_01.jpg',
        mobile : process.env.PUBLIC_URL + '/img/main/banner_img_m_01.jpg'},
        {maximg : process.env.PUBLIC_URL + '/img/main/banner_img02.jpg',
        tablet  : process.env.PUBLIC_URL + '/img/main/banner_img_1024_02.jpg',
        mobile : process.env.PUBLIC_URL + '/img/main/banner_img_m_02.jpg'},
        {maximg: process.env.PUBLIC_URL + '/img/main/banner_img03.jpg',
        tablet  : process.env.PUBLIC_URL + '/img/main/banner_img_1024_01.jpg',
        mobile : process.env.PUBLIC_URL + '/img/main/banner_img_m_03.jpg'},
        {maximg : process.env.PUBLIC_URL + '/img/main/banner_img04.jpg',
        tablet : process.env.PUBLIC_URL + '/img/main/banner_img_1024_01.jpg',
        mobile : process.env.PUBLIC_URL + '/img/main/banner_img_m_04.jpg'},
    ]

    const bnComponent =[
        <BannerPC banner={banner} settings={settings}></BannerPC>,
        <BannerTablet banner={banner} settings={settings}></BannerTablet>,
        <BannerMobile banner={banner} settings={settings}></BannerMobile>
    ]



    useEffect(()=>{
        const viewTablet = window.matchMedia("(max-width:1024px) and (min-width:560px)")
        const viewMobile = window.matchMedia("(max-width:559px)")
        function viewCheck(){
            
            if(viewTablet.matches){
                // tablet크기일때
                console.log('tablet')
                setIdx(1)
                
            }else if(viewMobile.matches){
                // mobile 크기일때
                console.log('mobile')
                setIdx(2)
                
            }else{
                // PC 크기일때
                console.log('pc')
                setIdx(0)
            }
        }
        viewCheck()
        window.addEventListener('load',viewCheck);
        window.addEventListener('resize',viewCheck);
        return()=>{
            window.removeEventListener('load',viewCheck);
            window.removeEventListener('resize',viewCheck);
        }
    })

    return(
            <div className="wrap-bn">
                {bnComponent[idx]}
            </div>
        
    )
}


function BannerPC (props){




    return(
        <SliderPc {...props.settings} className="main-bn-area">
            {props.banner.map(function(item,idx){
                return(
                    <div className="unit-slide" key={idx}>
                        <img className="banner-img" src={item.maximg} alt=""/> 
                    </div>
                )
            })}
            
        </SliderPc>
    )
}

function BannerTablet (props){


    return(
        <Slider {...props.settings} className="main-bn-area">
            {props.banner.map(function(item,idx){
                return(
                    <div className="unit-slide" key={idx}>
                        <img className="banner-img" src={item.tablet} alt=""/> 
                    </div>
                )
            })}
            
        </Slider>
    )
}

function BannerMobile (props){


    return(
        <Slider {...props.settings} className="main-bn-area">
            {props.banner.map(function(item,idx){
                return(
                    <div className="unit-slide" key={idx}>
                        <img className="banner-img" src={item.mobile} alt=""/> 
                    </div>
                )
            })}
            
        </Slider>
    )
}

export default MainBanner;