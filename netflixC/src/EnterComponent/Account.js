import React, { Component } from "react";
import "./styles/navbar.css";
import netflix from "../OutSideComponent/icons/netflix.svg";
import { MdHelpOutline } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import profiler from "./icons/profiler.png";
import arrowDown from "./icons/arrowDown.svg";
import membersince from "./icons/membersince.svg";
import visacard from "../OutSideComponent/icons/visacard.svg";
import axios from "axios";
import { Link } from 'react-router-dom';
import { HashPass } from '../OutSideComponent/Validation';
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

export default class Account extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      username: "",
      email: "",
      cardNumber: "",
      date: "",
      hashP: ""
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row pt-3 pb-2 px-5 netflix_header_black">
          <div className="col-6 pb-3">
            <div className="row">
              <div className="col-2">
                <img src={netflix} alt="netflogo" height="32px" />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="section">
              <img className="rounded" src={profiler} alt="search" height="33px" />
              <img className="dnArrow" src={arrowDown} alt="search" height="24px" />
              {/* Panel Open section when user hover his profile icons */}
              <div className="profileSection">
                <div className="d-flex p-2 align-items-center">
                  <img className="rounded" src={profiler} alt="profiler" />
                  <Link className="link_route" to="/browse">
                    <span className="name ps-3">{this.state.username}</span>
                  </Link>
                </div>
                <div className="border_line"></div>
                <div className="mt-2 p-2">
                  <VscAccount className="nav_svgs" />
                  <Link className="link_route" to="/YourAccount">
                    <span className="panel_text ps-3"> Account </span>
                  </Link>
                </div>
                <div className="p-2">
                  <MdHelpOutline className="nav_svgs" />
                  <span className="panel_text ps-3"> Help Center </span>
                </div>
                <div className="border_line"></div>
                <div className="py-3 text-center">
                  <span onClick={() => {
                    localStorage.clear()
                    setTimeout(() => { this.props.history.push("/") }, 2000)
                  }}> <span className="panel_text"> Sign Out Of Netflix </span> </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-4 Section_Account">
          <div className="col"></div>
          <div className="col-10">
            <div className="d-flex flex-wrap align-items-center">
              <span className="fs-2 pe-4"> Account </span>
              <img src={membersince} alt="membersince" height="28px" />
              <span className="member ps-2"> Member Since November {this.state.date} </span>
            </div>
            <hr />
            <div className="d-flex flex-wrap">
              <div className="col">
                <span className="billing fs-6"> MEMBERSHIP &amp; BILLING </span>
                <button className="mem_btn mt-1 rounded"> Cancel Membership </button>
              </div>
              <div className="col-6">
                <p className="acc_gmail"> {this.state.email} </p>
                <p className="acc_pass"> Password: {this.state.hashP} </p>
                <p className="acc_pass"> Phone: 6260116100 </p>
              </div>
              <div className="col text-end">
                <p onClick={() => {
                  const email = prompt("Enter Your New Email")
                  const regEmail = (email) => {
                    return email.match("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$")
                  }
                  if (regEmail(email)) {
                    const _id = this.state.userId
                    axios.post("http://127.0.0.1:4000/get-update-email", { _id, email })
                      .then((result) => {
                        toast.success("Successfully Updated")
                      }).catch((err) => {
                        console.log(err)
                      })
                  } else {
                    toast.error("Enter Valid Gmail Id")
                  }
                }}
                  className="changing_plan"> Change account email </p>
                <p className="changing_plan"> Change password </p>
                <p className="changing_plan"> Change phone number </p>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-wrap">
              <div className="col"></div>
              <div className="col-6">
                <img className="rounded" src={visacard} alt="visImage" height="20px" />
                <span className="acc_gmail ps-2">
                  {this.state.cardNumber}
                </span>
                <p className="bill_info"> Your next billing date is 30 July 2022. </p>
              </div>
              <div className="col text-end">
                <p className="changing_plan"> Manage payment info </p>
                <p className="changing_plan"> Add backup payment method </p>
                <p className="changing_plan"> Billing details </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <Toaster position="top-center" />
        </div>
        <Footer />
      </div>
    )
  }

  async componentDidMount() {
    document.title = "Account Settings - Netflix";
    window.scrollTo(0, 0);
    let _id = await localStorage.getItem("userId")
    let len = await localStorage.getItem("len")
    let ans = HashPass(len)
    this.setState({ userId: _id, hashP: ans })

    axios.post("http://127.0.0.1:4000/get-user-info-account", { _id })
      .then((result) => {
        const { email, cardNumber, firstName, date } = result.data.infouser
        this.setState({ email: email, username: firstName, cardNumber: cardNumber, date: date })
      }).catch((err) => {
        console.log(err)
      });
    if (_id === null) {
      this.props.history.push("/")
    }
  }
}