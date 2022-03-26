import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, {useEffect, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import Desktop from './pages/Desktop';
import Ipad from './pages/Ipad';

// const baseUrl = 'https://covid-software.herokuapp.com/Nigeria/'



function App() {
  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState('Nigeria')


  const baseUrl = `http://127.0.0.1:8000/${country}/`

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const [data, setData] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const info = data.data

  const callAPi = () => {
    axios.get(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
     } 
    }).then((response) => {

      console.log("Response is here === ", response.data);

      if(response.data.status == "successful" && response.data.message == "case_created_successfully") {
        let data = response.data
        setData({data})
        console.log("This is the data in the state", data)
        console.log("This is the confirmed cases", data.confirmed)
      }

      else if(response.data.status == 'failed' && response.data.message == "invalid_country") {
        alert("Country does'nt exist or it wasn't spelt well. Try again!!!")
      }
      else {
        alert("An error occured. Try again")
      }
    })
    .catch(error => {
      setIsLoading(false)
      console.log("ERROR is here", error);
      
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsFetching(true)
    console.log(country)
    callAPi()
    setIsFetching(false)
  }

  

  useEffect(() => {
    setIsLoading(false)
  }, [data])

  return (
    <>
    
    {isLoading ? (
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
     <Desktop />
    }
    

    {isTabletOrMobile &&
      <Ipad />
    }

    </div>
    )}
    
    </>
  );
}

export default App;
