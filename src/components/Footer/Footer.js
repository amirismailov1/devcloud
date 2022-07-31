import React from 'react';
import Logo from "../Assets/images/Header/LOGO.png";
import {FaPhoneAlt} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsArrowUp} from 'react-icons/bs'
import {Link} from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Footer = () => {
    return (
        <footer className='footer'>
<Reviews/>
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__block">
                            <h1 className='footer__logo'>
                                <img className='footer__logo-img' src={Logo} alt="logo"/>
                                DEVCLOUD SOLUTIONS
                            </h1>
                            <p className="footer__text">Алматы, Жамбыла 111</p>
                        </div>
                        <nav className='footer__nav'>
                            <div className="footer__col">

                                <div className="footer__col-block">
                                    <FaPhoneAlt/>
                                    <span className='footer__text'>​+7 (727) 334-21-45<br/>+7 (707) 998-93-90</span>
                                </div>
                                <div className="footer__col-block">
                                    <AiOutlineMail/>
                                    <p className='footer__text'>info@devcloud.kz</p>
                                </div>
                                <div className="footer__col-row">
                                    <div className="footer__col-block">
                                        <IoLogoWhatsapp/>
                                        <p className='footer__text'>WhatsApp</p>
                                    </div>
                                    <div className="footer__col-block">
                                        <FaTelegramPlane/>
                                        <p className='footer__text'>Telegram</p>
                                    </div>
                                </div>


                            </div>
                            <ul className='footer__list'>
                                <li className='footer__list-item'><Link className='footer__text' to={'/'}>Главная</Link></li>
                                <li className='footer__list-item'><Link  className='footer__text' to={'/'}>Услуги</Link></li>
                                <li className='footer__list-item'><Link className='footer__text' to={'/portfolio'}>Портфолио</Link></li>

                            </ul>
                                <ul className='footer__list'>
                                    <li className='footer__list-item'><Link className='footer__text' to={'/workProcess'}>Процессы</Link></li>
                                <li className='footer__list-item'><Link className='footer__text'  to={'/about'}>О Компании</Link></li>
                                <li className='footer__list-item'><Link className='footer__text' to={'/contacts'}>Контакты</Link></li>
                            </ul>
                        </nav>
                        <span className='footer__arrow'><BsArrowUp/></span>

                    </div>

                </div>

        </footer>
    );
};

export default Footer;