import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import './FavoriteList.scss'


export const FavoriteList = () => {
    const favorites = useSelector((state: IStore) => state.books.favorites)
    const books = useSelector((state: IStore) => state.books.books)

    const favoritesData = books.filter(({ isbn13 }) => favorites.includes(isbn13))
    console.log(favoritesData)
  return (
    <>
    <div className='favorite-list__body'>
        {!(favorites.length) 
            ? <div>You don't have favorite books. Maybe you don't know how to read?</div>
        : favoritesData?.map((card) => <Card key={card?.isbn13} title={card?.title} isbn13={card?.isbn13} subtitle={card?.subtitle} price={card?.price} url={card?.url} image={card?.image}/>)}
    </div>
    </>
  )
}
