import React, { useState, useEffect } from "react";
import GET__DATA from "../ConstantUrl/Axios";
import BaseUrl from "../ConstantUrl/BaseUrl";
import { BsFillPlayFill } from "react-icons/bs";
import { MdOutlineInfo } from "react-icons/md";

function Banner(props) {
  const [movie, setMovie] = useState({})
  const [ytKey, setYtKey] = useState("")
  const [show, setShow] = useState(false)

  useEffect(() => {
    function GetRandomMovie() {
      GET__DATA.get(props.fetchData)
        .then((result) => {
          setMovie(result.data.results[Math.floor(Math.random() * result.data.results.length)])
        }).catch((err) => {
          console.log(err)
        });
    }
    GetRandomMovie()
  }, [props.fetchData])

  return (
    <header className="banner">
      <div style={{
        backgroundImage: `url(${BaseUrl}${movie.backdrop_path})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="banner_stuff">
          <h1> {movie.name} </h1>
          <p> {movie.overview} </p>
          <div className="mt-3">
            <button onMouseEnter={() => {
              GET__DATA.get(`tv/${movie.id}/videos?api_key=f1b92f4ce0a6c48358b6a55b97b243e7&language=en-US`)
                .then(async (result) => {
                  let key = await result.data.results[0].key
                  setYtKey(key)
                  setShow(true)
                }).catch((err) => {
                  console.log(err)
                });
            }}
              onMouseLeave={() => {
                setShow(false)
              }}
              className="playBtn"> <BsFillPlayFill className="play_svg" /> Play </button>
            <button className="InfoBtn"><MdOutlineInfo className="play_svg" /> More Info </button>
          </div>
        </div>
        {show ? (
          <iframe className="ifrmaeBanner"
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${ytKey}?autoplay=1&controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>) : null}
      </div>
    </header>
  )
}

export default Banner;