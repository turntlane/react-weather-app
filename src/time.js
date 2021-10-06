import React from 'react'
import './App.css'
import axios from 'axios'

export default class Time extends React.Component {
        state = {
            timeResults: [],
            userInput: this.props
        }


        getTime = async () => {
            await axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=${'4a96567e937a428da240ffd94bc5a1e6'}&location=${this.state.userInput}`)
             .then(res => {
               let data = res.data.datetime.split('').slice(11).join(' ')
               this.setState({timeResults: data})
             })
         }



         render() {
             


             return (

             )
         }
}