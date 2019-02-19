import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

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

    getWxObs = event => {
      event.preventDefault()
      axios({
        method: 'GET',
        url: '/DB_Tests/approved_user/',
        }).then((response) => {
        console.log(response);
        console.log('Made it here.')
     })
    }

    logout_view = event => {
      event.preventDefault()
      axios({
        method: 'GET',
        url: '/DB_Tests/logout_view/',
      }).then((response) => {
        console.log('User logged out.')
      })
    }

    render() {
        return (
          <div className="test_App">
            <h3>{this.props.person}</h3> 
            <form onSubmit={this.getWxObs}>
              <input type='submit' />
              <input type='hidden' value={cookie.load("csrftoken")} name='csrfmiddlewaretoken' />
            </form>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
            <form onSubmit={this.logout_view}>
              <input type='submit' value='logout'/>
              <input type='hidden' value={cookie.load("csrftoken")} name='csrfmiddlewaretoken' />
            </form>
            <button onClick={this.handleClick}>Get Data</button>
          </div>
        );
      }
    }

export default test_App;