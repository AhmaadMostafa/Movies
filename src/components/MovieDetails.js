import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const params = useParams();
    console.log(params.id);
    const [movie , setMovie] = useState([])
    
    const getMovieDetail = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8a1f71f93bc3ebd2776eab1af18a30bd&language=ar`);
        setMovie(res.data);  
    }
    useEffect(()=>{
        getMovieDetail();
    })
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="abd"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                Movie Name: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                Release Date: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                vote Count: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Rate: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">Story</p>
            </div>
            <div className="text-center px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary m-3"
            >
              Back Home
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary m-3">
              Watch The Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails
