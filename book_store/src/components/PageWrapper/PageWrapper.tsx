import React, {useContext, type PropsWithChildren} from 'react'
import { NavLink } from 'react-router-dom'

import './PageWrapper.scss'

type PageWrapperProps = PropsWithChildren<{
    breadcrumb?: React.ReactNode
    title?: string
    children?: React.ReactNode
    button?: React.ReactNode
}>

export const PageWrapper = ({ breadcrumb, button, children, title}: PageWrapperProps) => {
  return (
    <div className={'page-wrapper'}>
            <div className='wrapper'>
                {breadcrumb}
                <NavLink style={{textDecoration: 'none'}} to={'/'}>
                    {button}
                </NavLink>
                <h1 className='page-wrapper__title'>{title}</h1>
                {children}
            </div>
        </div>
  )
}
