import React, { useEffect, useState } from 'react'
import NavScrollExample from './components/NavBar'
import Container from 'react-bootstrap/esm/Container'
import MoviesList from './components/MoviesList'
import {Routes , Route, HashRouter} from 'react-router-dom'
import axios from 'axios'
import MovieDetails from './components/MovieDetails'

const App = () => {

  const [movies , setMovies] = useState([]);
  const [pageCount , setPageCount] = useState(0);

  const getAllMovies = async()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8a1f71f93bc3ebd2776eab1af18a30bd&language=en-US');
    setMovies(res.data.results);
    setPageCount(500);
  }
  
  useEffect(()=>{
    getAllMovies();
  } , [])

  const onSearch = async(word)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8a1f71f93bc3ebd2776eab1af18a30bd&i&query=${word}&language=en-US`)
    if(!word){
      getAllMovies();
      return;
    }
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  }

  const getPage = async(num) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8a1f71f93bc3ebd2776eab1af18a30bd&language=en-US&page=${num}`)
    setMovies(res.data.results);
  }

  return (
    <div className="font color-bdy">
      <NavScrollExample onSearch={onSearch} />
      <Container>
        <HashRouter>
          <Routes>
            <Route path='/' element = {<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />     
            <Route path='/movie/:id' element = {<MovieDetails />} />
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App
