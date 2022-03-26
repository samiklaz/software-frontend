import React, {useState, useEffect} from 'react'
import './css/Desktop.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSearch } from 'react-icons/fa';

function Desktop() {
  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState('Nigeria')

  const baseUrl = `http://127.0.0.1:8000/${country}/`

  return (

      <div className='App__body'>


        <div className='App__bodyLeft '>
          <div className='App__bodyLeft__sectionLeft'>

            <div className='sectionLeft__data'>

              <div>
                <p>Confirmed Cases</p>
                <h2>1000</h2>
              </div>
              
            </div>

            <div className='sectionLeft__data text2'>
              <div>
                <p>Recovered Cases</p>
                <h2>1000</h2>
              </div>
            </div>

            <div className='sectionLeft__data text3'>
              <div>
                <p>Death</p>
                <h2>1000</h2>
              </div>
            </div>

            <div className='sectionLeft__data text4'>
              <div>
                <p>Life Expectancy</p>
                <h2>1000</h2>
              </div> 
  
            </div>

          </div>

  

          
          <div className='App__bodyLeft__sectionRight'> 
            <div className='sectionRight__data'>
              <p>Selected Country</p>
              <h2>Nigeria</h2>

              <p>Capital City: Abuja</p>
              <p>Longitude: 9.082 </p>
              <p>Latitude: 9.082</p>
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
      

  )
}

export default Desktop