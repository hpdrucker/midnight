import React from 'react'
import '../App.css';
import Midnight from './Midnight';
import video from '../Videos/motionBG.mp4'

const MainContainer = () => {
    return (
        <div id="main-container">
            <Midnight />
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
            </video>
            
        </div>
    )
}

export default MainContainer