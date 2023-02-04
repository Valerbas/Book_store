import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSignIn } from '../Form/FormSignIn/FormSignIn'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const SignIn = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Sign In'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Sign In</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSignIn/>
            </PageWrapper>
        </>
    )
}