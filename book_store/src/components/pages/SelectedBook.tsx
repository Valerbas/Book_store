import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeBookId } from '../../redux/actionCreators/booksActionCreators'
import { FullPost } from '../FullPost/FullPost'
import { IconLeftArrow } from '../Icon/IconLeftArrow'

export const SelectedBook = () => {
  const dispatch = useDispatch()
  const { isbn13 } = useParams()
    React.useEffect(() => {
        isbn13 && dispatch(activeBookId(isbn13))
    }, [isbn13])
  return (
    <div className='selected-book'>
      <div className="wrapper">
        <div className="selected-book__main">
        <Link className='select-book__link' to={'/'}><IconLeftArrow/></Link>
        <FullPost/>
        </div>
      </div>
    </div>
  )
}
