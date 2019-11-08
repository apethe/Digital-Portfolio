import React, { Component } from 'react';
import '../App.css';
import '../styles/NavBar.css';
//import IcoMoon from 'react-icomoon';
import FontAwesome from 'react-fontawesome';

class NavBar extends Component{
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
        var links = event.currentTarget.parentElement.children;
        for(var i=0;i<links.length;i++){
            links[i].classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        this.props.activePage({ dataFromChild: menu_name });
        //alert(this.props.activePage);
    }
    
    render(){
        return(
            <div className="nav_bar" >
                <a className="logo" rel="index" data-menu="Home" onClick={this.handleClick}> A</a>
                <nav className="en"> 
                    <a rel="index" className="active" data-menu="Home" onClick={this.handleClick}>
                    {/* <IcoMoon icon="home" /> */}
                    <FontAwesome name='home' />
                    </a> 
                    <a rel="about" data-menu="About" onClick={this.handleClick}>
                    {/* <IcoMoon icon="user" /> */}
                    <FontAwesome name='user-o' />
                    </a> 
                    <a rel="skills" data-menu="Skills" onClick={this.handleClick}>
                    {/* <IcoMoon icon="cog" />              */}
                    <FontAwesome name='gear' />
                    </a> 
                    {/*<a rel="gallery" data-menu="Work" onClick={this.handleClick}>
                    <FontAwesome name='eye' />
                    </a> */}
                    <a rel="contact" data-menu="Contact" onClick={this.handleClick}>
                    {/* <IcoMoon icon="mail2" /> */}
                    <FontAwesome name='envelope-o' />
                    </a>
                </nav>
                <ul>
                    <li>
                    <a href="https://twitter.com/apoorvapethe" target="_blank">
                    <FontAwesome name='twitter' />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/apoorva-pethe-a62b3a45" target="_blank">
                    <FontAwesome name='linkedin' />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/apoorva.pethe" target="_blank">
                    <FontAwesome name='facebook' />
                    </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
