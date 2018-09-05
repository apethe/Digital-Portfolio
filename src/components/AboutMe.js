import React, { Component } from 'react';
import Profile from '../img/Profile.png';
require('../styles/AboutMe.css');

class AboutMe extends Component{
    render(){
        return(
            <div>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" About me" className="blast-root"> 
                    <span>About Me</span>
                        {/* <span className="blast" aria-hidden="true">A</span>
                        <span className="blast" aria-hidden="true" >b</span>
                        <span className="blast" aria-hidden="true" >o</span>
                        <span className="blast" aria-hidden="true" >u</span>
                        <span className="blast" aria-hidden="true" >t&nbsp;</span> 
                        <span className="blast" aria-hidden="true" >m</span>
                        <span className="blast" aria-hidden="true" >e</span> */}
                    </h1>
                    <p>My journey with Front end development began as a Business Technology Analyst in Deloitte, Hyderabad after a graduation in engineering. I got an opportunity to work with esteemed clients of Deloitte consulting while grooming my web development skills.</p>
                    <p>I am currently working out of the Bengaluru studio of Deloitte consulting. The entire experience has made me proficient in multiple FE technologies including Lightining framework and web accessibility. I am passionate about exploring innovative ways to provide efficient solutions to clients.</p>
                    <p>I aim to acquire domain knowledge to further support my technology stronghold and gain control over end-to-end web solutions.</p>
                    
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
                <img src={Profile} className="profile-img"/>
            </div>
        );
    }
}


export default AboutMe;