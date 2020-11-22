import React from 'react';

function Event(){
    return(

        <div className="event-area">
            <div className="title">BRAND NEW</div>
            <div className="boxwrap">
                <div className="first-row">
                    <div className="big"><img width="100%" src={process.env.PUBLIC_URL + '/img/ext/Content_0.jpg'} alt=""/></div>
                    <div><img width="100%" src={process.env.PUBLIC_URL + '/img/ext/Content_1.jpg'} alt=""/></div>
                </div>
                <div className="second-row">
                    <div><img width="100%" src={process.env.PUBLIC_URL + '/img/ext/Content_2.jpg'} alt=""/></div>
                    <div><img width="100%" src={process.env.PUBLIC_URL + '/img/ext/Content_3.jpg'} alt=""/></div>
                    <div><img width="100%" src={process.env.PUBLIC_URL + '/img/ext/Content_4.jpg'} alt=""/></div>
                </div>
            </div>

        </div>
    )
}

export default Event