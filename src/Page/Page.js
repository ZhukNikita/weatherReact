import '../App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CityInfo from '../Kharkiv/CityInfo'
import City from '../Cities/City';
import Clock from '../Clock/Clock';
import {Link} from 'react-router-dom';

class Page extends Component {
 constructor(props) {
      super(props);
      this.state = {
        countryUkraine: '',
        weatherKharkiv: '',
        tempKharkiv: null,
        tempKyiv: null,
        tempOdesa: null,
        cityOdesa: '',
        cityKyiv: '',
        cityKharkiv: '',
        countrySpain: '',
        countryUsa: ''
      };
    }
    async componentDidMount() {
                const dataKharkiv = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.988358&lon=36.232845&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                const dataOdesa = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=46.482952&lon=30.712481&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                const dataKyiv = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.4260&lon=30.5145&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                const dataLviv = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.842957&lon=24.031111&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                const dataBarcelona = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                const dataNewYork = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.7067&lon=-74.0094&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
                this.setState({
                 dataLviv,
                 dataNewYork,
                 dataBarcelona,
                 dataKharkiv,
                 dataOdesa,
                 dataKyiv,
                 weatherKharkiv: dataKharkiv.weather[0].main,
                 weatherNewYork: dataNewYork.weather[0].main,
                 weatherBarcelona: dataBarcelona.weather[0].main,
                 weatherLviv: dataLviv.weather[0].main,
                 weatherKyiv: dataKyiv.weather[0].main,
                 weatherOdesa: dataOdesa.weather[0].main,
                 cityKharkiv: dataKharkiv.name,
                 cityBarcelona: dataBarcelona.name,
                 cityOdesa: dataOdesa.name,
                 cityKyiv: dataKyiv.name,
                 cityLviv: dataLviv.name,
                 cityNewYork: dataNewYork.name,
                 tempKharkiv: (dataKharkiv.main.temp - 273).toFixed(0),
                 tempNewYork: (dataNewYork.main.temp - 273).toFixed(0),
                 tempKyiv: (dataKyiv.main.temp - 273).toFixed(0),
                 tempOdesa: (dataOdesa.main.temp - 273).toFixed(0),
                 tempLviv: (dataLviv.main.temp - 273).toFixed(0),
                 tempBarcelona: (dataBarcelona.main.temp - 273).toFixed(0),
                 countryUkraine: dataOdesa.sys.country,
                 countrySpain: dataBarcelona.sys.country,
                 countryUsa: dataNewYork.sys.country
                });
            }

  render() {
      return (
    <div className="Page">
        <div className="Bar">
            <Clock/>
        </div>
        <div className="cities">
            <Link to ='/Kharkiv'>
                <City
                 cityName = {this.state.cityKharkiv}
                 country = {this.state.countryUkraine}
                 temp ={this.state.tempKharkiv}
                 weather={this.state.weatherKharkiv}/>
            </Link>
            <Link to ='/Odesa'>
                <City
                 cityName = {this.state.cityOdesa}
                 country = {this.state.countryUkraine}
                 temp ={this.state.tempOdesa}
                 weather={this.state.weatherOdesa}/>
            </Link>
            <Link to ='/Kyiv'>
                <City
                 cityName = {this.state.cityKyiv}
                 country = {this.state.countryUkraine}
                 temp ={this.state.tempKyiv}
                 weather={this.state.weatherKyiv}/>
            </Link>
            <Link to ='/Lviv'>
                <City
                 cityName = {this.state.cityLviv}
                 country = {this.state.countryUkraine}
                 temp ={this.state.tempLviv}
                 weather={this.state.weatherLviv}/>
            </Link>
            <Link to ='/Barcelona'>
                <City
                 cityName = {this.state.cityBarcelona}
                 country = {this.state.countrySpain}
                 temp ={this.state.tempBarcelona}
                 weather={this.state.weatherBarcelona}/>
             </Link>
             <Link to ='/NewYork'>
                <City
                 cityName = {this.state.cityNewYork}
                 country = {this.state.countryUsa}
                 temp ={this.state.tempNewYork}
                 weather={this.state.weatherNewYork}/>
             </Link>
        </div>
    </div>
  )
}}

export default Page;
