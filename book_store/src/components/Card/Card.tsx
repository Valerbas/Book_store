import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

import { IBook } from '../../redux/types'
import { Rating } from '../Rating/Rating'

export interface ICard extends IBook {
}

export const Card = ({title, subtitle, isbn13, price, image, url}: ICard) => {
  return (
    <div className='card'>
        <Link className='card__link' to={`book/${isbn13}`}>
            <div className="card__main">
                <div className="card__image">
                    <img src={image} alt={title} />
                </div>
                <div className="card__info">
                    <div className="card__title">
                        {title}
                    </div>
                    <div className="card__subtitle">
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className="card__footer">
                <div className="card__price">
                    {price}
                </div>
                <div className="card__rating">
                    <Rating/>
                </div>
            </div>
        </Link>
    </div>
  )
}
