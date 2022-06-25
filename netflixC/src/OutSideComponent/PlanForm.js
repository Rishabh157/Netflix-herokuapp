import React, { Component } from "react";
import netflix from "./icons/netflix.svg";
import chekright from "./icons/chekright.png";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsTabletLandscape } from "react-icons/bs";
import computer from "./icons/computer.png";
import tv from "./icons/tv.png";
import "./styles/boxemail.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

export default class PlanForm extends Component {
 constructor(props) {
  super(props)

  this.state = {
   plan: "",
   price: "",
   active1: false,
   active2: false,
   active3: false,
   active4: false,
   tabArr: [1, 2, 3, 4],
   compuArr: [1, 2, 3]
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
      <Link to="#" onClick={() => {
       setTimeout(() => {
        localStorage.clear()
        this.props.history.push("/")
       }, 1500)
      }} className="linkplan"> <p className="signIn">  Sign Out  </p> </Link>
     </div>
    </div>

    <div className="row mt-5">
     <div className="col-2"></div>
     <div className="col-10">
      <p className="step"> STEP <b>2</b> OF <b>3</b> </p>
      <div className="pb-2">
       <span className="planChoose"> Choose the plan that’s right for you </span>
      </div>
      <ul className="planRecomend">
       <li>
        <img className="pe-2" src={chekright} height="22px" alt="checkright" />
        <span> Watch all you want. Ad-free. </span>
       </li>
       <li>
        <img className="pe-2" src={chekright} height="22px" alt="checkright" />
        <span> Recommendations just for you. </span>
       </li>
       <li>
        <img className="pe-2" src={chekright} height="22px" alt="checkright" />
        <span> Change or cancel your plan anytime. </span>
       </li>
      </ul>
     </div>
    </div>

    <div className="device_section mt-5">
     <div className="row">
      <div className="col-5"></div>
      <div className="col-5">
       <div className="d-flex justify-content-around">

        <div onClick={() => {
         this.setState({ plan: "Mobile", price: "149", active1: true, active2: false, active3: false, active4: false })
        }}
         className={this.state.active1 ? "box-1__active" : "box-1"}>
         <h4> Mobile </h4>
        </div>

        <div onClick={() => {
         this.setState({ plan: "Basic", price: "199", active1: false, active2: true, active3: false, active4: false })
        }} className={this.state.active2 ? "box-1__active" : "box-1"}>
         <h4> Basic </h4>
        </div>

        <div onClick={() => {
         this.setState({ plan: "Standard", price: "499", active1: false, active2: false, active3: true, active4: false })
        }} className={this.state.active3 ? "box-1__active" : "box-1"}>
         <h4> Standard </h4>
        </div>

        <div onClick={() => {
         this.setState({ plan: "Premium", price: "649", active1: false, active2: false, active3: false, active4: true })
        }} className={this.state.active4 ? "box-1__active" : "box-1"}>
         <h4> Premium </h4>
        </div>

       </div>
      </div>
     </div>
    </div>

    <div className="mt-4">
     <div className="row d-flex justify-content-center">

      <div className="col-8 ">
       <div className="d-flex mb-3">
        <div className="col-5 d-flex col_1"> Monthly price </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          <div className={this.state.active1 ? "box-2_active" : "box-2"}> <span> &#8377; 149 </span> </div>
          <div className={this.state.active2 ? "box-2_active" : "box-2"}> <span> &#8377; 199 </span> </div>
          <div className={this.state.active3 ? "box-2_active" : "box-2"}> <span> &#8377; 499 </span> </div>
          <div className={this.state.active4 ? "box-2_active" : "box-2"}> <span> &#8377; 649 </span> </div>
         </div>
        </div>
       </div>
       <div className="horizontal"></div>

       <div className="d-flex mb-3">
        <div className="col-5 d-flex col_1"> Video quality </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          <div className={this.state.active1 ? "box-2_active" : "box-2"}> <span> Good </span> </div>
          <div className={this.state.active2 ? "box-2_active" : "box-2"}> <span> Good </span> </div>
          <div className={this.state.active3 ? "box-2_active" : "box-2"}> <span> Better </span> </div>
          <div className={this.state.active4 ? "box-2_active" : "box-2"}> <span> Best </span> </div>
         </div>
        </div>
       </div>
       <div className="horizontal"></div>

       <div className="d-flex mb-3">
        <div className="col-5 d-flex col_1"> Resolution </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          <div className={this.state.active1 ? "box-2_active" : "box-2"}>  <span>  480p  </span> </div>
          <div className={this.state.active2 ? "box-2_active" : "box-2"}>  <span>  480p  </span> </div>
          <div className={this.state.active3 ? "box-2_active" : "box-2"}>  <span> 1080p  </span> </div>
          <div className={this.state.active4 ? "box-2_active" : "box-2"}>  <span> 4K+HDR </span>  </div>
         </div>
        </div>
       </div>

       <div className="horizontal"></div>

       <div className="d-flex mb-2">
        <div className="col-5 d-flex col_1"> Devices you can use to watch </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          {this.state.tabArr.map((ele) => {
           return (
            <div className="box-2" key={ele}>
             <div>
              <HiOutlineDeviceMobile />
              <p> Phone </p>
             </div>
            </div>
           )
          })}
         </div>
        </div>
       </div>

       <div className="d-flex mb-2">
        <div className="col-5 d-flex col_1"></div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          {this.state.tabArr.map((ele) => {
           return (
            <div className="box-2" key={ele}>
             <div>
              <BsTabletLandscape />
              <p> Tablet </p>
             </div>
            </div>
           )
          })}
         </div>
        </div>
       </div>

       <div className="d-flex mb-2">
        <div className="col-5 d-flex col_1">  </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          <div className="box-2">   </div>
          {this.state.compuArr.map((ele) => {
           return (
            <div className="box-2" key={ele}>
             <div className="text-center">
              <img src={computer} alt="comp" />
              <p> Computer </p>
             </div>
            </div>
           )
          })}
         </div>
        </div>
       </div>

       <div className="d-flex mb-2">
        <div className="col-5 d-flex col_1"> </div>
        <div className='col-7 setWidth'>
         <div className="d-flex justify-content-between">
          <div className="box-2"> </div>
          {this.state.compuArr.map((ele) => {
           return (
            <div className="box-2" key={ele}>
             <div>
              <img src={tv} alt="tv" />
              <p> TV </p>
             </div>
            </div>
           )
          })}
         </div>
        </div>
       </div>

      </div>
     </div>
    </div>

    <div className="row">
     <div className="col-2"></div>
     <div className="col-10">
      <span className="parasec">
       HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all <br />
       content is available in all resolutions. See our Terms of Use for more details.
      </span> <br />
      <div className="pt-4">
       <span className="parasec">
        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, <br />
        and 1 with Basic and Mobile.
       </span>
      </div>
     </div>
    </div>
    <div className="d-flex justify-content-center">
     <div className="col-4">

      <button onClick={async () => {
       let { plan, price } = this.state
       if (plan !== "") {
        await localStorage.setItem("plan", plan)
        await localStorage.setItem("price", price)
        this.props.history.push("/signup/payment")
       } else {
        toast.error("Choose Your Plan")
       }
      }} className="ragiNext"> Next </button>

     </div>
     <Toaster position="top-center" />
    </div>
    <Footer />
   </div>
  )
 }
 componentDidMount() {
  window.scrollTo(0, 0)
 }
}