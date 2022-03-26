import React, {useState, useEffect} from 'react'
import './css/Desktop.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSearch } from 'react-icons/fa';

function Ipad() {
  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState('Nigeria')

  const baseUrl = `http://127.0.0.1:8000/${country}/`

  const [data, setData] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const info = data.data
  
  return (
    <div className='App__body'>
        <div className='App__bodyLeft mobile'>
          <div className='App__bodyLeft__sectionLeft'>

            <div className='sectionLeft__data'>

              <div>
                <p>Confirmed Cases</p>
                {console.log('Data in the body', data.data)}
                <h2>{info.confirmed}</h2>
              </div>
              
            </div>

            <div className='sectionLeft__data text2'>
              <div>
                <p>Recovered Cases</p>
                <h2>{info.recovered}</h2>
              </div>
            </div>

            <div className='sectionLeft__data text3'>
              <div>
                <p>Death</p>
                <h2>{info.deaths}</h2>
              </div>
            </div>

            <div className='sectionLeft__data text4'>
              <div>
                <p>Life Expectancy</p>
                <h2>{info.life_expectancy}</h2>
              </div> 
  
            </div>

          </div>

  

          
          <div className='App__bodyLeft__sectionRight mobile'>
            <div className='sectionRight__data'>
              <p>Selected Country</p>
              <h2>{info.country}</h2>

              <p>Capital City: {info.capital_city}</p>
              <p>Longitude: {info.lat} </p>
              <p>Latitude: {info.long}</p>
            </div> 
          </div> 


        </div>
        

      </div>    
  )
}

export default Ipad