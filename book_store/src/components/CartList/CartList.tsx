import React, {useEffect, useState} from 'react'
import { CartItem } from '../CartItem/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../redux/types'


import './CartList.scss'

export const CartList = () => {
    const cart = useSelector((state: IStore) => state.books.cart)
    const books = useSelector((state: IStore) => state.books.books)
    /* const cartPrice = useSelector((state: IStore) => state.books.cartPrice) */

    const [total, setTotal] = useState(0);

    
    const cartData = books.filter(({ isbn13 }) => cart.includes(isbn13))

    useEffect(() => {
        let totalPrice = 0
        cartData.forEach((book) => {
            totalPrice += Number(book.price.slice(1))
        })
        setTotal(totalPrice);
    }, [cartData])
    
  return (
    <>
    <div className='cart-list__body'>
        {!(cart.length) 
            ? <div>You don't have books in your cart. Maybe you don't know how to read?</div>
        : cartData?.map((card) => <CartItem key={card?.isbn13} title={card.title} isbn13={card?.isbn13} subtitle={card?.subtitle} price={card?.price} url={card?.url} image={card?.image} authors={card?.authors}/>)}
    </div>
    <div className="cart-list__order">
            <div className="cart-list__title">Your order</div>
            <div className="cart-list__info">
                <div className="cart-list__total-price">
                    {!(cart.length) 
                        ? <span>0</span>
                            : <span>{total.toFixed(2)}</span>} $
                    {/* {!(cartPrice.length) 
                        ? <span>0</span>
                            : <span>{`${cartPrice.reduce((acc, current) => acc + current, 0)}`}</span>} $ */}
                </div>
                <div className="cart-list__total-books"></div>
            </div>
    </div>
    </>
  )
}
