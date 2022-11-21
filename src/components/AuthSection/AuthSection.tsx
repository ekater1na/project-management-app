import React from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/isAuthenticated';

export const AuthSection = () => {
  const { t } = useTranslation();

  const { logout } = useActions();
  const navigate = useNavigate();

  const { user } = useAppSelector((store) => store.user);

  const onClickHandler = () => {
    logout();
    sessionStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      {!isAuthenticated() && (
        <Navbar>
          <NavLink className="px-2" to="/registration">
            <Button variant="outline-secondary">{t('registration')}</Button>
          </NavLink>
          <NavLink className="px-2" to="/login">
            <Button variant="outline-secondary">{t('login')}</Button>
          </NavLink>
        </Navbar>
      )}

      {isAuthenticated() && (
        <Navbar>
          <NavLink className="mr-10 px-2" to="/boards">
            <Button variant="outline-danger"> {t('add-boards')}</Button>
          </NavLink>

          <NavLink className="px-2" to="/edit-profile">
            Hi <span className="text-danger fw-bold">{user?.login} </span>
          </NavLink>

          <NavLink className="px-2" to="/edit-profile">
            <Button variant="outline-secondary">{t('edit-profile')}</Button>
          </NavLink>

          <Nav.Item>
            <Button onClick={onClickHandler}>{t('sign-out')}</Button>
          </Nav.Item>
        </Navbar>
      )}
    </>
  );
};