import React from 'react';
import PortfolioCard from "./PortfolioCard/PortfolioCard";


const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className="container">
                <h2 className="portfolio__title">Портфолио</h2>
               <div className="portfolio__row">

                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz'/>
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
                   <PortfolioCard title='Автоматизированная выгрузка счет-фактур на портал esf.gov.kz |
ESF Integra' text='Гибкий и удобный инструмент для интеграции биллинговых систем с порталом esf.gov.kz' />
               </div>
               </div>
        </section>
    );
};

export default Portfolio;