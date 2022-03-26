import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

const baseUrl = 'https://covid-software.herokuapp.com/Nigeria/'


function App() {
  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState('Nigeria')

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    console.log(country)
    callAPi()
    // setIsFetching(false)

  }

  const callAPi = () => {
    axios.get(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
     } 
    }).then((response) => {
      console.log(response.data);
    });
  }

  useEffect(() => {
    setIsFetching(false)
  })

  return (
    <>
    {isFetching  || isLoading ? (
      <div className='Loader'>
        <p>Fetching</p>
      </div>
    ): (
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
    {isDesktopOrLaptop &&
    <div className="App">

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
      
    </div>
    }
    

    {isTabletOrMobile &&
      <div className='App__body'>


        <div className='App__bodyLeft mobile'>
        {isDesktopOrLaptop ? (<p></p>) : (<p></p>)}
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

  

          
          <div className='App__bodyLeft__sectionRight mobile'>
            <div className='sectionRight__data'>
              <p>Selected Country</p>
              <h2>Nigeria</h2>

              <p>Capital City: Abuja</p>
              <p>Longitude: 9.082 </p>
              <p>Latitude: 9.082</p>
            </div> 
          </div> 


        </div>
        

      </div>    
    }



    

    </div>
    )}
    
    </>
  );
}

export default App;
