import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import "./css/Desktop.css"


const Desktop = () => {

  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState('Nigeria')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(country)
  }


  return (
    <div className="App">
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


        <div className='App__bodyLeft'>
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

const styles = StyleSheet.create({})