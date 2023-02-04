import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import '../Form.scss'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/actionCreators/userActionCreators'
import { IUserStore } from '../../../redux/types'

export const FormSignUp = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = (event: any) => {
        event.preventDefault()
        console.log(event);
        
        dispatch(registerUser({
            username: event.target[0].value,
            email: event.target[1].value, 
            password: event.target[2].value}))

    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <Input className='form__input' title='Name' placeholder='Your name' type='text' name='name'/>
            <Input className='form__input'  title='E-mail' placeholder='Your e-mail' type='email' name='email'/>
            <Input className='form__input' title='Password' type='password' placeholder='Your password' name='password'/>
            <Input className='form__input' title='Confirm password' type='password' placeholder='Confirm password'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign Up'/>
                <p className='submit__text'>Already have an account?
                    <NavLink style={{textDecoration: 'none'}} to='/sign_in'>
                        <span>Sign In</span>
                    </NavLink>
                </p>
            </div>
        </form>
    )
}