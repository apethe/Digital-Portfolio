import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/slider-animations.css';
import '../styles/work-styles.css';
import SOM from '../img/StateofMichigan2.png'
import Activision from '../img/Activision2.png'
//import Supercuts from '../img/Supercuts2.png'
import Telstra from '../img/Telstra2.png'
//import USGA from '../img/USGA2.png'
//import DCOM from '../img/Dcom2.png'
import Profile from '../img/Profile.png'
import ActivisionTablet from '../img/Activision-tablet2.png'
//import SupercutsTablet from '../img/Supercuts-tablet2.png'
import TelstraTablet from '../img/Telstra-tablet2.png'
//import USGATablet from '../img/USGA-tablet2.png'
//import DCOMTablet from '../img/DeloitteCom-tablet2.png'
import SOMTablet from '../img/StateofMichigan-tablet2.png'
import ActivisionMobile from '../img/Activision-mobile2.png'
//import SupercutsMobile from '../img/Supercuts-mobile2.png'
import TelstraMobile from '../img/Telstra-mobile2.png'
//import USGAMobile from '../img/USGA-mobile2.png'
//import DCOMMobile from '../img/DeloitteCom-mobile2.png'
import SOMMobile from '../img/StateofMichigan-mobile2.png'

class MyWork extends Component{
    
    render(){
        const content = [
            {
                title: 'Michigan Services Delivery Portal',
                description:
                'Lightning Design System and Framework | Web accessibility | Multilingual | Multilingual PDF | RWD | 2015- Present',
                button: 'VIEW WEBSITE',
                buttonlink: 'https://newmibridges.michigan.gov/s/isd-landing-page?language=en_US',
                image: {SOM},
                imageTablet: {SOMTablet},
                imageMobile: {SOMMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            },
            {
                title: 'Activision',
                description:
                'AngularJS | Router | Handlebars | Less | Responsive Web Design | 2013',
                button: 'VIEW WEBSITE',
                buttonlink: 'https://www.activision.com/',
                image: {Activision},
                imageTablet: {ActivisionTablet},
                imageMobile: {ActivisionMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            },
            /*{
                title: 'Regis - Supercuts',
                description:
                'RWD | Javascript | HTML5 | CSS3 | AdobeCQ | 2014',
                button: 'VIEW WEBSITE',
                buttonlink: 'https://www.supercuts.com/',
                image: {Supercuts},
                imageTablet: {SupercutsTablet},
                imageMobile: {SupercutsMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            },*/
            {
                title: 'Telstra',
                description:
                'Responsive Web Design | Javascript | Grunt | Handlebars | 2014',
                button: 'VIEW WEBSITE',
                buttonlink: 'https://www.telstra.com.au/business-enterprise',
                image: {Telstra},
                imageTablet: {TelstraTablet},
                imageMobile: {TelstraMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            }
            /*{
                title: 'Deloitte.com',
                description:
                'Responsive Web Design | HTML5 | CSS3 | JQuery | AdobeCQ | 2013',
                button: 'VIEW WEBSITE',
                buttonlink: 'https://www2.deloitte.com/in/en.html',
                image: {DCOM},
                imageTablet: {DCOMTablet},
                imageMobile: {DCOMMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            },*/
            /*{
                title: 'United States Golf Association',
                description:
                'AngularJS | Router | Handlebars | Less | RWD | 2016',
                button: 'VIEW WEBSITE',
                buttonlink: 'http://www.usga.org/',
                image: {USGA},
                imageTablet: {USGATablet},
                imageMobile: {USGAMobile},
                user: 'Apoorva Pethe',
                userProfile: {Profile}
            }*/
        ];
        console.log(content[0].image);
        return(
            <div>
                <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        
                    >
                    {/* style={{ background: `url('${item.image[Object.keys(item.image)[0]]}') no-repeat center center` }} */}
                        <img src={item.image[Object.keys(item.image)[0]]} className="project-glimpse"/>
                        <img src={item.imageTablet[Object.keys(item.imageTablet)[0]]} className="project-glimpse-tablet"/>
                        <img src={item.imageMobile[Object.keys(item.imageMobile)[0]]} className="project-glimpse-mobile"/>
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a className="flat-button" href={item.buttonlink} target="_blank">{item.button}</a>
                        </div>
                        <section>
                            <img src={item.userProfile[Object.keys(item.userProfile)[0]]} alt={item.user} />
                            <span>
                                Developed by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
                </Slider>
            </div>
        );
    }
}


export default MyWork;