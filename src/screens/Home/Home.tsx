import React from 'react';
import './Home.css';
import Lottie from 'react-lottie';
import { Header } from '../../components';

const background = require('../../assets/background.png');

function Home() {
    console.log('Home page')
    return (
        <div className='HomePage' style={{backgroundImage: `url(${background})`}}>
            <Header />
            <section>
                <div className='SD1'>
                    <p className='sd_header'>Helping Nigerian citizens stay informed and <span>safe</span> </p>
                    <p className='sd_main'>Connect and live more safely. Safe is a personal safety network that empowers you to protect yourself and the people and places you care about.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;