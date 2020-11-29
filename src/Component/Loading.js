//import { useEffect } from 'react';
import './Loading.css'




function Loading(){

    const circle = document.querySelectorAll('.loader .circle');

    const circleItem = document.querySelectorAll('.circle span');
        for(let i =0; i < circle.length ; i++){
            circle[i].style.transform = `rotate(calc(18deg * ${i}))`
        }
        for(let i = 0 ; i< circleItem.length ; i++){
            circleItem[i].style.animationDelay = `calc(0.1s * ${i})`
        }

    return(
        <section id="load-ani">
            <div className="loader">
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
                <span className="circle"><span></span></span>
            </div>
        </section>
    )
}

export default Loading;