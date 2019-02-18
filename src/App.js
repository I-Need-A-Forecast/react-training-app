import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    info: {
      username: '',
      password: '',
    },
    status: null,
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: '/login',
      data: this.state.info,
    }).then(() => {
      this.setState({
        ...this.state,
        status: "Logged In"
      })
    }).catch(error => {
      console.log('ERROR', error)
      this.setState({
        ...this.state,
        status: 'Login Failed'
      })
    })
  }

  handleChangeFor = name => event => {
    this.setState({
      ...this.state,
      info: {
        ...this.state.info,
        [name]: event.target.value,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.status}</h3>
        <form onSubmit={this.handleSubmit}>
          <pre>
            <label>
              <input type="text" placeholder="username" value={this.state.info.username}
                onChange={this.handleChangeFor("username")} />
            </label>
          </pre>
          <pre>
            <label>
              <input type="password" placeholder="password" value={this.state.info.password}
                onChange={this.handleChangeFor("password")} />
            </label>
          </pre>
          <pre>
            <input type="submit" value="Login" />
          </pre>
        </form>
      </div>
    );
  }
}

export default App;
