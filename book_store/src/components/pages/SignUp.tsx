import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSignUp } from '../Form/FormSignUp/FormSignUp'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const SignUp = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Sign Up'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSignUp/>
            </PageWrapper>
        </>
    )
}