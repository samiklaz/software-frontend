import React, {useState, useEffect} from 'react'
import './css/Desktop.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSearch } from 'react-icons/fa';

function Desktop({data, country, handleSubmit, setCountry}) {
  const [value, onChange] = useState(new Date());

  useEffect=(() => {

  }, [data, country])

  return (

    <div className='App'>
      <div className="App__header">

        <div className='App__headerLeft'>
          <span className='text1'>Covid-19</span>
          <span className="text2">Realtime Search Tracker</span>
          
        </div>

        <div className='App__headerRight'>
          <form className='section' onSubmit={handleSubmit}>
            <input placeholder='Search Country' value={country} 
            onChange={(e) => setCountry(e.target.value)} className="input_field"  />

            <FaSearch className='icons' />
          </form>
          
        </div>

        </div>

        <div className='App__body'>


        <div className='App__bodyLeft '>
          <div className='App__bodyLeft__sectionLeft'>

            <div className='sectionLeft__data'>

              <div>
                <p>Confirmed Cases</p>
                <h2>{data.confirmed}</h2>
              </div>
              
            </div>

            <div className='sectionLeft__data text2'>
              <div>
                <p>Recovered Cases</p>
                <h2>{data.recovered}</h2>
              </div>
            </div>

            <div className='sectionLeft__data text3'>
              <div>
                <p>Death</p>
                <h2>{data.deaths}</h2>
              </div>
            </div>

            <div className='sectionLeft__data text4'>
              <div>
                <p>Life Expectancy</p>
                <h2>{data.life_expectancy}</h2>
              </div> 
  
            </div>

          </div>

  

          
          <div className='App__bodyLeft__sectionRight'> 
            <div className='sectionRight__data'>
              <p>Selected Country</p>
              <h2>{data.country}</h2>

              <p>Capital City: {data.capital_city}</p>
              <p>Longitude: {data.lat} </p>
              <p>Latitude: {data.long}</p>
            </div> 
          </div> 


        </div>


        

        <div className='App__bodyRight'>
          <div className="calendar-container">
            <Calendar 
              onChange={onChange} 
              value={value} 
              className="calendae"
            />
          </div>
        </div>
        

      </div>
    </div>

  )
}

export default Desktop