import React from "react";
import { Link } from "react-router-dom";
import './Movie.css'

function Movie({myData}){

    return(
        <>
      <div className="container my-5">
        {/* <div className="logo"><img src="logo.jpg"/></div> */}

        <div className="row">
          
          {myData.map((post) => {
            // const { Title, Type, Year, imdbID, Poster } = post;
            return (
              <div className="col-md-4" key={post.imdbID}>
                <div className="movie">
                <div className="card" style={{ width: "18rem" }}>
        

        <Link to={`/Moviedetails/${post.imdbID}`}>
          <img src={post.Poster} className="card-img-top" alt="post.Title" />
        </Link>
        
        <div className="card-body">
          {/* <p className="card-text">{props.Year}</p> */}
          <h5 className="card-title">{post.Title}</h5>
          {/* <a href={props.imdbID} target='_blank' rel='noreferrer' className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    )
}

export default Movie;