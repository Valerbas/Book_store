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
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/actionCreators/userActionCreators'

import "./Header.scss"
import { UserUnlogger } from '../UserUnlogger/UserUnlogger'

export const Header = () => {
    const searchValue = useSelector((state: IStore) => state.books.searchValue)
    const userName = useSelector((state: IStore) => state.users.user)
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handleInputChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }

    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        navigate('/sign_in');  
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
                <div className='navbar-item__user'>
                    {/* <Link style={{textDecoration: 'none'}} to={'/sign_in'}>
                            <IconUser color='black'/>
                    </Link> */}
                    {/* <UserUnlogger/> */}
                    {userName 
                        ? <UserUnlogger/>
                            : <Button className='btn__navbar'>
                                <Link style={{textDecoration: 'none'}} to={'/sign_in'}>
                                    <IconUser color='black'/>
                                </Link>
                            </Button>
                    }
                </div>
            </div>
        </div>
    </header>
  )
}
