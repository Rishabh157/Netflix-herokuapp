import React, { Component } from 'react';
import "./styles/navbar.css";
import BaseUrl from '../ConstantUrl/BaseUrl';
import GET__DATA from '../ConstantUrl/Axios';

export default class Notification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notifiData: []
    }
  }
  render() {
    return (
      <div className="notification">
        {this.state.notifiData.map((ele) => {
          return (
            <div className="notiData" key={ele.id}>
              <div>
                <img
                  height="130px"
                  className="rounded"
                  src={`${BaseUrl}${ele.poster_path}`}
                  alt="profiler"
                />
              </div>
              <div className="ps-3">
                <p> {ele.title} </p>
                <span> {ele.release_date} </span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  componentDidMount() {
    GET__DATA.get(this.props.fetchData)
      .then(async (result) => {
        await this.setState({ notifiData: result.data.results })
      }).catch((err) => {
        console.log(err)
      });
  }
}