import React from 'react';
import Card from "./Card/Card";


const Services = () => {

    return (
        <section className='services'>
            <h2 className="services__title">Основные  услуги</h2>
            <div className="services__row">
                <Card title='Разработка мобильных приложений' text='Мы создаем мобильные приложения, которые нравятся пользователям. Воспользовавшись преимуществами искусственного интеллекта, машинного обучения, Интернета вещей и других высокотехнологичных технологий для создания шедевров приложений, которые сохранятся.'/>
                <Card title='Разработка программного обеспечения' text='Уже более 10 лет мы освоили лучшие веб-технологии для реализации проектов, в которые вложены инвестиции. Надежный лидер рынка в разработке высокопроизводительных веб-интерфейсов для любого бизнеса.'/>
                <Card title='Разработка веб приложений' text='Мы не только идем в ногу с «тенденциями дизайна», но и ориентируемся на пользователей, что делает наши услуги наиболее эффективными на всем рынке. Превосходство с 2010 года. Создадим идеальное веб приложение именно для вас.'/>
                {/*<div className="services__card">*/}
                {/*    <h3 className="services__card-title">Разработка*/}
                {/*        мобильных приложений</h3>*/}
                {/*    <p className="services__card-text">Мы создаем мобильные приложения, которые нравятся пользователям. Воспользовавшись преимуществами искусственного интеллекта, машинного обучения, Интернета вещей и других высокотехнологичных технологий для создания шедевров приложений, которые сохранятся.</p>*/}
                {/*    <div className="services__card-block"><img src="" alt="" className="services__card-img"/>*/}
                {/*        <p className="services__card-more">Узнать больше</p>*/}
                {/*        <img src="" alt="" className="services__card-img"/></div>*/}
                {/*</div>*/}
                {/*<div className="services__card">*/}
                {/*    <h3 className="services__card-title">Разработка*/}
                {/*        программного обеспечения</h3>*/}
                {/*    <p className="services__card-text">Уже более 10 лет мы освоили лучшие веб-технологии для реализации проектов, в которые вложены инвестиции. Надежный лидер рынка в разработке  высокопроизводительных веб-интерфейсов для любого бизнеса.</p>*/}
                {/*    <div className="services__card-block"><img src="" alt="" className="services__card-img"/>*/}
                {/*        <p className="services__card-more">Узнать больше</p>*/}
                {/*        <img src="" alt="" className="services__card-img"/></div>*/}
                {/*</div>*/}
                {/*<div className="services__card">*/}
                {/*    <h3 className="services__card-title">Разработка*/}
                {/*        веб приложений</h3>*/}
                {/*    <p className="services__card-text">Мы не только идем в ногу с «тенденциями дизайна», но и ориентируемся на пользователей, что делает наши услуги наиболее эффективными на всем рынке. Превосходство с 2010 года. Создадим идеальное веб приложение именно для вас.</p>*/}
                {/*    <div className="services__card-block"><img src="" alt="" className="services__card-img"/>*/}
                {/*        <p className="services__card-more">Узнать больше</p>*/}
                {/*        <img src="" alt="" className="services__card-img"/></div>*/}
                {/*</div>*/}
            </div>

        </section>
    );
};

export default Services;