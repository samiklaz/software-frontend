import React, { Component } from 'react'
import axios from 'axios'
import Desktop from './pages/Desktop';
import './App.css'

export class App extends Component {

  

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoaded: false,
      country : 'Nigeria',
      matches: window.matchMedia("min-width: 768px")
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("calling it")
    this.callAPi()
  }

  setCountry = (value) => {
    this.setState({
      country: value,
    })

  }

  callAPi = () => {
    this.setState({
      isLoaded: false
    })

    // This baseUrl is used when docker is running on a Local machine on URL http://127.0.0.1:8000/
    const baseUrl = `http://127.0.0.1:8000/${this.state.country}/`


    axios.get(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
     } 
    }).then((response) => {

      // console.log("Response is here === ", response.data);

      if(response.data.status == "successful" && response.data.message == "case_created_successfully") {
        this.setState({
          isLoaded: true,
          data : response.data
        })
      }
     

      else if(response.data.status == 'failed' && response.data.message == "invalid_country") {
        this.setState({
          isLoaded: true
        })
        alert("Country does'nt exist or it wasn't spelt well. Try again!!!")
      }
      else {
        this.setState({
          isLoaded: true
        })
        alert("An error occured. Try again")
      }
    })
    .catch(error => {
      // setIsLoading(false)
      this.setState({
        isLoaded: true
      })
      console.log("ERROR is here", error);
      alert("You are experiencing a network issue. It's either your data connection is off or you are referencing the wrong url")
      
    })
  }

  componentDidMount() {
    this.callAPi()
  }
  render() {

    var {isLoaded, data, country, matches} = this.state

    if(!isLoaded) {
      return (
        <div className='Loading'>
          <p>Loading.....</p>
        </div>
      )
    } else {
      {console.log("This is the data in body", data)}
      return (
        <>
          {matches && (
            <Desktop country={country} handleSubmit={this.handleSubmit} setCountry={this.setCountry} data={data} />
          )}

          {!matches && (
            <p>Not customized for this screen</p>
          )}
          
        </>
      )
    }
    
    
  }
}

export default App