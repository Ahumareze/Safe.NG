import React from 'react';
import './Home.css';
import Lottie from 'react-lottie';

//Imported components
import { Header } from '../../components';

//Imported utilities
const background = require('../../assets/background.png');
const animationData = require('../../assets/safe-city.json');
const ribbon = require('../../assets/ribbon.png');

function Home(props: any) {
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
            <Header props={props} location={false} active='Home' />
            <section>
                <div className='SD1'>
                    <p className='sd_header'>Helping Nigerian citizens stay informed and <span>safe</span> </p>
                    <p className='sd_main'>Connect and live more safely. Safe is a personal safety network that empowers you to protect yourself and the people and places you care about.</p>
                    <div className='sd_box'>
                        <div className='sd_imgContainer'>
                            <img src={ribbon} />
                        </div>
                        <div className='sd_details'>
                            <p className='sd_award_title'>Vanguard App of the year</p>
                            <div className='sd_award_main'>
                                <p><span>"</span>Safe won the vanguard best web application 2021. Getting the support from the chief of police, saying that safe was going to increase the number of awareness amongst citizens<span>"</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SD2'>
                    <Lottie options={defaultOptions} height={500} width={500} />
                </div>
            </section>
        </div>
    );
}

export default Home;