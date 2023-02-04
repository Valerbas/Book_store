import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'

import { useSelector, useDispatch } from 'react-redux'
import { signInUser } from '../../../redux/actionCreators/userActionCreators'
import { IUserStore } from '../../../redux/types'
import { useNavigate } from 'react-router-dom'
import './FormSignIn.scss'

export const FormSignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const [error, setError] = useState(false)
    const onSubmit = (event: any) => {
        event.preventDefault()
        /* if (email.length < 0) {
            setError(!error)
        }
        if (password.length < 0) {
            setError(!error)
        } */
        console.log(event);
        dispatch(signInUser({
            email: event.target[0].value, 
            password: event.target[1].value}, navigate))
    }

    return (
        <form className='form-sign-in'
            onSubmit={onSubmit}>
            <Input className='form__input'
                title='E-mail'
                placeholder='Your e-mail'
                type='email'
                error={error}
                onChange={handleEmail}
                value={email}/>
            <Input className='form__input'
                title='Password'
                type='password'
                placeholder='Your password'
                error={error}
                onChange={handlePassword}
                value={password}
            />
            <NavLink style={{textDecoration: 'none'}} to='/reset_pass'>
                <p className='form__text'>Forgot password?</p>
            </NavLink>
            <div className='form__submit'>
                <Button className='form__btn'
                    type='submit'
                    children='Sign In'/>
                <p className='submit__text'>Don`t have an account?
                    <NavLink style={{textDecoration: 'none'}} to='/sign_up'>
                        <span>Sign Up</span>
                    </NavLink>
                </p>
            </div>
        </form>
    )
}