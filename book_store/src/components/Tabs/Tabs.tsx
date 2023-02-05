import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TABS } from '../../constants'

import { setActiveTab } from '../../redux/actionCreators/settingsActionCreators'
import { IStore } from '../../redux/types'
import { Button } from '../Button/Button'


import './Tabs.scss'

interface ITabsProps {
    desc?: string
    authors?: string
    url?: string
}

export const Tabs = ({desc, url, authors}: ITabsProps) => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: IStore) => state.settings.activeTab); 
    /* const book1 = useSelector((state: IStore) => state.books.activeBook) */
    //@ts-ignore
    /* const book2 = JSON.parse(localStorage.getItem('book'))
    const data =  book2 */
    return (
        <div className={`tabs`}>
                <div className='tabs__list'>
                    {
                        Object.values(TABS).map((tab, i) => (<Button key={i} className={activeTab === tab ? 'tabs__item tabs__item--active' : 'tabs__item'} onClick={() => dispatch(setActiveTab(tab))}>{tab}</Button>))
                    }
                </div>
                <div className='tabs__info'>
                    <div className='tabs__text'>
                        {
                            activeTab.includes('Description') ? <p>{desc}</p> : activeTab.includes('Authors') ? <p>{authors}</p> : (<a href={url}>Let's checkout reviews on official site.</a>)
                        }
                    </div>
                </div>
        </div>
    )
}