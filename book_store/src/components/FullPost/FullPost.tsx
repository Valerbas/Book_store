import React, {useEffect} from 'react'
import { IBook, IBookStore, IStore } from '../../redux/types'
import { Button } from '../Button/Button'
import { Tabs } from '../Tabs/Tabs'
import { IconFacebook } from '../Icon/IconFacebook'
import { IconHeart } from '../Icon/IconHeart'
import { IconMore } from '../Icon/IconMore'
import { IconTwitter } from '../Icon/IconTwitter'
import { useDispatch, useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion';


import './FullPost.scss'
import { activeBookId, addCartItem, addFavorite, removeCartItem, removeFavorite } from '../../redux/actionCreators/booksActionCreators'
import { Rating } from '../Rating/Rating'



export interface IProps {
  book: IBook
}


export const FullPost = ({book}: IProps) => {
  const favorites = useSelector((state: IStore) => state.books.favorites)
  const cart = useSelector((state: IStore) => state.books.cart)

  const dispatch = useDispatch()
  const handleToggleFavorite = (id: string) => {
    if (favorites.includes(id) === false) {
      dispatch(addFavorite(id))
    } else {
      dispatch(removeFavorite(id))
    }
  }

  const handleToggleCart = (id: string) => {
    if (cart.includes(id) === false) {
      dispatch(addCartItem(id))
    } else {
      dispatch(removeCartItem(id))
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
                    <Button className='btn__like' icon={<IconHeart color='#bfbfc0'/>} onClick={() => handleToggleFavorite(book.isbn13)}/>
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="book__specs">
                    <div className="book__specs-header">
                      <div className="book__price">{book.price}</div>
                      <Rating/>
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
                      <Accordion defaultActiveKey="0" bsPrefix='accordion' className='accord'>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>More details</Accordion.Header>
                          <Accordion.Body>
                            <li>
                              <div className="item__title">Year</div>
                              <div className="item__info">{book.year}</div>
                            </li>
                            <li>
                              <div className="item__title">Pages</div>
                              <div className="item__info">{book.pages}</div>
                            </li>
                            <li>
                              <div className="item__title">isbn13</div>
                              <div className="item__info">{book.isbn13}</div>
                            </li>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </ul>
                    <div className="book__specs-footer">
                      <Button className='btn__cart btn__cart--black' text={(cart.includes(book.isbn13) === false)
                        ? 'Add to cart'
                          : 'Remove from cart'}
                        onClick={() => handleToggleCart(book.isbn13)}/>
                      <Button className='btn__cart btn__cart--white' text='Preview book'/>
                    </div>
                  </div>
              </div>
          </div>
          <div className="book__tabs">
              <Tabs desc={book.desc} authors={book.authors} url={book.url}/>
          </div>
          <div className="book__footer">
            <Button className='btn__social' icon={<IconFacebook color='#8D8E97'/>}/>
            <Button className='btn__social' icon={<IconTwitter color='#8D8E97'/>}/>
            <Button className='btn__social' icon={<IconMore/>}/>
          </div>
      </div>
    </div>  }

 </>
  )
}
