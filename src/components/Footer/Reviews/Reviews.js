import React from 'react';
import Star from "./Star/Star";
import Img from '../../Assets/images/Footer/Reviews/аватар.png'
import {GrAttachment} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'


const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="reviews__block"><img src={Img} alt="Аватар" className="reviews__img"/>
                <h2 className="reviews__name">Юрий Архипов</h2>
                <p className="reviews__job">Директор ТОО "Copyland"</p>
                <p className="reviews__text">Разработана очень удобная система приема и <br/> обработки заказов, с ней реально высвобождается <br/> огромное количество ресурсов.</p>
                <div className="reviews__stars">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>

                </div>
                <p className="reviews__date">21.06.20</p>
            </div>
            <form className="reviews__form">
                <h3 className="reviews__form-title">Есть вопросы? Задавайте!</h3>
                <input  placeholder='Имя' type="text" className="reviews__form-input"/>
                <div className="reviews__form-block">
                    <input type="email" placeholder='E-mail' className="reviews__form-input reviews__form-blockInput"/>
                    <input type="number" placeholder='Телефон' className="reviews__form-input reviews__form-blockInput"/>
                </div>

                <label htmlFor="textarea" className='reviews__form-label'>Message</label>
                <textarea  id='textarea'  placeholder='Напишите своё сообщение...' className='reviews__form-textarea'/>
                <div className="reviews__form-buttons">
                    <button className="reviews__form-btn"><GrAttachment className='reviews__form-icon'/></button>
                    <button className="reviews__form-btn"><FaTelegramPlane className='reviews__form-iconTel'/></button>
                </div>

            </form>
        </section>
    );
};

export default Reviews;