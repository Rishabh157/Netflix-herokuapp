import React, { Component } from 'react';
import "./styles/boxemail.css";
import { Link } from 'react-router-dom';
import netflix from "./icons/netflix.svg";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import DomainUrls from "../ConstantUrl/DomainUrls"

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      emailWarn: "",
      passWarn: "",
      ragiterSec: false,
      incorpass: false
    }
  }

  loginSubmit = () => {
    let { email, password } = this.state
    if (email !== "" && password !== "") {
      DomainUrls.post("get-ragister", { email, password })
        .then(async (res) => {
          let situation = res.data
          if (situation.status !== "Founded") {
            setTimeout(() => { this.setState({ ragiterSec: true }) }, 2000)
            toast.error(situation.status)

          } else {
            let { _id } = situation.msg
            await localStorage.setItem("userId", _id)
            await localStorage.setItem("len", password.length)
            setTimeout(() => { this.props.history.push("/browse") }, 2000)
          }
        })
        .catch((err) => { toast.error("network problem", err) })
    } else {
      this.setState({ emailWarn: "Please enter a valid email address or phone number." })
      this.setState({ passWarn: "Your password must contain between 4 and 60 characters." })
    }
  }

  render() {
    return (
      <div className="container-fluid  back_imageLogin" >
        <div className="row">
          <div className="col-4 mt-4 px-5">
            <img src={netflix} className="netflixlogoLogin" alt="icon" />
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          <div className="loginPageborder">
            <div className="logsignin mb-4">
              <span> Sign In </span>
            </div>

            {this.state.ragiterSec ? (<div className="notFoundSec"><p> Sorry, we can't find an account
              with this email address. Please try again or
              <Link className="link text-decoration-underline" to="/"> create a new account.</Link>
            </p>
            </div>) : ""}

            <div className="mb-4 mt-4">
              <Toaster position="top-center" />
              <div className="form-floating">
                <input onChange={(e) => {
                  this.setState({ email: e.target.value })
                }}
                  type="email" className="form-control loginput" id="floatingEmail" placeholder="name@example.com" />
                <label className="labelform" htmlFor="floatingEmail">Email or Phone Number</label>
              </div>
              <div className="loginwarn"> {this.state.emailWarn} </div>
            </div>

            <div>
              <div className="form-floating">
                <input onChange={(e) => {
                  this.setState({ password: e.target.value })
                }}
                  type="password" className="form-control loginput" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="loginwarn"> {this.state.passWarn} </div>
            </div>

            <div>
              <button onClick={this.loginSubmit}
                className="logibBtn"> Sign In </button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="newNet"> New to Netflix?
                <Link className="link" to="/"> <span> Sign up now. </span> </Link>
              </div>
              <div className="needHelp"> <span> Need Help? </span></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  componentDidMount() {
    document.title = "Netflix"
    localStorage.clear()
  }
}