import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TABS } from '../../constants'

import { setActiveTab } from '../../redux/actionCreators/settingsActionCreators'
import { IStore } from '../../redux/types'

import { Button } from '../Button/Button'
import './Tabs.scss'



export const Tabs = () => {
    const activeTab = useSelector((state: IStore) => state.settings.activeTab); 
    const dispatch = useDispatch();
    return (
        <div className={`tabs`}>
            <div className='wrapper'>
                <div className='tabs__body'>
                    {
                        Object.values(TABS).map((tab) => <Button className='tabs__btn' style = {{ color: activeTab === tab ? 'red' : 'black' }} onClick={() => dispatch(setActiveTab(tab))}>{tab}</Button>)
                    }
                </div>
            </div>
        </div>
    )
}