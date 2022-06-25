import React, { Component } from 'react';
import { Link } from "react-router-dom";
import netflix from "./icons/netflix.svg";
import emailbtn from "./icons/emailbtn.png"
import "./styles/boxemail.css";
import Footer from './Footer';

export default class BoxEmail extends Component {
 constructor(props) {
  super(props)

  this.state = {
   email: "",
   emaReq: "",
  }
 }

 getEmailVarified = () => {
  let { email } = this.state
  const regEmail = (email) => {
   return email.match("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$")
  }
  if (email !== "") {
   if (regEmail(email)) {
    localStorage.setItem("email", email)
    setTimeout(() => { this.props.history.push("/passinfo") }, 1500)
   } else {
    this.setState({ emaReq: "Please enter a valid email address." })
   }
  } else {
   this.setState({ emaReq: "Email is required." })
  }
 }

 render() {
  return (
   <div className="container-fluid back_image">

    <div className="row header">
     <div className="col-4  mt-4  px-5">
      <img src={netflix} className="netflixlogo" alt="netflixlogo" />
     </div>
     <div className="col-5"></div>
     <div className="col-3 mt-4 d-flex justify-content-evenly px-5">
      <select className="language">
       <option> English </option>
       <option> हिन्दी </option>
      </select>
      <Link to="/login">  <button className="signInbtn btn"> Sign In </button> </Link>
     </div>
    </div>

    <div className="d-flex justify-content-center text-center">
     <div className="col-6">
      <h1 className="title_text"> Unlimited movies, TV <br /> shows and more.</h1>
      <p className="title_para"> Watch anywhere. Cancel anytime. </p>
      <p className="title_down">Ready to watch? Enter your email to create or restart your membership.</p>

      <div className="form-floating d-flex">
       <input onChange={(e) => {
        this.setState({ email: e.target.value })
       }}
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com" />
       <label htmlFor="floatingInput">Email address</label>
       <button onClick={this.getEmailVarified} className="btn emailBtn">
        Get Started
        <img src={emailbtn} alt="emailbtn" height="18px" />
       </button>
      </div>
      <div className="d-flex justify-content-start">
       <span className="emaReq"> {this.state.emaReq} </span>
      </div>

     </div>
    </div>
    <Footer />
   </div>
  )
 }
 async componentDidMount() {
  document.title = "Netflix India - Watch TV Shows Online, Watch Movies Online";
  window.scrollTo(0, 0)
  await localStorage.removeItem("email");
  await localStorage.removeItem("password");
  await localStorage.removeItem("len");
  let userId = await localStorage.getItem("userId");
  if (userId !== null) {
   this.props.history.push("/browse")
  }
 }
}