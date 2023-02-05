import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcOneBookPrice, removeCartItem } from '../../redux/actionCreators/booksActionCreators'
import { IBook, IStore } from '../../redux/types'
import { Button } from '../Button/Button'
import { IconDelete } from '../Icon/IconDelete'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'

import './CartItem.scss'

export interface ICartProps extends IBook {
}

export const CartItem = ({image, title, authors, price, isbn13}: ICartProps) => {
    const cart = useSelector((state: IStore) => state.books.cart)
    const dispatch = useDispatch()

    const handleDeleteCartItem = (id: string) => [
        dispatch(removeCartItem(id))
    ]

    /* const [count, setCount] = useState(1)
    const onClick1 = () => setCount(count + 1)
    const onClick2 = () => setCount(count - 1)
    const countValue = count
    const priceValue = price.split('').slice(1).join('')
    const oneBookPrice = countValue * Number(priceValue)
    useEffect(() => {
        dispatch(calcOneBookPrice(oneBookPrice))
    }, [oneBookPrice, dispatch]) */
  return (
    <>
    <div className='cart-item'>
        <div className="cart-item__button">
            <Button className='btn__remove' icon={<IconDelete color='black'/>} onClick={() => handleDeleteCartItem(isbn13)}/>
        </div>
        <div className="cart-item__picture">
            <img src={image} alt={title} />
        </div>
        <div className="cart-item__info">
            <div className="cart-item__title">
                {title}
            </div>
            <div className="cart-item__authors">
                {authors}
            </div>
            <div className="cart-item__price">
                {price}
            </div>
        </div>
        {/* <div className="cart-item__counter">
            <Button className='card__btn card__btn--like' disabled={countValue === 1 && true} icon={<IconLeftArrow className="icon__right"/>} onClick={onClick2}></Button>
                <p>{countValue}</p>
            <Button className='card__btn card__btn--dislike' icon={<IconRightArrow className="icon__left"/>} onClick={onClick1}></Button>
        </div> */}
    </div>
    </>
  )
}
