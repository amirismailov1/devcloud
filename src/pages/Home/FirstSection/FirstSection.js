import React from 'react';
import Arrow from '../../../components/Assets/images/Home/firstSection/arrow.png'

const FirstSection = () => {
    return (
        <section className='firstSection'>
         <div className="firstSection__col">
             <h2 className='firstSection__title'>Компания по разработке <br/> програмного обеспечения</h2>
             <button className="firstSection__btn">Запросить консультацию</button>
             <img src={Arrow} alt=""/>
         </div>
        </section>
    );
};

export default FirstSection;