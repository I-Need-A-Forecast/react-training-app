import React, { Component } from 'react';
import axios from 'axios';


class test_App extends Component {

    state = {
      info: {
        box_1: '',
        box_2: '',
      },
      status: null,
    }

    handleClick = () => {
      axios({
        method: 'GET',
        url: '/DB_Tests/wx_passer/kmsp/2019-02-17/',
      }).then( response => {
        console.log(response.data);
        
      }).catch(error => {
        console.log(error);
        
      })
    }

    render() {
        return (
          <div className="test_App">
            <h3>{this.props.person}</h3> 
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
            <button onClick={this.handleClick}>Get Data</button>
          </div>
        );
      }
    }

export default test_App;