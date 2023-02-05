import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'
import { useDispatch, useSelector } from 'react-redux'

import './Pagination.scss'

export const Pagination = () => {
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)
    const books = useSelector((state: IStore) => state.books.books)
    const dispatch = useDispatch()

    const [isPrevDisabled, setIsPrevDisabled] = useState(false)
    const [isNextDisabled, setIsNextDisabled] = useState(false)

    const count = Math.ceil(books.length / rowsPerPage)

    const totalPagesAmount = []
    for (let i = 1; i <= count; i++ ) {
        totalPagesAmount.push(i)
    }

    const handleClickPrevPage = () => {
        if (isPrevDisabled) return
        dispatch(setCurrentPage(currentPage - 1))
        window.scrollBy({
            top: -1600
        })
    }
    const handleClickNextPage = () => {
        if (isNextDisabled) return
        dispatch(setCurrentPage(currentPage + 1))
        window.scrollBy({
            top: -1600
        })
    }
    const handleClickCurrentPage = (value: number) => {
        dispatch(setCurrentPage(value))
        window.scrollBy({
            top: -1600
        })
    }
    useEffect(() => {
        setIsPrevDisabled(currentPage === 1)
        setIsNextDisabled(currentPage === count)
    }, [count, currentPage, rowsPerPage])

    console.log(currentPage)
  return (
    <div className='pagination'>
        <div className="wrapper">
            <div className="pagination__body">
                <div className="pagination__nav">
                    <Button className='pagination__button' icon={<IconLeftArrow/>} disabled={isPrevDisabled} style={{opacity: isPrevDisabled ? '0.5' : ''}} onClick={handleClickPrevPage}/>
                </div>
                <div className="pagination__value">
                {/* {totalPagesAmount.map((page, i) => (<span key={page} className={`pagination__page ${i + 1 === currentPage ? 'pagination__page--active' : ''}`} onClick={() => handleClickCurrentPage(i + 1)}>{page}</span>))} */} 
                {currentPage}
                </div>
                <div className="pagination__nav">
                    <Button className='pagination__button' icon={<IconRightArrow/>} disabled={isNextDisabled} onClick={handleClickNextPage}/>
                </div>
            </div>
        </div>
    </div>
  )
}
