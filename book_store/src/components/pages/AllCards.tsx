import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { CardsList } from '../CardsList/CardsList'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { Subscribe } from '../Subscribe/Subscribe'

export const AllCards = () => {
    return (
        <>
            <PageWrapper title={'NEW RELEASES BOOKS'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>}>
                <CardsList/>
                <Subscribe/>
            </PageWrapper>
        </>
    )
}