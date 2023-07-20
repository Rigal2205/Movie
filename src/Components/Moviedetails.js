import React from "react";
import axios from "axios";
import "./Moviedetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Moviedetails() {
  const { imdbID } = useParams();
  const [yourMovie, setYourMovie] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
      
    // }, 1000);
    
    axios
        .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b`)
        .then((res) => setYourMovie(res.data));
  }, [imdbID]);
  if (!yourMovie) {
    return (
      <div className="message">
        {/* Calm yourself down details are coming😉 */}
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title1">

              <img src={yourMovie.Poster} alt={yourMovie.Title} />
            </div>
          </div>
          <div className="col">
            <div className="detail1">
              <p>Title : {yourMovie.Title}</p>
              <p>Year : {yourMovie.Year} </p>
              <p>imdbID : {yourMovie.imdbID}</p>
              <p>Type : {yourMovie.Type}</p>
            </div>
            <button
              onClick={() => history(-1)}
              className="btn btn-warning"
              role="button"
            >
              Back
            </button>
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>
    </>
  );
}

export default Moviedetails;
