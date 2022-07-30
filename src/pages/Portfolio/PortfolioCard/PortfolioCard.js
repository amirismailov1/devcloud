import React from 'react';

const PortfolioCard = ({title,text}) => {
    return (
        <div className='portfolioCard'>
            <div className="portfolioCard__block">
                <h3 className="portfolioCard__title">{title}</h3><p className="portfolioCard__text">{text}</p>
                <button className="portfolioCard__btn">Узнать</button>
            </div>
        </div>
    );
};

export default PortfolioCard;