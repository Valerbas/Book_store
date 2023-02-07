import React, { useState } from 'react'
import { Button } from '../Button/Button'

import './Subscribe.scss'



export const Subscribe = () => {
    const [ email, setEmail ] = useState('')
    const [ submit, isSubmit ] = useState(false)

    const handleInputChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmitMail = (event: any) => {
        event.preventDefault()
        isSubmit(true)
    }
  return (
    <div className='wrapper'>
            <div className='subscribe'>
                <div className="subscribe__info">
                    <div className='subscribe__title'>Subscribe to newsletter</div>
                    <div className='subscribe__text'>Be the firth to know about new IT books, upcoming releases, exclusive offers and more.</div>
                </div>
                {!submit 
                    ? <form name='form-subscribe' className='subscribe__form' method='post' onSubmit={handleSubmitMail}>
                        <input type='email' placeholder='Your e-mail' required className='subscribe__input' onChange={handleInputChangeEmail}/>
                        <Button className='btn_subscribe' type='submit'>Subscribe</Button>
                      </form> 
                        : <div className='subscribe__letter'>Thank you! Stay in touch with our books news on {email}</div>}
            </div>
        </div>
  )
}
