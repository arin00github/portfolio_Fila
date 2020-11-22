import React from 'react';
import MainBanner from './Mainbanner';
import IntroSdShoes from './Intro_slide/Intro_sd_shoes';
import IntroSdBag from './Intro_slide/Intro_sd_bag'
import IntroSdCap from './Intro_slide/Intro_sd_cap'
import Event from './Event';
import './Main.scss';

function Main(){
    return(
        <div id="container" className="main">
            <MainBanner></MainBanner>
            <div className="intro-area" id="shoes">
                <div className="title">SHOES</div>
                <IntroSdShoes></IntroSdShoes>
            </div>
            <div className="intro-area" id="shoes">
                <div className="title">SHOES</div>
                <IntroSdBag></IntroSdBag>
            </div>
            <div className="intro-area" id="shoes">
                <div className="title">CAPS</div>
                <IntroSdCap></IntroSdCap>
            </div>
            <Event></Event>
        

        </div>
    )
}



export default Main;