import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios, { post } from 'axios';
import './App.css';
axios.defaults.baseURL = 'http://localhost/ci/testing_login/index.php/api';

export default class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      name: '',
      password: '',
      token: '',
      error: '',
      u_name: '',
      fetchingError: false
    }

    this.fetch = this.fetch.bind(this);
  }
 
  async fetch (e) {
    e.preventDefault();
    const url ='/login';
    const data = new FormData(e.target);

    const userData = {
      username : data.get('username'),
      password : data.get('password')
    }
    
    const r =  await post(url, userData)
    
    if (r.data.token) {

      const  token  = r.data.token;

      const usr =  await post('/get_me_data','', {
        headers: {
          Authorization:  token //the token is a variable which holds the token
        }
       });
        
      this.setState({u_name : usr.data.data.username});
    }
    else  {
      const error = r.data.data;
      this.setState({error});
    }
  
  }


  render() {


    return (
      
      <Router>
        <div className="App">
        {this.state.u_name ? <Route path="/"  render={
            () => {
              return (
                <h1>Hi {this.state.u_name}</h1>
              )
            }
          }
        /> : <Route path="/" render={
            () => {
              return (
                    <div className="container">
                    <section id="content">
                      <form onSubmit={this.fetch}>
                        <h1>Login Form</h1>
                        <div>
                          <input type="text" placeholder="Username" value='Arun'  required name="username" />
                        </div>
                        <div>
                          <input type="password"  placeholder="Password" value='psed' required name="password" />
                        </div>
                        <div>
                          <input type="submit" defaultValue="Log in" />
                          <a href="#_s">Lost your password?</a>
                          <a href="_s">Register</a>
                        </div>
                      </form>{/* form */}
                    </section>{/* content */}
                  </div>

              )
            }
          }
        /> }
          

        
        </div>
       </Router>
    )
  }
}
