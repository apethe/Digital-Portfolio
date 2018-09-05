import React, { Component } from 'react';
import Map from './Maps.js';
import '../styles/ContactMe.css';
class ContactMe extends Component{
    render(){
        return(
            <div>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                <h1 aria-label=" Contact me" className="blast-root"> 
                <span>Contact me</span>
                </h1>
                <p>If you have any questions, please don’t hesitate to contact me…</p>
                <p><span className="primary-color">Email:</span> apethe@deloitte.com</p>
                <p><span className="primary-color">Telegram:</span> @ap2013</p>
                <p><span className="primary-color">Phone:</span> 9004666725</p>
                <div className="contact-form">
                {/* <form id="contact">
                    <ul>
                        <li className="half animated fadeInUp">
                            <input className="input__field input__field--hoshi" placeholder="Name" type="text" name="name"/> 
                            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                        </li>
                        <li className="half animated fadeInUp"> 
                            <input className="input__field input__field--hoshi" placeholder="Email" type="email" name="email"/> 
                            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                        </li>
                        <li className="animated fadeInUp"> 
                            <input className="input__field input__field--hoshi" placeholder="Subject" type="text" name="subject"/>
                            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                        </li>
                        <li className="animated fadeInUp">
                            <textarea className="input__field input__field--hoshi" placeholder="Message" name="msg"></textarea>
                            <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                        </li>
                        <li className="submit animated fadeInUp"> 
                            <input id="submit" type="submit" className="flat-button" value="SEND"/>
                        </li>
                    </ul>
                </form> */}
                {/* <Form /> */}
                </div>
                </div>
                <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
                <div className="inf-map animated fadeInUp"> 
                    Apoorva Pethe,<br/> 
                    Brookefield, Kundalahalli, Bengaluru- 560037<br/><br/>
                    <span><span>@</span>: {this.props.jsonData.email}</span></div>
                <div className="map-wrap">
                    <Map></Map>
                </div>
            </div>
        );
    }
}


export default ContactMe;