import { useState } from 'react'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import '../Form.scss'

export const FormNewPassword = () => {
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <Input className='form__input' title='Password' type='password' placeholder='Your password'/>
            <Input className='form__input' title='Confirm password' type='password' placeholder='Confirm password'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Set password'/>
            </div>
        </form>
    )
}