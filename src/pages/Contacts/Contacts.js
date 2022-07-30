    import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {RiMapPinUserFill} from 'react-icons/ri';
    import {FaPhoneAlt} from 'react-icons/fa';
    import {AiOutlineMail} from 'react-icons/ai'
    import {IoLogoWhatsapp} from 'react-icons/io'
    import {FaTelegramPlane} from 'react-icons/fa'


const mapData = {
    center: [42.872752,74.57915],
    zoom: 16,
};

const coordinates = [
    [42.872752,74.57915]
];

const Contacts = () => (
    <div className='container'>
        <section className='contacts'>
            <YMaps >
                <Map defaultState={mapData} width='710px' height='243px'>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </YMaps>
            <ul className="contacts__list">
                <li className="contacts__list-item">
<RiMapPinUserFill/>
                    Алматы, Жамбыла 111
                </li>
                <li className="contacts__list-item">
<FaPhoneAlt/>
                    ​+7 (727) 334-21-45<br/>+7 (707) 998-93-90
                </li>
                <li className="contacts__list-item"><AiOutlineMail/>
                    info@devcloud.kz</li>
                <li className="contacts__list-itemBlock">
                    <span  className='contacts__list-item'>
                        <IoLogoWhatsapp/>
                        Whatsapp</span>
                    <span className='contacts__list-item'>
                        <FaTelegramPlane/>
                        Telegram</span>

                </li>
            </ul>
        </section>
    </div>
);
export default Contacts