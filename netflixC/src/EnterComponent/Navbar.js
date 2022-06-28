import React, { Component } from "react";
import "./styles/navbar.css";
import netflix from "../OutSideComponent/icons/netflix.svg";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import profiler from "./icons/profiler.png";
import arrowDown from "./icons/arrowDown.svg";
import Notification from "./Notification";
import Movies from "./Movies";
import Footer from "./Footer";
import requests from "../ConstantUrl/Request";
import BaseUrl from "../ConstantUrl/BaseUrl";
import GET__DATA from "../ConstantUrl/Axios";
import API_KEY from "../ConstantUrl/API";
import { Link } from "react-router-dom";
import DomainUrl from "../ConstantUrl/DomainUrls";
import { LoadingSearchBar } from "./Loading";
import Banner from "./Banner";
import { ImCross } from "react-icons/im";

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      search: "",
      searchResult: [],
      ytKey: "",
      bgScroll: false
    }
  }

  getPlayVideo = (ele) => {

    GET__DATA.get(`movie/${ele.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(async (result) => {
        let key = await result.data.results[0].key
        this.setState({ ytKey: key })
      }).catch((err) => {
        if (err) {
          GET__DATA.get(`tv/${ele.id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(async (result) => {
              let key = await result.data.results[0].key
              this.setState({ ytKey: key })
            }).catch((err) => {
              console.log(err)
            });
        }
      });
  }

  render() {
    return (
      <div className="container-fluid netFlix__body px-0">
        <div className={`row pt-3 pb-2 px-5 fixed-top netflix_header ${this.state.bgScroll && `netflix_header_black`}`}>
          <div className="col">
            <div className="d-flex">
              <div className="col-2">
                <img src={netflix} alt="netflogo" height="26px" />
              </div>
              <div className="col">
                <ul className="d-flex justify-content-evenly list-unstyled p-0 pt-1 mb-0 ms-4 l_nav ">
                  <li className="fw-bold active"> Home  </li>
                  <li> TV Shows </li>
                  <li> Movie </li>
                  <li> New 	&#38; Popular </li>
                  <li> My List </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="section ps-1 d-flex">
              <form className=""
                onSubmit={(e) => {
                  e.preventDefault()
                  GET__DATA.get(`search/multi?api_key=${API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
                    .then(async (result) => {
                      await setTimeout(() => { this.setState({ searchResult: result.data.results }) }, 1500)
                    }).catch((err) => {
                      console.log(err)
                    });
                }}>
                <input onChange={(e) => {
                  this.setState({ search: e.target.value })
                }}
                  placeholder="Search"
                  type="text"
                  className="form-control text-center searchInput" />
              </form>
            </div>

            {/* notification Panel*/}
            <div className="section">
              <IoNotificationsOutline className="nav_svgs" />
              <Notification fetchData={requests.fetchUpComing} />
            </div>
            <div className="section">
              <img className="rounded" src={profiler} alt="search" height="33px" />
              <img className="dnArrow" src={arrowDown} alt="search" height="24px" />
              {/* Panel Section Open When User Hover his Profile Icons */}
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
                  }}
                    className="panel_text"> Sign Out Of Netflix </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* if search query is empty then we will see default data. if search query is not empty then we will see query related data*/}
        {/* splice method turn query related data everytime arry empty when default data showed */}
        {this.state.search === "" ? (
          this.state.searchResult.splice(0),
          <div>
            <Banner fetchData={requests.fetchNetflixOriginals} />
            <Movies title="Tranding" fetchData={requests.fetchTrending} />
            <Movies title="Top Rated" fetchData={requests.fetchTopRated} />
            <Movies title="Netflix Originals" fetchData={requests.fetchNetflixOriginals} />
            <Movies title="Action Movies" fetchData={requests.fetchActionMovies} />
            <Movies title="Comedy Movies" fetchData={requests.fetchComedyMovies} />
            <Movies title="Horror Movies" fetchData={requests.fetchHorrorMovies} />
            <Movies title="Romance Movies" fetchData={requests.fetchRomanceMovies} />
            <Movies title="Documantaries" fetchData={requests.fetchDocumantaries} />
          </div>) : (
          <div style={{ marginTop: "100px" }} className="row ps-5">
            <p className="text-light searchText">
              Explore titles related to :
              <span> {this.state.search} </span>
            </p>
            {this.state.searchResult.length > 0 ? (this.state.searchResult.map((ele) => {
              return (
                <div onClick={() => {
                  this.getPlayVideo(ele)
                }}
                  key={ele.id}
                  className="col-2 mt-5">
                  <img
                    src={`${BaseUrl}${ele.poster_path}`}
                    className="searchData rounded"
                    alt="movieImages"
                    height="250px"
                  />
                </div>
              )
            })) : <LoadingSearchBar />
            }
            {this.state.ytKey !== "" ? (
              <div className="mt-3 SearchClass justify-content-center p-3 mt-5">
                <div onClick={() => {
                  this.setState({ ytKey: "" })
                }}
                  className="text-end pe-4 pb-3"> <ImCross className="cut_video" /> </div>
                <iframe className="col rounded border border-dark"
                  width="516"
                  height="303"
                  src={`https://www.youtube-nocookie.com/embed/${this.state.ytKey}?autoplay=1&controls=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            ) : null}
          </div>
        )}
        <div>
          <Footer />
        </div>
      </div>
    )
  }
  async componentDidMount() {
    document.title = "Home - Netflix";
    let _id = await localStorage.getItem("userId")

    DomainUrl.post("get-user-name", { _id })
      .then(async (result) => {
        await this.setState({ username: result.data.getInfo.firstName })
      }).catch((err) => {
        console.log(err)
      });

    if (_id === null) {
      this.props.history.push("/")
    }
    window.scrollTo(0, 0)
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({ bgScroll: true })
      } else {
        this.setState({ bgScroll: false })
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }
}