import React from 'react';

const ExpCard = ({title,img,text}) => {
    return (
        <div className='expCard'>
            <img src={img} alt="IMG" className="expCard__img"/>
            <div className="expCard__block">
                <h3 className="expCard__title">{title}</h3>
                <p className="expCard__text">{text}</p>
            </div>
        </div>
    );
};

export default ExpCard;