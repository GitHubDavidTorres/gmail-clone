import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { selectUser, logout } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutHandle = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="foto-email"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search mail"
          style={{
            font: 'normal 16px Google ',
          }}
        />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton onClick={logoutHandle}>
          <Avatar src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
