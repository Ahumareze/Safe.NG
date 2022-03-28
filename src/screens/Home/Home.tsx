import React from 'react';
import './Home.css';
import Lottie from 'react-lottie';
import { Header } from '../../components';

const background = require('../../assets/background.png');
const animationData = require('../../assets/safe-city.json');

function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      
    return (
        <div className='HomePage' style={{backgroundImage: `url(${background})`}}>
            <Header location={false} />
            <section>
                <div className='SD1'>
                    <p className='sd_header'>Helping Nigerian citizens stay informed and <span>safe</span> </p>
                    <p className='sd_main'>Connect and live more safely. Safe is a personal safety network that empowers you to protect yourself and the people and places you care about.</p>
                </div>
                <div className='SD2'>
                    <Lottie options={defaultOptions} height={500} width={500} />
                </div>
            </section>
        </div>
    );
}

export default Home;