import React, { Component } from "react";
import "./styles/navbar.css";
import { LoadingBar } from "./Loading";
import { ImCross } from "react-icons/im";
import GET__DATA from "../ConstantUrl/Axios";
import BaseUrl from "../ConstantUrl/BaseUrl";
import API_KEY from "../ConstantUrl/API";

export default class Movies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: [],
      ytKey: "",
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
      <div>
        <div className="mt-5">
          <h4 className="title"> {this.props.title} </h4>
          {this.state.movie.length > 0 ? (
            <div className="posters">
              {this.state.movie.map((ele) => {
                return (
                  <div onClick={() => {
                    this.getPlayVideo(ele)
                  }}
                    key={ele.id}>
                    <img
                      src={`${BaseUrl}${ele.poster_path}`}
                      className="dataMovie"
                      alt={ele.title} />
                  </div>
                )
              })}
            </div>
          ) : <LoadingBar />}
        </div>
        {this.state.ytKey !== "" ? (
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <iframe className="me-4 rounded border border-dark"
              width="516"
              height="303"
              src={`https://www.youtube-nocookie.com/embed/${this.state.ytKey}?autoplay=1&controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <div onClick={() => {
              this.setState({ ytKey: "" })
            }}> <ImCross className="cut_video" /> </div>
          </div>
        ) : null}
      </div>
    )
  }
  async componentDidMount() {
    GET__DATA.get(this.props.fetchData)
      .then(async (result) => {
        setTimeout(async () => {
          await this.setState({ movie: result.data.results })
        }, 1500)
      }).catch((err) => {
        console.log(err)
      });
  }
}