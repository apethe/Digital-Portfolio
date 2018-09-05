import React, { Component } from 'react';
//import TagCanvas from 'jquery-tagcanvas';
//require('jquery-tagcanvas');
import TagCloud from 'react-tag-cloud';
import '../styles/Skills.css';
//import randomColor from 'randomcolor';

class Skills extends Component{
    componentDidMount() {
        var count=0;
        this.intervalID = setInterval(() => {
            this.forceUpdate();
            count=count+1;
            if (count==1)
            {
                clearInterval(this.intervalID);
                this.runAnimation = setInterval(() => {
                    this.forceUpdate();
                }, 2000);
            } 
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.runAnimation);
    }
    render(){
        return(
            <div>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" Skills &amp; Experience" className="blast-root"> 
                        <span className="blast" aria-hidden="true" >Skills &amp; Experience</span>&nbsp; 
                    </h1>
                    <p>I have a strong work experience of 5.5 years in the web development industry.</p>
                    <p>My main area of expertise is front end development and everything related with this side of the web. I've extensively worked on HTML5, CSS3, Javascript, Responsive Web Design, Web accessibility and Salesforce Lightning Components and design.</p>
                    <p>I also have some experience with AngularJS, ReactJS, Less, Handlebars, Bootstrap, Grunt.</p>
                    <p>I have led teams as a scrum master using Agile methodology with hands-on experience in all stages of a project from 'Response for proposal' to delivery and go-live.</p>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
                {/* <TagCanvas ></TagCanvas> 'font-file-82132''La Belle Aurore', cursive"Open Sans", sans-serif*/}
                <div className="cloud">
                <TagCloud className="tag-cloud"
            style={{
            fontFamily: "font-file-82132",
            fontSize: 28,
            /*fontStyle: 'italic',*/
            color: '#08fdd8',
            padding: 5,
            width: '50%',
            height: '100%'/*, spiral: 'rectangular'*/
            }}>
            <div style={{color: '#fc0853'}}>RWD</div>
            <div >ReactJS</div>
            <div >AngularJS</div>
            <div style={{color: '#fc0853'}}>Salesforce Lightning</div>
            <div >HTML5</div>
            <div>CSS3</div>
            <div >Agile</div>
            <div style={{color: '#fc0853'}}>JavaScript</div>
            <div >Grunt</div>
            <div style={{color: '#fc0853'}}>JSON</div>
            <div >Bootstrap</div>
            <div style={{color: '#fc0853'}}>Web Accessibility</div>
            <div >LESS</div>
            <div >Apex</div>
            </TagCloud></div>
            </div>
        );
    }
}


export default Skills;