import React, { Component } from 'react'
import axios from 'axios';
//import { Link, Redirect } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './tlogin.css'

toast.configure()



export default class Login extends Component {

    constructor(props) {
  
        super(props);
        this.userLoginSubmit = this.userLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
  
        this.state = {
          email: "",
          pass: "",
          token: "",
          open: false
        }
      }
  
      async userLoginSubmit(e) {
        e.preventDefault()
        const userData = {
          email: this.state.email,
          pass: this.state.pass,
         // id: this.state.id
        }
  
        
        await axios.post("post/Login",userData)
  
        .then((res) => {
          this.setState({
            token: res.data.token
          })
          localStorage.setItem("Authorization", res.data.token)
          window.location = "/profile"
          console.log(res.data.token);
          //alert("loging successfull");
          toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER})
        })
        .catch((err) => {
          console.log(err)
          this.setState({open: true})
          //("Invalid Email or Password")
          toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_CENTER})
        })
      }
      handleClose(reason) {
        if (reason === 'clickaway') {
           return;
        }
        this.setState({open: false})
     };


    render() {

        return (
            <form className="submit-form" onSubmit={this.userLoginSubmit}>
            <div>
                <div class="main_div text-center text-white ">
            <div class="box">
            <br/>
                <h3 className="display-4 text-warning">REMEDI LOGIN</h3>
                <br/>
                <br/>
                <br/>
                <div className="input-box">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="off"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={e => this.setState({email: e.target.value})}
                    required/>
            <label for="email">E mail</label>
          </div>

          <div class="input-box">
            <input
              type="text"
              name="pass"
              id="pass"
              autocomplete="off"
              onChange={e => this.setState({pass: e.target.value})}
              required
            />
            <label for="pass">Password</label>
          </div>
          <br/>
          
          <button type="submit" className="btn btn-lg btn-success">
                                 <i className="fa fa-sign-in"></i>
                                 &nbsp; Login</button>
      
      </div>
    </div>

            </div>
            </form>
        )
    }
}
