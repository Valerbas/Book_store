import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { FavoriteList } from '../FavoriteList/FavoriteList'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'

export const FavoriteBooks = () => {
    return (
        <>
            <PageWrapper title={'FAVORITE BOOKS'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Favorite</Breadcrumb.Item>
                </Breadcrumb>}>
                <FavoriteList/>
            </PageWrapper>
        </>
    )
}