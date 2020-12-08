import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                api(http://newsapi.org/)로 만든 뉴스앱
            </span>
            <span>- 빅데이터 2기 최혜지</span>
        </div>
    );
}

export default About;