import '../App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import temp from '../image/temp.png';



class CityInfo extends Component{
  render(){
    let country = '';
    if (this.props.country === 'UA'){
        country = 'Ukraine';
    } else if(this.props.country === 'ES'){
        country = 'Spain' ;
    } else if(this.props.country === 'US'){
        country = 'The United States'
    }
      return (
   
    <div className="CityInfo">
        <div className="city"><h1>Welcome to {this.props.name} | {country}</h1></div>
        <div className="tempflex">
            <div className="tempInfo"><h1>{this.props.temp} C&#176;</h1></div>
            <div className="doubleflex">
                <div><h2>Feels like: {this.props.feels} C&#176;</h2></div>
                <div><h2 style={{fontSize : "30px"}}>Weather: {this.props.weather}</h2></div>
            </div>
        </div>
        <div className="infoblock">
            <div><h2>Wind: {this.props.wind} m/s</h2></div> 
            <div><h2>Pressure: {this.props.pressure} mmHg</h2></div> 
            <div><h2>Humidity: {this.props.humidity} %</h2></div> 
            <div><h2>Visibility: {this.props.visibility} m</h2></div> 
            <div><h2>Cloudiness: {this.props.clouds} %</h2></div> 
            <div><h2>Weather description: {this.props.description}</h2></div> 
        </div>
    </div>
  )
}
}
export default CityInfo;