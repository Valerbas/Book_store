import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { activateUser } from '../../redux/actionCreators/userActionCreators'

export const Activation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        dispatch(activateUser({
            uid: splittedPath[2],
            token: splittedPath[3]
        }, navigate))
    }, [])
  return (
    <div>Activate your account</div>
  )
}