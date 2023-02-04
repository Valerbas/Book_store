import React from 'react'
import './CardsList.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../redux/types'
import { setBooks, loadBooks, setSearchValue, /* loadSearchedBooks */} from '../../redux/actionCreators/booksActionCreators'
import { Card } from '../Card/Card'

export const CardsList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.books.books)
    const dataCount = useSelector((state: IStore) => state.books.countTotal)
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)
    const searchValue = useSelector((state: IStore) => state.books.searchValue)
    console.log(data);
    

    useEffect(() => {
        dispatch(loadBooks({currentPage, rowsPerPage, searchValue}))
    }, [currentPage, rowsPerPage, searchValue,dispatch])

    /* useEffect(() => {
      dispatch(loadSearchedBooks({currentPage, searchValue}))
    }, [currentPage, searchValue]) */

    const handleChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }
  return (
    <>
    <div className='cards-list__body'>
        {data?.map((card) => <Card key={card?.isbn13} title={card?.title} isbn13={card?.isbn13} subtitle={card?.subtitle} price={card?.price} url={card?.url} image={card?.image}/>)}
    </div>
    </>
  )
}
