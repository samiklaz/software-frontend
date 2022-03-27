import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import Desktop from './pages/Desktop';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoaded: false,
      country : 'Nigeria'
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("callinf it")
    this.callAPi()
  }

  setCountry = (value) => {
    this.setState({
      country: value,
    })

  }

  callAPi = () => {
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
        alert("Country does'nt exist or it wasn't spelt well. Try again!!!")
      }
      else {
        alert("An error occured. Try again")
      }
    })
    .catch(error => {
      // setIsLoading(false)
      console.log("ERROR is here", error);
      
    })
  }

  componentDidMount() {
    this.callAPi()
  }
  render() {

    var {isLoaded, data, country} = this.state

    if(!isLoaded) {
      return (
        <div>Loading.....</div>
      )
    } else {
      {console.log("This is the data in body", data)}
      return (
        <Desktop country={country} handleSubmit={this.handleSubmit} setCountry={this.setCountry} data={data} />
      )
    }
    
    
  }
}

export default App