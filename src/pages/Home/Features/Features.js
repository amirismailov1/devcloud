import React from 'react';
import Img from '../../../components/Assets/images/Home/features/featuresImg.png'

const Features = () => {
    return (
        <section className='features'>
<div className="container">
    <ul className="features__list">
        <li className="features__list-item">
<span>98%</span>
            Завершенных проектов <br/>
            успешно
        </li>
        <li className="features__list-item">
<span>30</span>
            календарных дней до <br/>
            первого релиза
        </li>
        <li className="features__list-item">
<span>5+</span>
            дней от идеи до <br/>
            готовой концепции
        </li>
        <li className="features__list-item">
            <span>+20%</span>
            к эффективности бизнеса
        </li>
    </ul>
    <div className="features__block">
        <img src={Img} alt="IMG" className="features__block-img"/>
        <div className="features__col">
<div className="features__col-block">
    <h2 className='features__col-title'>
        Гарантируем качество и <br/>
        выполнение в сроки
    </h2>
    <p className="features__col-subtitle">
        Мы просто умеем разрабатывать то, что нужно.
        То, что будет работать!
    </p>
    <button className="features__col-btn">
        Запросить консультацию
    </button>
</div>
            <p className="features__col-info">
                С 2010 года профессионально разрабатываем успешные мобильные и веб-решения, индивидуальные программные решения, информационные системы и ПО для бизнеса, которые повышают эффективность бизнеса.
            </p>
        </div>
    </div>
</div>
        </section>
    );
};

export default Features;