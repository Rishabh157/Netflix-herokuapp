import React, { Component } from 'react';
import netflix from "./icons/netflix.svg";
import checkmark from "./icons/Checkmark.png";
import chekright from "./icons/chekright.png";
import "./styles/boxemail.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default class Signup extends Component {
 render() {
  return (
   <div className="container-fluid">
    <div className="row pb-3 border-bottom">
     <div className="col-4  mt-4  px-5">
      <img src={netflix} className="netflixlogo" alt="icon" />
     </div>
     <div className="col-6"></div>
     <div className="col-2 mt-4 d-flex justify-content-evenly">
      <Link to="#" onClick={() => {
       setTimeout(() => {
        localStorage.clear()
        this.props.history.push("/")
       }, 1500)
      }} className="linkplan">
       <p className="signIn"> Sign Out </p>
      </Link>
     </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
     <div className="col-4">
      <img className="rounded mx-auto d-block" height="50px" src={checkmark} alt="checkmark" />
      <div className="pt-4 text-center"> <p className="step"> STEP <b>2</b> OF <b>3</b> </p> </div>
      <div className="text-center pt-3 pb-3"> <p className="planPara"> Choose your plan. </p> </div>
      <ul className="d-flex chekright">
       <li className='pe-3'> <img src={chekright} height="20px" alt="checkright" />  </li>
       <li> <span>No commitments, cancel <br /> anytime.</span> </li>
      </ul>
      <ul className="d-flex chekright">
       <li className='pe-3'> <img src={chekright} height="20px" alt="checkright" />  </li>
       <li> <span>Everything on Netflix for one <br /> low price.</span> </li>
      </ul>
      <ul className="d-flex chekright">
       <li className='pe-3'> <img src={chekright} height="20px" alt="checkright" />  </li>
       <li> <span>No ads and no extra fees. Ever.</span> </li>
      </ul>
      <div className="d-flex justify-content-center">
       <Link className="signUplink" to="/planform">
        <button className="signupNext">  Next  </button>
       </Link>
      </div>
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