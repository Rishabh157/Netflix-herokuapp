import React, { Component } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import "./styles/navbar.css";

export default class Footer extends Component {
 constructor(props) {
  super(props)

  this.state = {
   year: 0
  }
 }
 render() {
  return (
   <div className="container-fluid px-0 nav_foo">
    <div className="row">
     <div className="col-1"></div>
     <div className="col-2 text-light d-flex justify-content-around">

      <a href="https://www.facebook.com/profile.php?id=100081200933484" target="_blank" rel="noreferrer">
       <FaFacebookF className="svgIcons" />
      </a>

      <a href="https://www.instagram.com/rishabhgour0007/" target="_blank" rel="noreferrer">
       <AiOutlineInstagram className="svgIcons" />
      </a>

      <a href="https://twitter.com/Rishabhgour157" target="_blank" rel="noreferrer">
       <GrTwitter className="svgIcons" />
      </a>

      <a href="https://github.com/Rishabh157" target="_blank" rel="noreferrer">
       <ImGithub className="svgIcons" />
      </a>
     </div>
    </div>

    <div className="row mt-3">
     <div className="col-1"></div>
     <div className="col-8 d-flex justify-content-between">
      <div>
       <ul className="footinfo list-unstyled px-0">
        <li> Audio and Subtitles </li>
        <li> Media Center   </li>
        <li> Privacy   </li>
        <li> Contact Us   </li>
       </ul>
      </div>
      <div>
       <ul className="footinfo list-unstyled px-0">
        <li> Audio and Description   </li>
        <li> Investor Relations   </li>
        <li> Legal Notices   </li>
       </ul>
      </div>
      <div>
       <ul className="footinfo list-unstyled px-0">
        <li> Help Center    </li>
        <li> Jobs   </li>
        <li> Cookie Preferences   </li>
       </ul>
      </div>
      <div>
       <ul className="footinfo list-unstyled px-0">
        <li> Gift Card   </li>
        <li> Terms of Use   </li>
        <li> Corporate information   </li>
       </ul>
      </div>
     </div>
     <div className="text-center mt-5 foot_net">
      <span className=""> &#169; Netflix Inc. 1997 - {this.state.year}  </span>
     </div>
    </div>
   </div>
  )
 }
 componentDidMount() {
  let timeYear = new Date().getFullYear()
  this.setState({ year: timeYear })
 }
}
