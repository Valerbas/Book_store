import { useState } from 'react'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import '../Form.scss'

export const FormResetPassword = () => {
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
            <Input className='form__input' title='E-mail' type='email' placeholder='Your email'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Reset'/>
            </div>
        </form>
    )
}