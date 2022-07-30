import React from 'react';
import Img from '../../components/Assets/images/About/campaign-creators-gMsnXqILjp4-unsplash 1.png'

const About = () => {
    return (

       <div className="container">
           <section className='about'>
               <div className="about__block"><img src={Img} alt="about" className="about__img"/>
                   <div className="about__col">
                       <h2 className="about__col-title">О нас</h2>
                       <p className="about__col-text">Devcloud объединяет кучу увлеченных умов, чтобы воплотить ваши представления в реальность, обеспечивая потрясающий цифровой опыт для ваших пользователей. От дизайна веб-сервисов, разработки мобильных приложений, и до решений, которые мы разрабатываем, ускоряющие эффективность и стимулирующие рост наших клиентов.
<br/>
                           С 2010 года мы стремимся к постоянному достижению и повышению уровня производительности. Используя мощь технологий мы предоставляем комплексные решения для малых, средних и для начинающих предприятий с многомиллионным финансированием.</p>
                       <button className="about__col-btn">Связаться с нами</button>
                   </div>
               </div>
           </section>
       </div>
    );
};

export default About;