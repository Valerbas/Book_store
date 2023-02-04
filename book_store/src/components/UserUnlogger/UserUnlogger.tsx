import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actionCreators/userActionCreators';
import { IStore } from '../../redux/types';

export function UserUnlogger() {
    const userName = useSelector((state: IStore) => state.users.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogOut = () => {
    setShow(false)
    dispatch(logOut());
    localStorage.removeItem('jwtAccess');
    localStorage.removeItem('jwtRefresh');
    navigate('/sign_in');  
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
                {userName &&
                    <div className='burger-menu__user'>
                        <span>{`${userName.username?.charAt(0).toUpperCase()}${userName.username?.charAt(userName.username.length - 1).toUpperCase()}`}</span>
                    </div>
                }
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOG OUT ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`${userName.username} are you CRAZY? You really want to log out? `}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
