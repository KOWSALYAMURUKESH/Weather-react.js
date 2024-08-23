import { useState } from "react"
import axios from "axios";
import image from "./images/backgroundimage.jpg"


function Weather()
{
 const [city,setCity] = useState("")
const [weather,setweather] = useState("")
const [temp,settemp] = useState("")
const [desc,setdesc] = useState("")




 function handleCity(evt)
 {

    setCity(evt.target.value)

 }
 function getWeather()
 {
  var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec6c501f9fe13f36e880c102ba071a42`)
 
weatherData.then(function(success){
  console.log(success.data)
  setweather(success.data.weather[0].main)
  settemp(success.data.main.temp)
  setdesc(success.data.weather[0].main)
})

}

 
  return(
    
    <div className="h-screen bg-cover bg-center grid items-center justify-center text-white" style={{backgroundImage:`url(${image})`}}  >
      <div >
        <h1 className="text-4xl font-bold p-2">Weather Report</h1>
        <p>I can give you Weather report about your city!</p>
        <input type="text" onChange={handleCity}  className="text-black border border-black rounded-md  p-2 mt-3" placeholder = "Enter your City Name"></input><br></br>
        <button onClick={getWeather} className="bg-slate-900 text-white rounded-md  mt-3 p-2">Get Report</button>   
      
       <div >
        <h1><b>Weather:</b>{weather}</h1>
        <h1><b>Temperature:</b>{temp}</h1>
        <h1><b>Description:</b>{desc}</h1>
       </div>
       </div>
    </div>
    
  )
}
export default Weather