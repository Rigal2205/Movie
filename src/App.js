// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Components/Movie";
import {
  Routes,
  Route
} from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      
      axios
        .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
        .then((res) => setMyData(res.data.Search || []))
        .catch((error) =>
          console.log("~ file:App.js ~line 15 ~useEffect ~error", error)
        );
        setIsLoading(false);
    }, 1000);


  }, []);

  if (isLoading) {
    return <div className="content">
    <h2>Movie Verse</h2>
    <h2>Movie Verse</h2>
  </div>;
}


  return (<>
    

    <div className="movie">
      <div className="title1">
        <h1>Movie Verse</h1>
      </div>
      <div className="container">
        <div className="box">
          <Routes>
            <Route path="/" element={<Movie myData={myData}/>}/>
            <Route path="/Moviedetails/:imdbID" element={<Moviedetails/>}/>

          </Routes>
          {/* <Movie myData={myData} /> */}
        </div>
      </div>
    </div>
    
  </>
  );

}

export default App;
