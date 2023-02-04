import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormNewPassword } from '../Form/FormNewPassword/FormNewPassword'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const NewPass = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'New Password'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>New Password</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormNewPassword/>
            </PageWrapper>
        </>
    )
}