import React, { Component } from "react";
import devices from "./icons/Devices.png";
import "./styles/boxemail.css";
import netflix from "./icons/netflix.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default class SignUpRagistration extends Component {
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
    <div className="row d-flex justify-content-center text-center devicesSec">
     <div> <img src={devices} className="devices" alt="device" /> </div>
     <div className="pt-3"> <p className="step"> STEP <b>1</b> OF <b>3</b> </p> </div>
     <div> <p className="facc"> Finish setting up your <br /> account  </p></div>
     <div> <p className="perNet"> Netflix is personalised for you. Create <br /> a password to watch on any device <br /> at any time. </p></div>
     <div>  <Link to="/password"> <button className="nextBtn"> Next </button> </Link>
     </div>
    </div>
    <Footer />
   </div>
  )
 }
 async componentDidMount() {
  let email = await localStorage.getItem("email")
  window.scrollTo(0, 0)
  if (email === null) {
   this.props.history.push("/")
  }
 }
}