import React, { Component } from 'react';
import axios from 'axios';

class DataRequest extends Component {

    state = {
      info: {
        station_request: '',
        date_request: '',
      },
      data: []
    }

handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
        ...this.state,
        info: {
            ...this.state.info,
            [event.target.name]: event.target.value,
        },
    })
}

getWxInfo = () => {
    axios({
        method: 'GET',
        url: `/DB_Tests/wx_passer/${this.state.info.station_request}/${this.state.info.date_request}/`,
    }).then(response => {
        this.setState({
            ...this.state,
            data:response.data.data
        })
        console.log(response.data.data)
    }).catch(error => {
        console.log(error)
    })
}

render() {
    return (
      <div className="css_reference_name_if_you_want"> 
        <pre>
            {JSON.stringify(this.state, null, 2)}
        </pre>
        <button onClick={this.getWxInfo}>Get Wx Info</button>
        <input type="text" name='station_request' onChange={this.handleChange} value={this.state.info.station_request}/>
        <input type="date" name='date_request' onChange={this.handleChange} value={this.state.info.date_request}/>
      </div>
    );
  }
}

export default DataRequest;