import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import logo from '../../../images/logo.png';
import { RiAccountPinBoxFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineLocalMall } from 'react-icons/md';

const options = {
  burgerColorHover: '#663bb5',
  logo,
  logoWidth: '20vmax',
  navColor1: 'white',
  logoHoverSize: '10px',
  logoHoverColor: '#663bb5',
  link1Text: 'Home',
  link2Text: 'Products',
  link3Text: 'Contact',
  link4Text: 'About',
  link1Url: '/',
  link2Url: '/products',
  link3Url: '/contact',
  link4Url: '/about',
  link1Size: '1.3vmax',
  link1Color: 'rgba(35, 35, 35,0.8)',
  nav1justifyContent: 'flex-end',
  nav2justifyContent: 'flex-end',
  nav3justifyContent: 'flex-start',
  nav4justifyContent: 'flex-start',
  link1ColorHover: '#663bb5',
  link1Margin: '1vmax',
  profileIcon: true,
  ProfileIconElement: RiAccountPinBoxFill,
  profileIconUrl: '/login',
  profileIconColor: 'rgba(35, 35, 35,0.8)',
  searchIcon: true,
  SearchIconElement: FaSearch,
  searchIconColor: 'rgba(35, 35, 35,0.8)',
  cartIcon: true,
  CartIconElement: MdOutlineLocalMall,
  cartIconColor: 'rgba(35, 35, 35,0.8)',
  profileIconColorHover: '#663bb5',
  searchIconColorHover: '#663bb5',
  cartIconColorHover: '#663bb5',
  cartIconMargin: '1vmax',
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
