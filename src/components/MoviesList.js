import React from 'react'
import {Row} from 'react-bootstrap'
import CardMovie from './CardMovie'
import AdvancedExample from './Pagination'

const MoviesList = ({movies , getPage , pageCount}) => {
  return (
      <Row className='mt-3'>
        {movies.length ? (movies.map((item) =>{
            return(
                <CardMovie key={item.id} item = {item} />
            )
        })) : <h2 className='text-center p-5'>No Movies Found</h2>}
        {movies.length ? ( <AdvancedExample getPage = {getPage} pageCount = {pageCount}/>) : null}
      </Row>
  )
}

export default MoviesList
