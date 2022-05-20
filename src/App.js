import './App.css';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CityInfo from './Kharkiv/CityInfo'
import Page from './Page/Page';
import {BrowserRouter , HashRouter , Route , Routes} from 'react-router-dom';

class App extends Component {
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
        countryUsa: '',
        tempfeelKharkiv: '',
        tempfeelOdesa: '',
        tempfeelKyiv: '',
        tempfeelLviv: '',
        tempfeelNewYork: '',
        tempfeelBarcelona: '',
        pressureKharkiv:'',
        pressureOdesa:'',
        pressureKyiv:'',
        pressureLviv:'',
        pressureNewYork:'',
        pressureBarcelona:'',
        windKharkiv:'',
        windOdesa:'',
        windKyiv:'',
        windLviv:'',
        windNewYork:'',
        windBarcelona:'',
        humidityKharkiv:'',
        humidityKyiv:'',
        humidityLviv:'',
        humidityOdesa:'',
        humidityNewYork:'',
        humidityBarcelona:'',
        visibilityKharkiv:'',
        visibilityOdesa:'',
        visibilityKyiv:'',
        visibilityLviv:'',
        visibilityNewYork:'',
        visibilityBarcelona:'',
        cloudsKharkiv: '',
        cloudsOdesa: '',
        cloudsKyiv: '',
        cloudsLviv: '',
        cloudsNewYork: '',
        cloudsBarcelona: '',
        descriptionKharkiv: '',
        descriptionOdesa: '',
        descriptionKyiv: '',
        descriptionLviv: '',
        descriptionNewYork: '',
        descriptionBarcelona: ''
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
                 descriptionKharkiv: dataKharkiv.weather[0].description,
                 descriptionOdesa: dataOdesa.weather[0].description,
                 descriptionKyiv: dataKyiv.weather[0].description,
                 descriptionLviv: dataLviv.weather[0].description,
                 descriptionNewYork: dataNewYork.weather[0].description,
                 descriptionBarcelona: dataBarcelona.weather[0].description,
                 cloudsKharkiv : dataKharkiv.clouds.all,
                 cloudsOdesa : dataOdesa.clouds.all,
                 cloudsKyiv : dataKyiv.clouds.all,
                 cloudsLviv : dataLviv.clouds.all,
                 cloudsNewYork : dataNewYork.clouds.all,
                 cloudsBarcelona: dataBarcelona.clouds.all,
                 visibilityKharkiv: dataKharkiv.visibility,
                 visibilityOdesa: dataOdesa.visibility,
                 visibilityKyiv: dataKyiv.visibility,
                 visibilityLviv: dataLviv.visibility,
                 visibilityNewYork: dataNewYork.visibility,
                 visibilityBarcelona: dataBarcelona.visibility,
                 humidityKharkiv: dataKharkiv.main.humidity,
                 humidityOdesa: dataOdesa.main.humidity,
                 humidityLviv: dataLviv.main.humidity,
                 humidityKyiv: dataKyiv.main.humidity,
                 humidityNewYork: dataNewYork.main.humidity,
                 humidityBarcelona: dataBarcelona.main.humidity,
                 windKharkiv: (dataKharkiv.wind.speed),
                 windOdesa: (dataOdesa.wind.speed),
                 windKyiv: (dataKyiv.wind.speed),
                 windLviv: (dataLviv.wind.speed),
                 windNewYork: (dataNewYork.wind.speed),
                 windBarcelona: (dataBarcelona.wind.speed),
                 pressureKharkiv: (dataKharkiv.main.pressure * 0.750063755).toFixed(1),
                 pressureOdesa: (dataOdesa.main.pressure * 0.750063755).toFixed(1),
                 pressureKyiv: (dataKyiv.main.pressure * 0.750063755).toFixed(1),
                 pressureLviv: (dataLviv.main.pressure * 0.750063755).toFixed(1),
                 pressureNewYork: (dataNewYork.main.pressure * 0.750063755).toFixed(1),
                 pressureBarcelona: (dataBarcelona.main.pressure * 0.750063755).toFixed(1),
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
                 tempfeelKharkiv: (dataKharkiv.main.feels_like - 273).toFixed(0),
                 tempfeelOdesa: (dataOdesa.main.feels_like - 273).toFixed(0),
                 tempfeelKyiv: (dataKyiv.main.feels_like - 273).toFixed(0),
                 tempfeelLviv: (dataLviv.main.feels_like - 273).toFixed(0),
                 tempfeelNewYork: (dataNewYork.main.feels_like - 273).toFixed(0),
                 tempfeelBarcelona: (dataBarcelona.main.feels_like - 273).toFixed(0),
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
    console.log(this.state.descriptionKharkiv)
      return (
    <div className="App">
      <HashRouter>
        <Routes><Route  path = '/' element = {<Page/>} ></Route> </Routes>
        <Routes><Route  path = '/Kharkiv' element = { <CityInfo 
            name = {this.state.cityKharkiv} 
            country ={ this.state.countryUkraine} 
            temp={this.state.tempKharkiv}
            feels={this.state.tempfeelKharkiv}
            pressure={this.state.pressureKharkiv}
            wind={this.state.windKharkiv}
            humidity={this.state.humidityKharkiv}
            visibility ={this.state.visibilityKharkiv}
            clouds ={this.state.cloudsKharkiv}
            description ={this.state.descriptionKharkiv}
            weather = {this.state.weatherKharkiv}
            />} ></Route></Routes >
        <Routes><Route  path = '/Odesa' element = { <CityInfo
            name = {this.state.cityOdesa}
            country ={ this.state.countryUkraine}
            temp={this.state.tempOdesa}
            feels={this.state.tempfeelOdesa}
            pressure={this.state.pressureOdesa}
            wind={this.state.windOdesa}
            humidity={this.state.humidityOdesa}
            visibility ={this.state.visibilityOdesa}
            clouds ={this.state.cloudsOdesa}
            description ={this.state.descriptionOdesa}
            weather = {this.state.weatherOdesa}
            />} ></Route></Routes >
        <Routes><Route  path = '/Lviv' element = { <CityInfo 
            name = {this.state.cityLviv}
            country ={ this.state.countryUkraine}
            temp={this.state.tempLviv}
            feels={this.state.tempfeelLviv}
            pressure={this.state.pressureLviv}
            wind={this.state.windLviv}
            humidity={this.state.humidityLviv}
            visibility ={this.state.visibilityLviv}
            clouds ={this.state.cloudsLviv}
            description ={this.state.descriptionLviv}
            weather = {this.state.weatherLviv}
            />} ></Route></Routes >
        <Routes><Route  path = '/Kyiv' element = { <CityInfo
            name = {this.state.cityKyiv}
            country ={ this.state.countryUkraine}
            temp={this.state.tempKyiv}
            feels={this.state.tempfeelKyiv}
            pressure={this.state.pressureKyiv}
            wind={this.state.windKyiv}
            humidity={this.state.humidityKyiv}
            visibility ={this.state.visibilityKyiv}
            clouds ={this.state.cloudsKyiv}
            description ={this.state.descriptionKyiv}
            weather = {this.state.weatherKyiv}
            />} ></Route></Routes >
        <Routes><Route  path = '/Barcelona' element = { <CityInfo
            name = {this.state.cityBarcelona}
            country ={ this.state.countrySpain}
            temp={this.state.tempBarcelona}
            feels={this.state.tempfeelBarcelona}
            pressure={this.state.pressureBarcelona}
            wind={this.state.windBarcelona}
            humidity={this.state.humidityBarcelona}
            visibility ={this.state.visibilityBarcelona}
            clouds ={this.state.cloudsBarcelona}
            description ={this.state.descriptionBarcelona}
            weather = {this.state.weatherBarcelona}
            />} ></Route></Routes >
        <Routes><Route  path = '/NewYork' element = { <CityInfo
            name = {this.state.cityNewYork}
            country ={ this.state.countryUsa}
            temp={this.state.tempNewYork}
            feels={this.state.tempfeelNewYork}
            pressure={this.state.pressureNewYork}
            wind={this.state.windNewYork}
            humidity={this.state.humidityNewYork}
            visibility ={this.state.visibilityNewYork}
            clouds ={this.state.cloudsNewYork}
            description ={this.state.descriptionNewYork}
            weather = {this.state.weatherNewYork}
            />} ></Route></Routes >
      </HashRouter>
    </div>
  )
}}

export default App;
