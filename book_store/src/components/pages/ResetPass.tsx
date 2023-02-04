import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormResetPassword } from '../Form/FormResetPassword/FormResetPassword'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ResetPass = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Reset Password'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Reset Password</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormResetPassword/>
            </PageWrapper>
        </>
    )
}