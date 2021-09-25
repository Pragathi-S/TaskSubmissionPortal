import React from 'react';
import Section1 from './Section1.png';
import Section2 from './Section2.png';
import Section3 from './Section3.png';
import * as GiIcons from "react-icons/gi";
import './home.css';


function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <div><img className="image" src={Section1} alt="Section1" /></div>
                <div><span className="text">A digital way to submit all  your tasks in one place</span></div>
            </div>
            <div className='container'>
                <div><span className="text">Watch out for deadlines. &nbsp;&nbsp;&nbsp; Be productive and complete tasks on time.</span></div>
                <div><img className="image" src={Section2} alt="Section2" /></div>
            </div>
            <div className='container'>
                <div><img className="image" src={Section3} alt="Section3" /></div>
                <div><span className="text">Never worry about losing physical documents anymore</span></div>
            </div>
            <div className="footer-text">TASKER<GiIcons.GiRunningNinja color="black"/><br></br>© 2017 - 2021</div>
            <div className='footer'></div> 
        </div>
    );
}

export default Home;






