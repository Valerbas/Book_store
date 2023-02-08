import React from 'react'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
import { Button } from '../Button/Button'
import { IconBasket } from '../Icon/IconBasket'
import { IconHeart } from '../Icon/IconHeart'
import { IconSearch } from '../Icon/IconSearch'
import { IconUser } from '../Icon/IconUser'
import { IStore } from '../../redux/types'
import { useSelector, useDispatch,  } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'



import "./Header.scss"
import { UserUnlogger } from '../UserUnlogger/UserUnlogger'

export const Header = () => {
    const searchValue = useSelector((state: IStore) => state.books.searchValue)
    const userName = useSelector((state: IStore) => state.users.user)
    const dispatch = useDispatch()


    const handleInputChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }

  return (
    <header className='header'>
        <div className="wrapper">
            <div className="header__body">
                <div className="header__logo">
                    <Link className='header__link' to='/'>BOOKSTORE</Link>
                </div>
                <form className="header__search">
                    <input type="text" value={searchValue} onChange={handleInputChange} className='header__input'/>
                    <Button type='submit' className='header__btn header__btn--search' onClick={handleInputChange} icon={<IconSearch color='black'/>}/>
                </form>
                <div className="header__navbar">
                    <Button className='btn__navbar'>
                        <Link style={{textDecoration: 'none'}} to={'/favorite'}>
                            <IconHeart color='black'/>
                        </Link>
                    </Button>
                    <Button className='btn__navbar'>
                        <Link style={{textDecoration: 'none'}} to={'/order'}>
                            <IconBasket color='black'/>
                        </Link> 
                    </Button>
                    <div className='navbar-item__user'>
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
        </div>
    </header>
  )
}
