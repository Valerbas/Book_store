import React from 'react'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
import { Button } from '../Button/Button'
import { IconBasket } from '../Icon/IconBasket'
import { IconHeart } from '../Icon/IconHeart'
import { IconSearch } from '../Icon/IconSearch'
import { IconUser } from '../Icon/IconUser'
import { Input } from '../Input/Input'
import { IStore } from '../../redux/types'
import { useSelector, useDispatch,  } from 'react-redux'

import "./Header.scss"

export const Header = () => {
    const searchValue = useSelector((state: IStore) => state.books.searchValue)
    const dispatch = useDispatch()


    const handleInputChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }
  return (
    <header className='header'>
        <div className="header__body">
            <div className="header__logo">
                <a href="#">BookStore</a>
            </div>
            <div className="header__search">
                <input type="text" value={searchValue} onChange={handleInputChange} className='header__input'/>
                <Button className='header__btn header__btn--search' onClick={handleInputChange} icon={<IconSearch color='black'/>}/>
            </div>
            <div className="header__navbar">
                <Button className='btn__navbar' icon={<IconHeart color='black'/>}/>
                <Button className='btn__navbar' icon={<IconBasket color='black'/>}/>
                <Button className='btn__navbar' icon={<IconUser color='black'/>}/>
            </div>
        </div>
    </header>
  )
}
