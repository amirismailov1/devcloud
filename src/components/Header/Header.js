import React from 'react';
import Logo from '../Assets/images/Header/LOGO.png'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <h1 >
                        <Link className='header__logo' to={'/'}>
                            <img className='header__logo-img' src={Logo} alt="logo"/>
                            DEVCLOUD SOLUTIONS
                        </Link>
                    </h1>
                    <nav className='header__nav'>
                        <div className="header__burger">

                        </div>
                        <ul className='header__list'>
                            <li className='header__list-item'><Link className='header__list-link' to={'/'}>Главная</Link></li>
                            <li className='header__list-item'>Услуги</li>
                            <li className='header__list-item'><Link className='header__list-link' to={'/workProcess'}>Как мы работаем</Link></li>
                            <li className='header__list-item'><Link className='header__list-link' to={'/portfolio'}>Портфолио</Link></li>
                            <li className='header__list-item'><Link className='header__list-link'  to={'/about'}>О нас</Link></li>
                            <li className='header__list-item'><Link className='header__list-link' to={'/contacts'}>Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;