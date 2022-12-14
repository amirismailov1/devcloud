import React from 'react';
import Img from '../../../components/Assets/images/Home/Process/img.png'

const Process = () => {
    return (
        <section className='process'>

            <div className="container">
                <h2 className="process__title">Наш процесс работы</h2>
                <div className="process__row">
                    <ul className="process__list">
                        <li className="process__list-item">1</li>
                        <li className="process__list-item">2</li>
                        <li className="process__list-item">3</li>
                        <li className="process__list-item">4</li>
                        <li className="process__list-item">5</li>
                        <li className="process__list-item">6</li>
                    </ul>
                    <img src={Img} alt="IMG" className="process__img"/>
                    <div className="process__content">
                        <h3 className="process__content-title"> 1. Мастерская открытий
                        </h3>
                        <p className="process__content-text">Мы придаем первостепенное значение пониманию и документированию входов, предпочтений клиентов, дизайна и брендов. И проясните все открытые моменты, чтобы получить точное и ясное представление о целях как клиентов, так и проекта. Мы работаем в рамках совместного подхода с участием  заинтересованных сторон, чтобы согласовать бизнес-процессы.</p>
                        <div className="process__content-block">
                        <span  className='process__content-svg'>
                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9135 3.44188C12.1623 1.23142 15.0305 0.0106142 18 0C24.0525 0 29.0768 5.12948 29.6235 11.744C33.2055 12.321 36 15.7398 36 19.9357C36 24.542 32.6295 28.2122 28.5458 28.2122H8.50725C3.843 28.2122 0 24.0214 0 18.7688C0 14.2471 2.8485 10.5026 6.6195 9.55366C6.94125 7.34029 8.19 5.13461 9.9135 3.44188V3.44188ZM11.3828 5.38339C9.6795 7.05817 8.7885 9.07662 8.7885 10.6565V11.8055L7.78725 11.9312C4.644 12.3236 2.25 15.2653 2.25 18.7688C2.25 22.5313 5.0175 25.6474 8.50725 25.6474H28.5458C31.455 25.6474 33.75 23.0519 33.75 19.9357C33.75 16.817 31.455 14.2215 28.5458 14.2215H27.4208V12.9391C27.423 7.2454 23.238 2.56474 18 2.56474C15.5697 2.57581 13.2229 3.57636 11.3828 5.38596V5.38339Z" fill="black"/>
</svg>


                </span>
                            <p className="process__content-more">Узнать больше</p>
                            <span className='process__content-svg'>
                    <svg width="43" height="12" viewBox="0 0 43 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 6.9191H41.5M41.5 6.9191L30.5 1.21973M41.5 6.9191L30.5 11.4786" stroke="black"/>
</svg>

                </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    );
};

export default Process;