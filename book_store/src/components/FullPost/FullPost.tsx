import React from 'react'
import { IBook, IStore } from '../../redux/types'
import { Button } from '../Button/Button'
import { IconFacebook } from '../Icon/IconFacebook'
import { IconHeart } from '../Icon/IconHeart'
import { IconMore } from '../Icon/IconMore'
import { IconTwitter } from '../Icon/IconTwitter'

import './FullPost.scss'



export const FullPost = ({
  title, 
  subtitle, 
  isbn13, 
  price, 
  image, 
  url, 
  authors, 
  publisher, 
  isbn10, 
  pages, 
  year, 
  rating,
  desc,
  pdf,
  language}: IBook) => {
  return (
    <div className='post'>
        <div className="book__main">
            <div className="book__title">{title}</div>
            <div className="book__info">
                <div className="book__image">
                  <Button className='btn__like' icon={<IconHeart/>}/>
                  <img src={image} alt={title} />
                </div>
                <div className="book__specs">
                  <div className="book__specs-header">
                    <div className="book__price">{price}</div>
                    <div className="book__rating">{rating}</div>
                  </div>
                  <ul className="book__specs-list">
                    <li>
                      <div className="item__title">Authors</div>
                      <div className="item__info">{authors}</div>
                    </li>
                    <li>
                      <div className="item__title">Publisher</div>
                      <div className="item__info">{publisher}</div>
                    </li>
                    <li>
                      <div className="item__title">Language</div>
                      <div className="item__info">{language}</div>
                    </li>
                    <li>
                      <div className="item__title">Year</div>
                      <div className="item__info">{year}</div>
                    </li>
                    <li>
                      <div className="item__title">Pages</div>
                      <div className="item__info">{pages}</div>
                    </li>
                  </ul>
                  <div className="book__specs-footer">
                    <Button className='btn_subscribe' text='Add to Card'/>
                  </div>
                </div>
            </div>
        </div>
        <div className="book__discription">
            <div className="book__tabs"></div>
            <div className="book__text"></div>
        </div>
        <div className="book__footer">
          <Button className='btn__navbar' icon={<IconFacebook/>}/>
          <Button className='btn__navbar' icon={<IconTwitter/>}/>
          <Button className='btn__navbar' icon={<IconMore/>}/>
        </div>
    </div>
  )
}
