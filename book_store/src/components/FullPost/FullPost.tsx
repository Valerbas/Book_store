import React, {useEffect} from 'react'
import { IBook, IBookStore, IStore } from '../../redux/types'
import { Button } from '../Button/Button'
import { Tabs } from '../Tabs/Tabs'
import { IconFacebook } from '../Icon/IconFacebook'
import { IconHeart } from '../Icon/IconHeart'
import { IconMore } from '../Icon/IconMore'
import { IconTwitter } from '../Icon/IconTwitter'
import { useDispatch, useSelector } from 'react-redux'


import './FullPost.scss'
import { activeBookId, addFavorite, removeFavorite } from '../../redux/actionCreators/booksActionCreators'
import { log } from 'console'


interface IProps {
  book: IBook
}


export const FullPost = ({book}: IProps) => {
  const favorites = useSelector((state: IStore) => state.books.favorites)
  const activeBook = useSelector((state: IStore) => state.books.activeBookId)

  const dispatch = useDispatch()

  const handleAddOrRemoveFavorite = (id: string) => {
    if (favorites.includes(id) === false) {
      dispatch(addFavorite(id))
      
    } else {
      dispatch(removeFavorite(id))
    }
  }
  
  return (
 <>
  {book &&  <div>

    <div className='post'>
          <div className="book__main">
              <div className="book__title">{book.title}</div>
              <div className="book__info">
                  <div className="book__image">
                    <Button className='btn__like' icon={<IconHeart/>} onClick={() => handleAddOrRemoveFavorite(book.isbn13)}/>
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="book__specs">
                    <div className="book__specs-header">
                      <div className="book__price">{book.price}</div>
                      <div className="book__rating">{book.rating}</div>
                    </div>
                    <ul className="book__specs-list">
                      <li>
                        <div className="item__title">Authors</div>
                        <div className="item__info">{book.authors}</div>
                      </li>
                      <li>
                        <div className="item__title">Publisher</div>
                        <div className="item__info">{book.publisher}</div>
                      </li>
                      <li>
                        <div className="item__title">Language</div>
                        <div className="item__info">{book.language}</div>
                      </li>
                      <li>
                        <div className="item__title">Year</div>
                        <div className="item__info">{book.year}</div>
                      </li>
                      <li>
                        <div className="item__title">Pages</div>
                        <div className="item__info">{book.pages}</div>
                      </li>
                    </ul>
                    <div className="book__specs-footer">
                      <Button className='btn_subscribe' text='Add to Card'/>
                      <Button className='btn_preview' text='Preview book'/>
                    </div>
                  </div>
              </div>
          </div>
          <div className="book__tabs">
              <Tabs/>
          </div>
          <div className="book__footer">
            <Button className='btn__navbar' icon={<IconFacebook/>}/>
            <Button className='btn__navbar' icon={<IconTwitter/>}/>
            <Button className='btn__navbar' icon={<IconMore/>}/>
          </div>
      </div>
    </div>  }

 </>
  )
}
