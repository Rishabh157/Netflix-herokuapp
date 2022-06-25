import React, { Component } from "react";
import netflix from "./icons/netflix.svg";
import "./styles/boxemail.css";
import Lock from "./icons/Lock.png";
import visa from "./icons/visacard.svg";
import mastercard from "./icons/mastercard.svg";
import americancard from "./icons/american.svg";
import dinersclub from "./icons/dinersclub.png";
import lockserver from "./icons/lockserver.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default class SetupPayment extends Component {
 render() {
  return (
   <div className="container-fluid">
    <div className="row pb-3 border-bottom">
     <div className="col-4  mt-4  px-5">
      <img src={netflix} className="netflixlogo" alt="icon" />
     </div>
     <div className="col-6"></div>
     <div className="col-2 mt-4 d-flex justify-content-evenly">
      <Link className="linkplan" to="/login"> <p className="signIn">  Sign Out   </p> </Link>
     </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
     <div className="col-4">
      <img className="rounded mx-auto d-block" height="50px" src={Lock} alt="checkmark" />
      <div className="pt-5 text-center"> <p className="step"> STEP <b>3</b> OF <b>3</b> </p> </div>
      <div className="text-center"> <p className="planPara"> Set up your payment </p> </div>
      <div className="text-center member">
       Your membership starts <br /> as soon as you set up <br /> payment.
      </div>
      <div className="text-center members">
       No commitments. <br />
       Cancel online anytime.
      </div>
      <div className="text-end">
       <span className="secureServer">Secure Server</span>
       <img src={lockserver} alt="lock" height="18px" />
      </div>
      <Link className="linksetup" to="/signup/creditoption">
       <div className="paymentSection">
        <div className="pe-2 cradit">
         <span> Credit or Debit Card </span>
        </div>
        <div>
         <img src={visa} alt="visacard" />
         <img src={mastercard} alt="mastercard" />
         <img src={americancard} alt="american" />
         <img src={dinersclub} alt="denmark" />
        </div>
       </div>
      </Link>
     </div>
    </div>
    <Footer />
   </div>
  )
 }
 async componentDidMount() {
  let email = await localStorage.getItem("email")
  let password = await localStorage.getItem("password")
  window.scrollTo(0, 0)
  if (email === null || password === null) {
   this.props.history.push("/")
  }
 }
}