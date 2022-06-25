import React, { Component } from 'react';
import "./styles/boxemail.css";

export default class Footer extends Component {
 render() {
  return (
   <div className="footer">
    <div className="row mt-5 mb-3">
     <div className="col-2"></div>
     <div className="col-3">
      <p className="questionCall"> Questions? Call <span>+91 6260116100</span> </p>
     </div>
    </div>
    <div className="row">
     <div className="col-2"></div>
     <div className="col-2">
      <ul className="footerlist">
       <li> <span> FAQ </span> </li>
       <li> <span> Investor Relations </span> </li>
       <li> <span> Privacy </span> </li>
       <li> <span> Speed Test </span> </li>
      </ul>
     </div>
     <div className="col-2">
      <ul className="footerlist">
       <li> <span> Help Centre </span> </li>
       <li> <span> Jobs </span> </li>
       <li> <span> Cookie Preferences </span> </li>
       <li> <span> Legal Notices  </span> </li>
      </ul>
     </div>
     <div className="col-2">
      <ul className="footerlist">
       <li> <span> Account </span> </li>
       <li> <span> Ways to Watch </span> </li>
       <li> <span> Corporate Information </span> </li>
       <li> <span> Only on Netflix </span> </li>
      </ul>
     </div>
     <div className="col-2">
      <ul className="footerlist">
       <li> <span> Media Centre </span> </li>
       <li> <span> Terms of Use </span> </li>
       <li> <span> Contact Us </span> </li>
      </ul>
     </div>
     <div className="col-2"></div>
    </div>
   </div>
  )
 }
}
