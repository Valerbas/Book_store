import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { FormSuccess } from '../Form/FormSuccess/FormSuccess'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Success = ({ onClickHome }:any) => {
    return (
        <>
            <PageWrapper title={'Success'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Success</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormSuccess/>
            </PageWrapper>
        </>
    )
}