import { Button } from '../../Button/Button'
import '../Form.scss'

export const FormSuccess = () => {
    return (
        <form className='form'>
            <p className='form__text'>Email confirmed.</p>
            <p className='form__text'>Your registration is now completed.</p>
            <div className='form__submit'>
                <Button className='form__btn' type='button' children='Go to home'/>
            </div>
        </form>
    )
}