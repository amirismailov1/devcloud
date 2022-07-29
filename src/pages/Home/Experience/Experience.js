import React from 'react';
import ExpCard from "./ExpCard/ExpCard";
import First from '../../../components/Assets/images/Home/Experiece/leio-mclaren-leiomclaren-com-jEgQpfkHEWY-unsplash 1.png'
import Second from '../../../components/Assets/images/Home/Experiece/image 35.png'
import Third from '../../../components/Assets/images/Home/Experiece/austin-distel-DfjJMVhwH_8-unsplash 1.png'
import Fourth from '../../../components/Assets/images/Home/Experiece/christina-wocintechchat-com-rg1y72eKw6o-unsplash 1.png'

const Experience = () => {
    return (
        <section className='experience'>
            <div className="container">
                <h2 className="experience__title">
                    Наш опыт
                </h2>
                <div className="experience__row">
                    <ExpCard title={"Туризм"} img={First} text={'Создание различных решений в области туризма. Разработка индивидуальных туров,   CRM-система для управления клиентскими услугами. Создание системы расчётов туров. Создание веб- приложения, что обеспечит полный цикл работы менеджеров тура.'}/>
                    <ExpCard title={'Строительство'} img={Second} text={'Внедрение комплексных решений в строительстве. Информационная витрина, которая интегрирует информацию из различных источников. Создание портала и настольного приложения для управления и автоматического сбора данных из ситем.'}/>
                    <ExpCard title={'Финансы'} img={Third} text={'Внедрение банковских систем для интеграции с международными системами денежных переводов, систем согласования бюджетных запросов и оперативного контроля использования бюджета, системы автоматизации бизнес- процессов кредитования.'}/>
                    <ExpCard title={'Обучение'} img={Fourth} text={'Корпоративное решение для организаций, осуществляющих обучение и тестирование персонала. Веб-приложение для администрирования обучения сотрудников - с возможностью создания учебных курсов, практических и тестовых заданий, отслеживания прогресса учеников.'}/>
                </div>
            </div>
        </section>
    );
};

export default Experience;