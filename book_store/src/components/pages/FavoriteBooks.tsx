import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { FavoriteList } from '../FavoriteList/FavoriteList'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { Link } from 'react-router-dom'
import { IconLeftArrow } from '../Icon/IconLeftArrow'

export const FavoriteBooks = () => {
    return (
        <>
            <PageWrapper title={'FAVORITE BOOKS'} button={<IconLeftArrow/>}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Favorite</Breadcrumb.Item>
                </Breadcrumb>}>
                <FavoriteList/>
            </PageWrapper>
        </>
    )
}