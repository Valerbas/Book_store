import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { CartList } from '../CartList/CartList'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { IconLeftArrow } from '../Icon/IconLeftArrow'

export const Cart = () => {
    return (
        <>
            <PageWrapper title={'MAKE YOUR ORDER'} button={<IconLeftArrow/>}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Order</Breadcrumb.Item>
                </Breadcrumb>}>
                <CartList/>
            </PageWrapper>
        </>
    )
}