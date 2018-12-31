import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
//import {TagCanvas} from './components/Skills';

export default class App extends Component {
  /*constructor() {
    super();
    this.state = {childData: 'Home'};
  }*/
  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: '',
      isLoaded: false,
      items: ''
    };    
  }
  /*getdata(data){
    if(!data)
    data = 'Home';
    this.setState({childData: data});
    alert(data);
  }*/
  //state: {childData: ''};
  getData = (dataFromChild) => {
    //this.setState({childData: 'Home'});
    this.setState({
      displayState: 'block'
    });
    var self = this;
    setTimeout(function() {
      this.setState({displayState: 'none'});
      self.setState({ listDataFromChild: dataFromChild });
    }.bind(this), 1050)
    //console.log(this.state.listDataFromChild.dataFromChild);
  }
  componentDidMount() {
    fetch("https://hub.deloitte.com/api/portfolio/ab087a597208a761f1d11eafb6a75f68ff628444397697b3896947f4ea85122e")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result.data
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          data: {"firstname":"Apoorva","lastname":"Pethe","nickname":"Apoorva","email":"apethe@deloitte.com","bio":"Front End Developer / Web Accessibility / Lightning","path":"/portfolios/64/index.html","experience":5.5,"FeExperience":5.5,"techStack":[{"_id":"5b7169fa3f34187fdf948bf5","name":"ReactJS","label":"reactjs","__v":0},{"_id":"5b716ab93f34187fdf948bfb","name":"AngularJS","label":"angularjs","__v":0},{"_id":"5b716ac93f34187fdf948bfc","name":"HTML5","label":"html5","__v":0},{"_id":"5b716f553f34187fdf948bfe","name":"JavaScript","label":"javascript","__v":0},{"_id":"5b716f623f34187fdf948bff","name":"CSS3","label":"css3","__v":0},{"_id":"5b716f9d3f34187fdf948c01","name":"Handlebars","label":"handlebars","__v":0},{"_id":"5b716fb63f34187fdf948c02","name":"RWD","label":"rwd","__v":0},{"_id":"5b716fce3f34187fdf948c04","name":"LESS","label":"less","__v":0},{"_id":"5b716fd93f34187fdf948c05","name":"Bootstrap","label":"bootstrap","__v":0},{"_id":"5b7170063f34187fdf948c08","name":"CSS Grid","label":"cssgrid","__v":0},{"_id":"5b717742135da915c0deb9a9","name":"Grunt","label":"grunt","__v":0},{"_id":"5b7177bb135da915c0deb9b1","name":"BEM","label":"bem","__v":0}],"openAPIHash":"ab087a597208a761f1d11eafb6a75f68ff628444397697b3896947f4ea85122e","hash":"64","status":"uploaded","_id":"5b7189ec135da915c0deb9f8","location":{"_id":"5b716a4e3f34187fdf948bf7","name":"Bengaluru","label":"Bengaluru","__v":0},"__v":0}
        });
      }
    )
  }
  render() {
    var styles = {
      display: 'block'
    };
    var hidePreloader = {
      display: this.state.displayState
    };
    const { error, isLoaded, data } = this.state;
    if (error) {
      return (
      <div className="error">Error: {error.message}</div>
      ); 
    } else if (!isLoaded) {
      return (
        <div style={styles} className="preloader">
              <div className="inner">
                <span className="logo">A</span>
                <span className="thinking">Apoorva is thinking</span>
                <div className="progress-bar">
                  <div className="progress-bar_bg">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
      );
    } else {
      return (
        <div className="App">
          <NavBar activePage={this.getData} />
          
          <div id="page">
          <div className={`container home-page ${this.state.listDataFromChild.dataFromChild==='Home' ? "home" : ""} ${this.state.listDataFromChild.dataFromChild==='Contact' ? "contact-page" : ""} ${this.state.listDataFromChild.dataFromChild==='Work' ? "work-page" : ""} ${this.state.listDataFromChild.dataFromChild==='About' ? "about-page" : ""}`}>
          {this.state.listDataFromChild ? null : <div className="showPage"><Home activePage={this.getData} jsonData={data}/><div className="bg">A</div></div>}
          {this.state.listDataFromChild.dataFromChild==='Home' ? <div className="showPage"><Home activePage={this.getData} jsonData={data}/><div className="bg">A</div></div> : null}
          {this.state.listDataFromChild.dataFromChild==='About' ? <div className="showPage about"><AboutMe /></div> : null}
          {this.state.listDataFromChild.dataFromChild==='Skills' ? <div className="showPage skills"><Skills /></div> : null}
          {this.state.listDataFromChild.dataFromChild==='Work' ? <div className="showPage work"><MyWork /></div> : null}
          {this.state.listDataFromChild.dataFromChild==='Contact' ? <div className="showPage contact"><ContactMe jsonData={data}/></div> : null}   
              
          </div>
            
            <div style={hidePreloader} className="preloader">
              <div className="inner">
                <span className="logo">A</span>
                <span className="thinking">Apoorva is thinking</span>
                <div className="progress-bar">
                  <div className="progress-bar_bg">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

//export default App;
