import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {GetData} from'./fetch.js'
export const initialState = {
  Kharkiv : [{ id: 1  ,
  name: '' ,
  main:{temp: 273, humidity: 0 ,feels_like: 273, pressure: 0 },
  weather:[{main: '' , description: ''}],
  sys: {country: ''},
  clouds: {all: ''},
  wind: {speed: ''},
  visibility: 0,
  }],
  Valencia : [{ id: 1  ,
    name: '',
    main:{temp: 273 , humidity: 0, feels_like: 273, pressure: 0 },
    weather:[{main: '', description: ''}],
    sys: {country: ''},
    wind: {speed: ''},
    visibility: 0,
    clouds: {all: ''},
  }],
  Kyiv : [{ id: 1  ,
    name: '',
    main:{temp: 273, humidity: 0, feels_like: 273, pressure: 0},
    weather:[{main: '', description: ''}],
    sys: {country: ''},
    wind: {speed: ''},
    visibility: 0,
    clouds: {all: ''},
  }],
  Odesa : [{ id: 1  ,
    name: '',
    main:{temp: 273, humidity: 0, feels_like: 273, pressure: 0 },
    weather:[{main: '', description: ''}],
    sys: {country: ''},
    wind: {speed: ''},
    visibility: 0,
    clouds: {all: ''},
  }],
  Barcelona : [{ id: 1  ,
  name: '',
  main:{temp: 273, humidity: 0, feels_like: 273, pressure: 0 },
  weather:[{main: '', description: ''}],
  sys: {country: ''},
  wind: {speed: ''},
  visibility: 0,
  clouds: {all: ''},
}],
  NewYork : [{ id: 1  ,
    name: '',
    main:{temp: 273, humidity: 0, feels_like: 273, pressure: 0 },
    weather:[{main: '', description: ''}],
    sys: {country: ''},
    wind: {speed: ''},
    visibility: 0,
    clouds: {all: ''},
  }],
}
const store = createStore(weather , composeWithDevTools(applyMiddleware(thunk)));
function weather(state = initialState , action) {
  if (action.type === 'ADD_data'){
    return {
    ...state,
    WeatherData : [...state.WeatherData , action.payload]
    }
  }
    if (action.type === 'ADD_Kharkiv'){
        return {
          ...state,
            Kharkiv: state.Kharkiv.map(Kharkiv => {
            if (Kharkiv.id === 1) {
               return action.payload;
            }
            return Kharkiv
  })}}
     if (action.type === 'ADD_Valencia'){
    return {
    ...state,
     Valencia: state.Valencia.map(Valencia => {
            if (Valencia.id === 1) {
               return action.payload;
            }
            return Valencia
  })}}
          if (action.type === 'ADD_Kyiv'){
    return {
    ...state,
     Kyiv: state.Kyiv.map(Kyiv => {
            if (Kyiv.id === 1) {
               return action.payload;
            }
            return Kyiv
  })}}
      if (action.type === 'ADD_Odesa'){
        return {
          ...state,
            Odesa: state.Odesa.map(Odesa => {
            if (Odesa.id === 1) {
               return action.payload;
            }
            return Odesa
  })}}
      if (action.type === 'ADD_Barcelona'){
        return {
          ...state,
            Barcelona: state.Barcelona.map(Barcelona => {
            if (Barcelona.id === 1) {
               return action.payload;
            }
            return Barcelona
  })}}
        if (action.type === 'ADD_NewYork'){
        return {
          ...state,
            NewYork: state.NewYork.map(NewYork => {
            if (NewYork.id === 1) {
               return action.payload;
            }
            return NewYork
  })}}
  return state
}
store.subscribe(() =>{ console.log(store.getState());});
export default store ;