import React from 'react'
import { IBook, IStore } from '../../redux/types'
import { Button } from '../Button/Button'
import { Tabs } from '../Tabs/Tabs'
import { IconFacebook } from '../Icon/IconFacebook'
import { IconHeart } from '../Icon/IconHeart'
import { IconMore } from '../Icon/IconMore'
import { IconTwitter } from '../Icon/IconTwitter'
import { useDispatch, useSelector } from 'react-redux'


import './FullPost.scss'





export const FullPost = () => {
    const dispatch = useDispatch()
    /* const data1 = useSelector((state: IStore) => state.books.activeBook) */
    //@ts-ignore
    const data2 = JSON.parse(localStorage.getItem('book'))
    const data = data2
  return (
    <div className='post'>
        <div className="book__main">
            <div className="book__title">{data2.title}</div>
            <div className="book__info">
                <div className="book__image">
                  <Button className='btn__like' icon={<IconHeart/>}/>
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="book__specs">
                  <div className="book__specs-header">
                    <div className="book__price">{data.price}</div>
                    <div className="book__rating">{data.rating}</div>
                  </div>
                  <ul className="book__specs-list">
                    <li>
                      <div className="item__title">Authors</div>
                      <div className="item__info">{data.authors}</div>
                    </li>
                    <li>
                      <div className="item__title">Publisher</div>
                      <div className="item__info">{data.publisher}</div>
                    </li>
                    <li>
                      <div className="item__title">Language</div>
                      <div className="item__info">{data.language}</div>
                    </li>
                    <li>
                      <div className="item__title">Year</div>
                      <div className="item__info">{data.year}</div>
                    </li>
                    <li>
                      <div className="item__title">Pages</div>
                      <div className="item__info">{data.pages}</div>
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
  )
}
