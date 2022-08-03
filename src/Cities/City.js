import '../App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import rain from '../image/rain.png';
import cloud from '../image/cloud.png';
import sun from '../image/sun.png';
import snow from '../image/snow.png';
import moon from '../image/moon.png';



class City extends Component {
constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
      componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render()
  { 
    var weatherImg;
    if (this.props.weather === "Clouds"){
    weatherImg = <img src={cloud} alt="clouds" height="50px" width="50px"/>;
  } else if(this.props.weather === "Rain") {
    weatherImg = <img src={rain} alt="rain" height="50px" width="50px"/>;
  } else if(this.props.weather === "Clear"){
    weatherImg = <img src={sun} alt="sun" height="50px" width="50px"/>;
    } else if(this.props.weather === "Snow") {
    weatherImg = <img src={snow} alt="snow" height="50px" width="50px"/>;
    }
    if (((20 <= (this.state.date.toLocaleTimeString().slice(0 , 2)*1) && (this.state.date.toLocaleTimeString().slice(0 , 2)*1)<=23 )||( 0 <= (this.state.date.toLocaleTimeString().slice(0 , 2)*1)&& (this.state.date.toLocaleTimeString().slice(0 , 2)*1)<=4)) && this.props.weather === "Clear"){
        weatherImg = <img src={moon} alt="moon" height="50px" width="50px"/>;
    } else if ((4 < (this.state.date.toLocaleTimeString().slice(0 , 2)*1) && (this.state.date.toLocaleTimeString().slice(0 , 2)*1) < 20) && this.props.weather === "Clear"){
        weatherImg = <img src={sun} alt="sun" height="50px" width="50px"/>;
    }
         return (

    <div className="City">
        <div className="title">
            <h1>{this.props.cityName}|{this.props.country}</h1>
        </div>
        <div className="temp">
            <h1>{this.props.temp}&#176;</h1>
        </div>
        <div className="Weather">
            <h1>{this.props.weather}</h1>
            <span>{weatherImg}</span>
        </div>

    </div>
  )
}}

export default City;