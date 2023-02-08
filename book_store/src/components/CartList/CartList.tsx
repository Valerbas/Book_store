import React, {useEffect, useState} from 'react'
import { CartItem } from '../CartItem/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../redux/types'


import './CartList.scss'
import { useNavigate } from 'react-router-dom'

export const CartList = () => {
    const cart = useSelector((state: IStore) => state.books.cart)
    const books = useSelector((state: IStore) => state.books.books)
    const userName = useSelector((state: IStore) => state.users.user)

    const navigate = useNavigate();

    const cartData = books.filter(({ isbn13 }) => cart.includes(isbn13))
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        let totalPrice = 0
        cartData.forEach((book) => {
            totalPrice += Number(book.price.slice(1))
        })
        setTotal(totalPrice);
    }, [cartData])

    useEffect(() => {
        if (!userName) {  
          navigate('../sign_in')
        }
    }, [userName, navigate])
    
  return (
    <>
    <div className="cart__list">
        <div className='cart-list__body'>
            {!(cart.length) 
                ? <div>You don't have books in your cart. Maybe you don't know how to read?</div>
            : cartData?.map((card) => <CartItem key={card?.isbn13} title={card.title} isbn13={card?.isbn13} subtitle={card?.subtitle} price={card?.price} url={card?.url} image={card?.image} authors={card?.authors}/>)}
        </div>
        <div className="cart-list__order">
                <div className="cart-list__title">Your order</div>
                <div className="cart-list__info">
                    <div className="cart-list__total-price">
                        Total: {!(cart.length) 
                            ? <span>0 $</span>
                                : <span>{total.toFixed(2)} $</span>}
                    </div>
                    <div className="cart-list__total-books">
                        qt.: {!(cart.length) 
                            ? <span>0</span>
                                : <span>{cart.length}</span>} pc
                    </div>
                </div>
        </div>
    </div>
    
    </>
  )
}
