import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import IntroSlide from 'react-slick';
import { connect } from 'react-redux';
import './Intro_slide.scss';

function IntroSdShoes(props){

    const settings={
        dots:true,
        //centerMode:true,
        //centerPadding: "5rem",
        arrows:false,
        autoplay:false,
        infinite:false,
        slidesToShow:4,
        slideToScroll:1,
        responsive : [
            {breakpoint:1024,
            settings:{
                slidesToShow:3,
            }},
            {breakpoint:768,
                settings:{
                    slidesToShow:2,
                }}
        ]
    }

    
        //console.log(slideBx);

    
    
   

    useEffect(function(){
        let slideBx = document.querySelectorAll('.unit');
        function setLayout (){
            slideBx.forEach(box => {
               let parent = box.parentElement;
               let grandParent = parent.parentElement;
                let $width = grandParent.clientWidth
                parent.style.height = $width * 1.2 +'px';
                box.style.height = $width * 1.2 +'px';
               
            })
        }
        setLayout ();
        window.addEventListener('resize',setLayout)
        window.addEventListener('load',setLayout)
    },[])

    const onOver = (e)=>{
        let $image = e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
        
        e.currentTarget.style.backgroundColor = "#F6F6F6"
        //$image.style.width = "100%";
        $title.style.transform = 'translate(-50%,-240%)';
        $title.style.transition = "0.3s";
        $price.style.transform = 'translate(-50%,-120%)';
        $price.style.transition = "0.3s";
        $image.style.top  = "-10px";
        $image.style.width  = "80%";
        $image.style.transition = "0.3s";
        
    } 
    const onOut = (e)=>{
        let $image= e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
        //console.log($price);
        
        e.currentTarget.style.backgroundColor = "#ffffff"
        $title.style.transform = 'translate(-50%,0)';
        $title.style.transition = "0.3s";
        $price.style.transform = 'translate(-50%,0)';
        $price.style.transition = "0.3s";
        $image.style.top  = "35px";
        $image.style.width  = "70%";
        $image.style.transition = "0.3s"
        
    } 




    return(
        <IntroSlide {...settings}>
           {
               props.shoesState.map(function(a,i){
                   return(
                       <div className="unit" key={i} onMouseOver={onOver} onMouseOut={onOut}>
                                <img src={a.imgUrl[0]} alt=""/>
                                <div className="unit-title">{a.title}</div>
                                <div className="unit-price">{a.price}</div>
                                <button className="unit-btn"><Link to={'/shoes/'+a.id }>상품보러가기</Link></button>
                           
                       </div>
                   )
               })
           }

        </IntroSlide>
    )
}

function takeShoes (state){
    return{
        shoesState : state.ShoesFn
    }
}


export default connect(takeShoes)(IntroSdShoes);