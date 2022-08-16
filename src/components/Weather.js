import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyles'
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=51f7bc6721cf61e359bdbb5d68344775'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=569adb4e6e9b390acf9c205013272156'

const Weather = () => {


    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])

    

    if(!data) return null;
    // console.log(data.name)
    return(
    <WeatherContainer>
        
        <h1>{data.main.temp.toFixed(0)}&#176;</h1>
        <p>Dallas, Texas</p>
    </WeatherContainer>
  )
}

export default Weather