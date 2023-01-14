import React from 'react'
import "./Card.scss"

import { IBook } from '../../redux/types'
// данный тип переписать в стор и удалить 
export interface ICard extends IBook {
}

export const Card = ({title, subtitle, isbn13, price, image, url}: ICard) => {
  return (
    <div className='card'>
        <a className='card__link' href={url}>
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
                    5/5
                </div>
            </div>
        </a>
    </div>
  )
}
