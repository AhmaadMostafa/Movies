import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardMovie = ({item}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${item.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Name: {item.title}</p>
              <p>Release Date: {item.release_date}</p>
              <p>Vote Counts: {item.vote_count}</p>
              <p>Rate: {item.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CardMovie
