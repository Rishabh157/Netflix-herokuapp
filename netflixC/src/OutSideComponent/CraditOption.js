import React, { Component } from "react";
import netflix from "./icons/netflix.svg";
import "./styles/boxemail.css";
import visa from "./icons/visacard.svg";
import mastercard from "./icons/mastercard.svg";
import americancard from "./icons/american.svg";
import dinersclub from "./icons/dinersclub.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import toast, { Toaster } from "react-hot-toast";

export default class CraditOption extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      cardNumber: "1111-2222-3333",
      cvv: "123",
      date: "",
      plan: "",
      price: ""
    }
  }

  getSubScribe = () => {
    let { email, password, firstName, lastName, cardNumber, date, cvv, plan, price } = this.state
    let data = { email, password, firstName, lastName, cardNumber, date, cvv, plan, price }
    if (firstName !== "" || lastName !== "") {
      axios.post("http://127.0.0.1:4000/ragister", data)
        .then(async (res) => {
          let { _id } = res.data.msg
          await localStorage.setItem("userId", _id)
          await localStorage.removeItem("email")
          await localStorage.removeItem("password")
          await localStorage.removeItem("plan")
          await localStorage.removeItem("price")
          setTimeout(() => { this.props.history.push("/browse") }, 2000)
        })
        .catch((err) => { console.log("Error", err) })
    } else {
      toast.error("Enter Name")
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row pb-3 border-bottom">
          <div className="col-4  mt-4  px-5">
            <img src={netflix} className="netflixlogo" alt="icon" />
          </div>
          <div className="col-6"></div>
          <div className="col-2 mt-4 d-flex justify-content-evenly">
            <Link className="linkplan" to="/login">  <p className="signIn"> Sign Out  </p> </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-2">
          <div className="col-4">
            <div className="pt-3"> <p className="step"> STEP <b>3</b> OF <b>3</b> </p> </div>
            <div> <p className="planPara"> Set up your credit or debit <br /> card </p> </div>
            <div className="paymt">
              <img src={visa} alt="visacard" />
              <img src={mastercard} alt="mastercard" />
              <img src={americancard} alt="american" />
              <img src={dinersclub} alt="denmark" />
            </div>

            <div className="mt-3">
              <div className="form-floating mb-2">
                <input onChange={(e) => {
                  this.setState({ firstName: e.target.value })
                }} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput"> First Name </label>
              </div>

              <div className="form-floating mb-2">
                <input onChange={(e) => {
                  this.setState({ lastName: e.target.value })
                }}
                  type="text"
                  className="form-control" id="floatinglastName" placeholder="Password" />
                <label htmlFor="floatinglastName"> LastName </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  defaultValue={this.state.cardNumber}
                  type="text"
                  className="form-control" id="floatingCard" placeholder="Password" />
                <label htmlFor="floatingCard"> Card Number </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  defaultValue={this.state.date}
                  type="text"
                  className="form-control" id="floatingExpire" placeholder="Password" />
                <label htmlFor="floatingExpire"> {this.state.date} </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  defaultValue={this.state.cvv}
                  type="text"
                  className="form-control" id="floatingCvv" placeholder="Password" />
                <label htmlFor="floatingCvv"> Security code (CVV) </label>
              </div>

              <div className="paymentSectionNext">
                <div>
                  <span className="planmonth"> {this.state.price}/month <br />
                    <span className="plan"> {this.state.plan} Plan </span></span>
                </div>
                <Link className="link" to="/planform">
                  <div className="pt-2 changeplan"> Change </div>
                </Link>
              </div>

              <div>
                <p className="authicate"> Any payment above ₹ 2000 shall need additional authentication. </p>
              </div>

              <div>
                <p className="authicate">By checking the checkbox below, you agree to our Terms of Use, Privacy
                  Statement, and that you are over 18. Netflix will automatically continue
                  your membership and charge the membership fee (currently ₹ 199/month)
                  to your payment method until you cancel. You may cancel at any time to
                  avoid future charges.</p>
              </div>
            </div>

            <div>
              <button onClick={this.getSubScribe} className="ragiNext"> Start Membership </button>
            </div>
          </div>
          <Toaster position="top-center" />
        </div>
        <Footer />
      </div>
    )
  }
  async componentDidMount() {
    this.setState({ date: new Date().getFullYear() })
    let getEmail = await localStorage.getItem("email")
    let getPassword = await localStorage.getItem("password")
    let getPlan = await localStorage.getItem("plan")
    let getPrice = await localStorage.getItem("price")
    this.setState({ email: getEmail, password: getPassword, plan: getPlan, price: getPrice })
    window.scrollTo(0, 0)
    if (getEmail === null && getPassword === null) {
      this.props.history.push("/")
    }
  }
}
