import React from 'react'
import './App.css'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

const api = {
    key: '6d05be9e25aac2e68220fc6206bcc67e',
    baseURL: 'https://api.openweathermap.org/data/2.5/'
}



export default class WeatherSearch extends React.Component {
    state = {
        userInput: '',
        results: [],
        timeResults: [],
    }


    search = async () => {
       await axios.get(`${api.baseURL}weather?q=${this.state.userInput}&appid=${api.key}&units=imperial`)
            .then(res => {
                document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + this.state.userInput + " city')"
                this.setState({ results: res.data })
            })

    }

    getTime =  () => {
        axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=${'4a96567e937a428da240ffd94bc5a1e6'}&location=${this.state.userInput}`)
        .then(res => {
            
            let data = res.data.datetime.split('').slice(11).join(' ')
            this.setState({ timeResults: data })
        })
    }


    render() {
        return (
            <body style={{ backgroundImage: `url(${'images/luca-bravo-TaCk3NspYe0-unsplash.jpg'})` }}>
                <div className='new-container'>
                    <h3 className='get-weather'>Get Weather</h3>
                    <div className='submit-button'>
                        <input placeholder='Enter City' className='city-input' onChange={(e) => this.setState({ userInput: e.target.value })}></input>
                        <button className='submit' onClick={this.search}><FaSearch /></button>

                    </div>
                    {(typeof this.state.results.main != 'undefined') ? (

                        <div className='results-container'>


                            <h2 className="city-name">{this.state.results.name}</h2>
                            <h1 className="degrees">{Math.round(this.state.results.main.temp) + '˚F'}</h1>
                            <img src={`https://openweathermap.org/img/wn/${this.state.results.weather[0].icon}.png`}></img>
                            <h3 className="skys">{this.state.results.weather[0].description}</h3>
                            <h3 className="time">{this.state.timeResults}</h3>

                        </div>
                    ) : ('')}
                </div>
            </body>

        )
    }
    // componentDidMount() {
    //     setInterval(() => {
    //         this.getTime()
    //     }, 100);
    // }

}