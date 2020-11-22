import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IntroSlide from 'react-slick';
import { connect } from 'react-redux';
import './Intro_slide.scss';

function IntroSdCap(props){
    //console.log(props.shoesState)

    const settings={
        dots:true,
        //centerPadding: "5rem",
        arrows:false,
        autoplay:false,
        infinite:false,
        slidesToShow:4,
        slideToScroll:1,

    }

    useEffect(function(){
        let slideBx = document.querySelectorAll('.unit');
        //console.log(slideBx);
        function setLayout (){
            slideBx.forEach(box => {
               let parent = box.parentElement;
               let grandParent = parent.parentElement;
                let $width = grandParent.clientWidth
                parent.style.height = $width * 1.2 +'px';
                box.style.height = $width * 1.2 +'px';
               
            })
        }
        window.addEventListener('resize',setLayout)

        window.addEventListener('load',setLayout)
    },[])

    const onOver = (e)=>{
        let $image = e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
        let $btn = e.currentTarget.children[3];
        e.currentTarget.style.backgroundColor = "#F6F6F6"
        //$image.style.width = "100%";
        $title.style.bottom = '110px';
        $title.style.transition = "0.3s";
        $price.style.bottom = '70px';
        $price.style.transition = "0.3s";
        $image.style.top  = "-10px";
        $image.style.width  = "80%";
        $image.style.transition = "0.3s";
        $btn.style.opacity = 1;
    } 
    const onOut = (e)=>{
        let $image= e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
        console.log($price);
        let $btn = e.currentTarget.children[3];
        e.currentTarget.style.backgroundColor = "#ffffff"
        $title.style.bottom = '90px';
        $title.style.transition = "0.3s";
        $price.style.bottom = '50px';
        $price.style.transition = "0.3s";
        $image.style.top  = "35px";
        $image.style.width  = "70%";
        $image.style.transition = "0.3s"
        $btn.style.opacity = 0;
    } 





    return(
        <IntroSlide {...settings}>
           {
               props.capState.map(function(a,i){
                   return(
                       <div className="unit" key={i} onMouseOver={onOver} onMouseOut={onOut}>
                            <img src={a.imgUrl[0]} alt="" width="70%" className="unit-cap"/>
                            <div className="unit-title">{a.title}</div>
                            <div className="unit-price">{a.price}</div>
                            <button className="unit-btn"><Link to={'/cap/'+a.id }>상품보러가기</Link></button>
                       </div>
                   )
               })
           }

        </IntroSlide>
    )
}

function takeShoes (state){
    return{
        capState : state.CapFn
    }
}


export default connect(takeShoes)(IntroSdCap);