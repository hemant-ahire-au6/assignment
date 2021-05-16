import React from 'react'
import Img from '../asset/Group 1020.png'

function Carousel() {
    return (
        <div className="carousel">
            <img style={{height: "100vh",width:"100%"}} src={Img}  alt="Welcome here"/>
            <div className="centered">
                <h1> We are a Modern IT Company</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. 
                Mauris vitae ultricies leo integer malesuada. 
                Ac odio tempor orci dapibus ultrices in. Egestas diam
                </p>
            </div>
        </div>
    )
}

export default Carousel;
