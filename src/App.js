import './App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CityInfo from './Kharkiv/CityInfo'
import Page from './Page/Page';
import {BrowserRouter , HashRouter , Route , Routes} from 'react-router-dom';
class App extends Component {

  render() {
      return (
    <div className="App">
      <HashRouter>
        <Routes><Route path = '/Kharkiv' element = { <CityInfo 
            name = {this.props.store.getState().Kharkiv[0].name}
            temp ={(this.props.store.getState().Kharkiv[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().Kharkiv[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().Kharkiv[0].weather[0].main}
            pressure={(this.props.store.getState().Kharkiv[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().Kharkiv[0].sys.country}
            wind={this.props.store.getState().Kharkiv[0].wind.speed}
            humidity={this.props.store.getState().Kharkiv[0].main.humidity}
            visibility ={this.props.store.getState().Kharkiv[0].visibility}
            clouds ={this.props.store.getState().Kharkiv[0].clouds.all}
            description ={this.props.store.getState().Kharkiv[0].weather[0].description}
            />} ></Route></Routes >
        <Routes><Route  path = '/Odesa' element = { <CityInfo
            name = {this.props.store.getState().Odesa[0].name}
            temp ={(this.props.store.getState().Odesa[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().Odesa[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().Odesa[0].weather[0].main}
            pressure={(this.props.store.getState().Odesa[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().Odesa[0].sys.country}
            wind={this.props.store.getState().Odesa[0].wind.speed}
            humidity={this.props.store.getState().Odesa[0].main.humidity}
            visibility ={this.props.store.getState().Odesa[0].visibility}
            clouds ={this.props.store.getState().Odesa[0].clouds.all}
            description ={this.props.store.getState().Odesa[0].weather[0].description}
            />} ></Route></Routes >
        <Routes><Route  path = '/Valensia' element = { <CityInfo 
            name = {this.props.store.getState().Valencia[0].name}
            temp ={(this.props.store.getState().Valencia[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().Valencia[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().Valencia[0].weather[0].main}
            pressure={(this.props.store.getState().Valencia[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().Valencia[0].sys.country}
            wind={this.props.store.getState().Valencia[0].wind.speed}
            humidity={this.props.store.getState().Valencia[0].main.humidity}
            visibility ={this.props.store.getState().Valencia[0].visibility}
            clouds ={this.props.store.getState().Valencia[0].clouds.all}
            description ={this.props.store.getState().Valencia[0].weather[0].description}
            />} ></Route></Routes >
        <Routes><Route  path = '/Kyiv' element = { <CityInfo
            name = {this.props.store.getState().Kyiv[0].name}
            temp ={(this.props.store.getState().Kyiv[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().Kyiv[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().Kyiv[0].weather[0].main}
            pressure={(this.props.store.getState().Kyiv[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().Kyiv[0].sys.country}
            wind={this.props.store.getState().Kyiv[0].wind.speed}
            humidity={this.props.store.getState().Kyiv[0].main.humidity}
            visibility ={this.props.store.getState().Kyiv[0].visibility}
            clouds ={this.props.store.getState().Kyiv[0].clouds.all}
            description ={this.props.store.getState().Kyiv[0].weather[0].description}
            />} ></Route></Routes >
        <Routes><Route  path = '/Barcelona' element = { <CityInfo
            name = {this.props.store.getState().Barcelona[0].name}
            temp ={(this.props.store.getState().Barcelona[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().Barcelona[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().Barcelona[0].weather[0].main}
            pressure={(this.props.store.getState().Barcelona[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().Barcelona[0].sys.country}
            wind={this.props.store.getState().Barcelona[0].wind.speed}
            humidity={this.props.store.getState().Barcelona[0].main.humidity}
            visibility ={this.props.store.getState().Barcelona[0].visibility}
            clouds ={this.props.store.getState().Barcelona[0].clouds.all}
            description ={this.props.store.getState().Barcelona[0].weather[0].description}
            />} ></Route></Routes >
        <Routes><Route  path = '/NewYork' element = { <CityInfo
            name = {this.props.store.getState().NewYork[0].name}
            temp ={(this.props.store.getState().NewYork[0].main.temp- 273).toFixed(0)}
            feels ={(this.props.store.getState().NewYork[0].main.feels_like- 273).toFixed(0)}
            weather={this.props.store.getState().NewYork[0].weather[0].main}
            pressure={(this.props.store.getState().NewYork[0].main.pressure* 0.750063755).toFixed(1)}
            country = {this.props.store.getState().NewYork[0].sys.country}
            wind={this.props.store.getState().NewYork[0].wind.speed}
            humidity={this.props.store.getState().NewYork[0].main.humidity}
            visibility ={this.props.store.getState().NewYork[0].visibility}
            clouds ={this.props.store.getState().NewYork[0].clouds.all}
            description ={this.props.store.getState().NewYork[0].weather[0].description}
            />} ></Route></Routes >
            <Routes><Route path = "/" element = {<Page store = {this.props.store}/>} ></Route> </Routes>
      </HashRouter>
    </div>
  )
}}

export default App;
