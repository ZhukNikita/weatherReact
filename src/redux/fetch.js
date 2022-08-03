import store from './redux.js';

export default async function GetData(){
  const dataKharkiv = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.988358&lon=36.232845&appid=22b1feac19e93a3e4864c48f21a08e49')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });
  const dataValencia = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.466667&lon=-0.375000&appid=8ca70ff9b07bd092baa5b99b1c64253d')
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
const dataOdesa = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=46.482952&lon=30.712481&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });
                });  
const dataBarcelona = await  new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data) ;
                    
                  });})
const dataNewYork = await new Promise((res) => {
                fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.7067&lon=-74.0094&appid=8ca70ff9b07bd092baa5b99b1c64253d')
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    res(data);
                  });});
store.dispatch({type: 'ADD_Kharkiv' , payload: dataKharkiv })
store.dispatch({type: 'ADD_Valencia' , payload: dataValencia })
store.dispatch({type: 'ADD_Kyiv' , payload: dataKyiv })
store.dispatch({type: 'ADD_Odesa' , payload: dataOdesa })
store.dispatch({type: 'ADD_Barcelona' , payload: dataBarcelona })
store.dispatch({type: 'ADD_NewYork' , payload: dataNewYork })
}
GetData()