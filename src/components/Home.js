import React, { Component } from 'react';
import '../styles/Home.css';
class Home extends Component{
    constructor(props) {
        super(props);
        //this.state = {childData: 'Home'};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    /*getInitialState(){
        return{
            selectedCode: ''
        };
    }*/
    handleClick = (event) => {
        
        var menu_name = String(event.currentTarget.dataset.menu);
        this.props.activePage({ dataFromChild: menu_name });
        //alert(this.props.activePage);
    }
    render(){
        return(
            <div>
                <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="text-zone">
                    <h1 aria-label=" Hi, I’m Apoorva,web developer." className="blast-root">
                    <span className="hi">Hi,</span><span className="custom-style">I'm  </span>
                    <a className="logo" rel="index" href="http://localhost:3000/"> A</a>
                    <span className="clear-none">poorva,</span><span> web developer.</span>
                        {/* <span className="blast" aria-hidden="true" >H</span>
                        <span className="blast" aria-hidden="true" >i</span>
                        <span className="blast" aria-hidden="true" >,</span><br/> 
                        <span className="blast" aria-hidden="true" >I</span>
                        <span className="blast" aria-hidden="true" >’</span>
                        <span className="blast" aria-hidden="true" >m</span> 
                        <a className="logo" rel="index" href="http://localhost:3000/"> A</a>
                        <span className="blast" aria-hidden="true" >p</span>
                        <span className="blast" aria-hidden="true" >o</span>
                        <span className="blast" aria-hidden="true" >o</span>
                        <span className="blast" aria-hidden="true" >r</span>
                        <span className="blast" aria-hidden="true" >v</span>
                        <span className="blast" aria-hidden="true" >a</span>
                        <span className="blast" aria-hidden="true" >,</span><br/>
                        <span className="blast" aria-hidden="true" >w</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >b&nbsp;</span>
                        <span className="blast" aria-hidden="true" >d</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >v</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >l</span>
                        <span className="blast" aria-hidden="true" >o</span>
                        <span className="blast" aria-hidden="true" >p</span>
                        <span className="blast" aria-hidden="true" >e</span>
                        <span className="blast" aria-hidden="true" >r</span>
                        <span className="blast" aria-hidden="true" >.</span> */}
                    </h1>
                    <h2>{this.props.jsonData.bio}</h2> 
                    {/* Front End Engineer / Web Accessibility / Lightning */}
                    <a rel="contact" data-menu="Contact" onClick={this.handleClick} className="flat-button">CONTACT ME</a>
                    </div>
                    <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/> &lt;/html&gt; </span>
                    <div id="bulb" className="bulb"><a className="animated" href=""></a></div>
            </div>
        );
    }
}


export default Home;