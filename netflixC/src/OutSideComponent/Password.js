import React, { Component } from 'react';
import "./styles/boxemail.css";
import netflix from "./icons/netflix.svg";
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default class Password extends Component {
 constructor(props) {
  super(props)

  this.state = {
   email: "",
   passPssword: "",
   passReq: "",
   signUp: false
  }
 }

 getPassVarified = async () => {
  let { passPssword } = this.state
  if (passPssword === "") {
   this.setState({ passReq: "Password is required", signUp: true })
  } else {
   if (passPssword.length <= 5 && passPssword >= 60) {
    this.setState({ passReq: "Password should be between 4 and 60 characters long." })
   } else {
    await localStorage.setItem("password", passPssword)
    await localStorage.setItem("len", passPssword.length)
    setTimeout(() => { this.props.history.push("/signup") }, 1000)
   }
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
      <Link className="linkplan" to="/login"> <p className="signIn"> Sign In  </p> </Link>
     </div>
    </div>

    <div className="row d-flex justify-content-center mt-4">
     <div className="col-4">
      <div className="pt-3"> <p className="step"> STEP <b>1</b> OF <b>3</b> </p> </div>
      <div> <p className="netWel"> Welcome back! <br /> Joining Netflix is easy.</p> </div>
      <div> <p className="entpass"> Enter your password and you'll be watching in no <br /> time. </p> </div>
      <div>
       <div className="form-floating mb-3">
        <span> Email </span>
        <p className="passEmail"> {this.state.email} </p>
       </div>
       <div className="form-floating">
        <input onChange={(e) => {
         this.setState({ passPssword: e.target.value })
        }} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword"> Enter Your Password </label>
       </div>
       <span className="passreq"> {this.state.passReq} </span>
      </div>

      <div className="forgetpassword mt-3"> <span> Forgot your password? </span></div>
      <div>
       <button onClick={this.getPassVarified} className="ragiNext"> Next </button>
      </div>
     </div>
    </div>
    <Footer />
   </div>
  )
 }
 async componentDidMount() {
  let email = await localStorage.getItem("email")
  await localStorage.removeItem("password")
  await localStorage.removeItem("userId")
  await localStorage.removeItem("plan")
  await localStorage.removeItem("price")
  this.setState({ email: email })
  window.scrollTo(0, 0)
  if (email === null) {
   this.props.history.push("/")
  }
 }
}