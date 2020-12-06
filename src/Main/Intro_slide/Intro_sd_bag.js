import React, { useCallback, useEffect } from 'react';
import IntroSlide from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Intro_slide.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function IntroSdBag(props){
    //console.log(props.shoesState)

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
    let slideBx = document.querySelectorAll('.unit');
        //console.log(slideBx);
    const setLayout = useCallback(()=>{
        slideBx.forEach(box => {
            let parent = box.parentElement;
            let grandParent = parent.parentElement;
            let $width = grandParent.clientWidth
            //console.log($width);
            parent.style.height = $width * 1.2 +'px';
            box.style.height = $width * 1.2 +'px';
            //console.log(box.style.height);
        })
    },[slideBx])
    

    // 주소올때마다 함수가 실행되어 있어야 하는데 안되어 있음.
    //추가적인 훅공부가 필요해 보임.
    

    
    useEffect(function(){
        // let slideBx = document.querySelectorAll('.unit');
        // //console.log(slideBx);
        // function setLayout (){
        //     slideBx.forEach(box => {
        //        let parent = box.parentElement;
        //        let grandParent = parent.parentElement;
        //         let $width = grandParent.clientWidth
        //         parent.style.height = $width * 1.2 +'px';
        //         box.style.height = $width * 1.2 +'px';
               
        //     })
        // }
        setLayout();
        window.addEventListener('resize',function(){
            setLayout();
            //console.log('resize')
        })
        window.addEventListener('load',function(){
            setLayout()
            //console.log('loading')
        })

        return()=>{
            window.removeEventListener('resize',setLayout)
            window.removeEventListener('load',setLayout)
        }
        
    },[setLayout])
    
    const onOver = (e)=>{
        let $image = e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
        
        e.currentTarget.style.backgroundColor = "#F6F6F6"
        //$image.style.width = "100%";
        $title.style.transform = 'translate(-50%,-170%)';
        $title.style.transition = "0.3s";
        $price.style.transform = 'translate(-50%,-150%)';
        $price.style.transition = "0.3s";
        $image.style.top  = "-10px";
        $image.style.width  = "80%";
        $image.style.transition = "0.3s";
        
    } 
    const onOut = (e)=>{
        let $image= e.currentTarget.children[0];
        let $title = e.currentTarget.children[1];
        let $price = e.currentTarget.children[2];
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
               props.bagState.map(function(a,i){
                   return(
                       <div className="unit bag" key={i} onMouseOver={onOver} onMouseOut={onOut}>
                            <img src={a.imgUrl[0]} alt=""/>
                            <div className="unit-title">{a.title}</div>
                            <div className="unit-price">{a.price}</div>
                            <button className="unit-btn"><Link to={'/bag/'+a.id }>상품보러가기</Link></button> 
                        </div>
                   )
               })
           }

        </IntroSlide>
    )
}

function takeBag (state){
    return{
        bagState : state.BagFn
    }
}


export default connect(takeBag)(IntroSdBag);