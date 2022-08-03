import '../App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CityInfo from '../Kharkiv/CityInfo'
import City from '../Cities/City';
import Clock from '../Clock/Clock';
import {Link} from 'react-router-dom';
class Page extends Component {
  render(){
      return (
    <div className="Page">
        <div className="Bar">
            <Clock/>
        </div>
        <div className="cities">
            <Link to ='/Kharkiv'>
                <City
                  cityName = {this.props.store.getState().Kharkiv[0].name}  
                  temp ={(this.props.store.getState().Kharkiv[0].main.temp- 273).toFixed(0)}
                  weather={this.props.store.getState().Kharkiv[0].weather[0].main}
                  country = {this.props.store.getState().Kharkiv[0].sys.country}
                 />
            </Link>
            <Link to ='/Odesa'>
                <City
                  cityName = {this.props.store.getState().Odesa[0].name}  
                  temp ={(this.props.store.getState().Odesa[0].main.temp- 273).toFixed(0)}
                  weather={this.props.store.getState().Odesa[0].weather[0].main}
                  country = {this.props.store.getState().Odesa[0].sys.country}
                  />
            </Link>
            <Link to ='/Kyiv'>
                <City
                 cityName = {this.props.store.getState().Kyiv[0].name}
                 temp ={(this.props.store.getState().Kyiv[0].main.temp- 273).toFixed(0)}
                 weather={this.props.store.getState().Kyiv[0].weather[0].main}
                  country = {this.props.store.getState().Kyiv[0].sys.country}
                 />
            </Link>
            <Link to ='/Valensia'>
                <City
                  cityName = {this.props.store.getState().Valencia[0].name}
                 temp ={(this.props.store.getState().Valencia[0].main.temp- 273).toFixed(0)}
                 weather={this.props.store.getState().Valencia[0].weather[0].main}
                  country = {this.props.store.getState().Valencia[0].sys.country}
                 />
            </Link>
            <Link to ='/Barcelona'>
                <City
                 cityName = {this.props.store.getState().Barcelona[0].name}
                 temp ={(this.props.store.getState().Barcelona[0].main.temp- 273).toFixed(0)}
                 weather={this.props.store.getState().Barcelona[0].weather[0].main}
                  country = {this.props.store.getState().Barcelona[0].sys.country}
                 />
             </Link>
             <Link to ='/NewYork'>
                <City
                 cityName = {this.props.store.getState().NewYork[0].name}
                 temp ={(this.props.store.getState().NewYork[0].main.temp- 273).toFixed(0)}
                 weather={this.props.store.getState().NewYork[0].weather[0].main}
                  country = {this.props.store.getState().NewYork[0].sys.country}
                 />
             </Link>
        </div>
    </div>
  )
}}

export default Page;
