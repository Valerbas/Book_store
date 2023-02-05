import React from 'react'
import './CardsList.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../redux/types'
import { setBooks, loadBooks, setSearchValue} from '../../redux/actionCreators/booksActionCreators'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'

export const CardsList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.books.books)
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)
    const searchValue = useSelector((state: IStore) => state.books.searchValue)
    


    useEffect(() => {
        dispatch(loadBooks({currentPage, rowsPerPage, searchValue}))
    }, [currentPage, rowsPerPage, searchValue,dispatch])

    

    const handleChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }

    const index = (currentPage - 1) * rowsPerPage
    const dataonPage = [...data].splice(index, rowsPerPage)

  return (
    <>
    <div className='cards-list__body'>
        {data && dataonPage?.map((card) => <Card key={card?.isbn13} title={card?.title} isbn13={card?.isbn13} subtitle={card?.subtitle} price={card?.price} url={card?.url} image={card?.image}/>)}
    </div>
        {data && <Pagination/>}
    </>
  )
}
