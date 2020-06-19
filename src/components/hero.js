import React from "react"
// import Clock from 'react-live-clock';
import Clock from '../components/clock';

const Hero = () => {
  return (
    <div className="hero-container rl-contain">
        <div className="rl-right-text">
            <h1>New York</h1>
            <h1 className="rl-city">City</h1>
        </div>
        <div className="rl-description">
            <h1>Digital</h1>
            <h1>Designer</h1>
        </div>
        <div className="rl-work rl-grid">
            <div className="rl-col-1-3 rl-arrow">
                <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white"/>
                </svg>
            </div>
            <h1 className="rl-col-4-5">at</h1>
            <h1 className="rl-col-6-12">{<>Code<br />& Theory</>}</h1>
        </div>
        <div className="rl-meta rl-grid">
            <div className="rl-clock">
                <Clock/>
                <h2>EST</h2>
            </div>
            <div className="rl-extra">
                <h2>Neue Montrael</h2>
            </div>
        </div>

    </div>
  )
}

export default Hero