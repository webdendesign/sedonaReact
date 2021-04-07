import React from 'react';
import Header from '../header/header.jsx';
import Modal from '../modal/modal.jsx';
import Service from '../service/service.jsx';
import Map from '../map/map.jsx';

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesAmount} = props;
  return (
    <div className="page-wrapper">
      <Header />

      <main className="main-content">
        <h2 className="visually-hidden">Седона - для путешествий!</h2>
        <section className="promo">
          <h2 className="visually-hidden">Добро пожаловать в Седону!</h2>
        </section>
        <section className="features">
          <header className="features-header">
            <h3>Седона &mdash; небольшой городок в Аризоне,<br />заслуживающий большего!</h3>
            <p>Рассмотрим {placesAmount} причин, по которым Седона круче, чем Гранд Каньон!</p>
          </header>
          <ol className="features-list">
            <li className="feature-item">
              <div className="features-item-info">
                <h2 className="title-item">Настоящий<br />городок</h2>
                <span>&mdash; №1 &mdash;</span>
                <p>Седона &mdash; не аттракцион для туристов,<br />там течёт своя жизнь</p>
              </div>
              <div className="features-item-img-one"></div>
              <Service />
            </li>
            <li className="feature-item">
              <div className="features-item-img-two"></div>
              <div className="features-item-info">
                <h2 className="title-item">Там есть<br />мост дьявола</h2>
                <span>&mdash; №2 &mdash;</span>
                <p>Да, по нему можно пройти! Если конечно<br />вы осмелитесь</p>
              </div>
            </li>
            <li className="feature-item-three gray-bg">
              <h2 className="title">Небольшая<br /> площадь</h2>
              <span>&mdash; №3 &mdash;</span>
              <p>Все достопримечательности<br />находятся очень близко</p>
            </li>
            <li className="feature-item-four gray-bg">
              <h2 className="title">Красивая<br /> дорога</h2>
              <span>&mdash; №4 &mdash;</span>
              <p>Ехать в Седону из Лас-Вегаса совсем<br />не скучно!</p>
            </li>
            <li className="feature-item-five gray-bg">
              <h2 className="title">Мало<br /> туристов</h2>
              <span>&mdash; №5 &mdash;</span>
              <p>Большинство едет в Гранд Каньон и <br />толпится там</p>
            </li>
          </ol>
        </section>

        <section className="interested">
          <h2>Заинтересовались?</h2>
          <p>Укажите предполагаемые даты поездки,<br />и мы покажем вам лучшие предложения гостинец в Седоне</p>
          <button className="button open-form open-form-search">Поиск гостиницы в Седоне</button>
          <Modal />
        </section>
        <Map />
      </main>

      <footer className="main-footer footer-margin">
        <p className="hashteg">#Visitsedona</p>
        <ul className="social">
          {/* <li><a className="social-btn" href="#"><span className="visually-hidden">Твиттер</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="15" viewBox="0 0 17 15"><path fill="#FFF" d="M10.95.144c1.685-.496 2.984.27 3.577 1.179.673-.231 1.331-.481 2.011-.708a2.345 2.345 0 0 1-.857 1.768c.685.17 1.304-.491 1.304-.491-.169 1-1.006 1.788-1.563 2.024-.231 6.75-3.175 11.217-10.077 11.082h-.446c-.41 0-4.164-.46-4.898-1.887 2.271.196 3.893-.422 4.693-1.177-.96-.3-2.679-.477-2.979-2.95.349.106.564.228 1.19.119C1.705 8.247.374 7.53.448 5.33c.285.328 1.067.536 1.34.472C1.085 5.561-.182 2.442.894.85c1.818 1.854 3.735 3.606 7.152 3.773C8.254 2.33 9.183.793 10.95.144z" /></svg>
          </a>
          </li>
          <li><a className="social-btn" href="#"><span className="visually-hidden">Фейсбук</span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"><path fill="#FFF" d="M12 4V0H8a4 4 0 0 0-4 4v4H0v4h4v10h4V12h4V8H8V4h4z" /></svg></a></li>
          <li><a className="social-btn" href="#"><span className="visually-hidden">Ютьюб</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="16" viewBox="0 0 20 16"><path fill="#FFF" d="M17 0H3C1.35 0 0 1.35 0 3v10c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM6.027 11.998V4.002L15.014 8l-8.987 3.998z" /></svg>
          </a>
          </li> */}
        </ul>
        <p className="copyright">
          <span>website by</span><a href="https://htmlacademy.ru/intensive/htmlcss" className="author"><span className="visually-hidden">htmlacademy</span>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.08 36.85"><title>logo-htmlacademy-small1</title><path d="M44.61,26.88a2,2,0,0,0,.55-0.1v1.33a3.25,3.25,0,0,1-1.18.21,1.67,1.67,0,0,1-1.67-1,4.84,4.84,0,0,1-3.14,1.08c-1.51,0-2.91-.83-2.91-2.55,0-2.13,2-2.79,3.71-2.79a11.08,11.08,0,0,1,2.17.25v-0.3c0-1-.76-1.77-2.19-1.77a7.42,7.42,0,0,0-3,.64v-1.7a10.21,10.21,0,0,1,3.19-.55c2.36,0,3.81,1.12,3.81,3.65v3a0.54,0.54,0,0,0,.49.59h0.17Zm-6.44-1.13A1.35,1.35,0,0,0,39.63,27h0.11a3.39,3.39,0,0,0,2.41-1V24.58a9.72,9.72,0,0,0-1.81-.21c-1,0-2.16.33-2.16,1.38h0Zm12.36-6.11a5,5,0,0,1,2.57.64V22a4.08,4.08,0,0,0-2.3-.7,2.75,2.75,0,1,0,0,5.49,5,5,0,0,0,2.43-.64v1.71a6.27,6.27,0,0,1-2.76.57A4.21,4.21,0,0,1,46,24.51q0-.21,0-0.41a4.32,4.32,0,0,1,4.18-4.46h0.38Zm12.17,7.24a2,2,0,0,0,.55-0.1v1.33a3.25,3.25,0,0,1-1.18.21,1.67,1.67,0,0,1-1.67-1,4.84,4.84,0,0,1-3.14,1.08c-1.51,0-2.91-.83-2.91-2.55,0-2.13,2-2.79,3.71-2.79a11.08,11.08,0,0,1,2.17.25v-0.3c0-1-.76-1.77-2.19-1.77a7.42,7.42,0,0,0-3,.64v-1.7a10.21,10.21,0,0,1,3.19-.55c2.36,0,3.81,1.12,3.81,3.65v3a0.54,0.54,0,0,0,.49.59h0.17Zm-6.44-1.13A1.35,1.35,0,0,0,57.73,27h0.11a3.39,3.39,0,0,0,2.41-1V24.58a9.72,9.72,0,0,0-1.81-.21c-1.06,0-2.16.33-2.16,1.38h0ZM73,16V28.2H71.35V26.88a3.88,3.88,0,0,1-3.19,1.54,4.4,4.4,0,0,1,0-8.78,3.81,3.81,0,0,1,3,1.3V16H73Zm-4.53,5.22a2.76,2.76,0,1,0,0,5.52A2.86,2.86,0,0,0,71.15,25V23A2.91,2.91,0,0,0,68.49,21.27ZM79,19.64c3.31,0,4.46,2.68,3.92,5.09H76.7c0.21,1.5,1.67,2.11,3.19,2.11a6.11,6.11,0,0,0,2.64-.59v1.6a7.14,7.14,0,0,1-3,.57C77,28.42,74.78,27,74.78,24a4.18,4.18,0,0,1,4-4.39H79Zm0.09,1.54a2.28,2.28,0,0,0-2.44,2.1v0.06H81.3A2,2,0,0,0,79.13,21.18Zm5.73,7V19.87h1.65v1a3.81,3.81,0,0,1,2.78-1.27A2.86,2.86,0,0,1,91.89,21a4.12,4.12,0,0,1,2.91-1.33A3.06,3.06,0,0,1,98,23V28.2h-1.9V23.05a1.59,1.59,0,0,0-1.42-1.75H94.42a2.8,2.8,0,0,0-2.07,1.12V28.2h-1.9V23.05A1.59,1.59,0,0,0,89,21.31H88.8a3,3,0,0,0-2.21,1.29v5.63H84.86Zm21.31-8.33h1.9l-3.91,9.46c-0.9,2.17-2.09,2.86-3.35,2.86a4.76,4.76,0,0,1-1.1-.14V30.46a2.86,2.86,0,0,0,.85.12c0.9,0,1.58-.64,2.07-1.9l0.17-.42-4-8.4h2l2.86,6.29ZM38.73,1.46V6.22a3.81,3.81,0,0,1,2.7-1.14,3.25,3.25,0,0,1,3.44,3.4v5.15H43V8.72a1.81,1.81,0,0,0-1.61-2h-0.3a2.93,2.93,0,0,0-2.32,1.39v5.52h-1.9V1.46h1.9ZM49.94,2.31v3h3V6.91h-3v3.81c0,1.1.5,1.46,1.58,1.46a4.49,4.49,0,0,0,1.69-.33v1.6A6.8,6.8,0,0,1,51,13.8a2.55,2.55,0,0,1-2.86-2.74V6.89H46.58V5.26h1.5V2.74Zm5.4,11.31V5.28H57v1A3.81,3.81,0,0,1,59.77,5a2.86,2.86,0,0,1,2.6,1.33A4.12,4.12,0,0,1,65.28,5,3.06,3.06,0,0,1,68.44,8.4v5.21h-1.9V8.46a1.59,1.59,0,0,0-1.42-1.75H64.89a2.8,2.8,0,0,0-2.07,1.12v5.78h-1.9V8.46A1.59,1.59,0,0,0,59.5,6.71H59.27A3,3,0,0,0,57.06,8v5.63H55.34ZM71.17,1.45H73V13.6H71.17V1.45ZM14.71,0H14.55L0,1.54V28.21l14.55,8.66,14.55-8.66V1.54Zm12.5,27.1L14.55,34.64,1.9,27.12V16.18l12.59,7.5V25L5.86,19.9v1.31l8.68,5.21v1.39L5.87,22.65V24l8.68,5.21,8.75-5.24V18.31L27.2,16V27.12Zm0-12.53-3.48,2-1.6,1L14.51,13v1.31L21,18.23H21l-0.14.09-1,.54-5.37-3.2V17l4.24,2.52-1,.67-3.2-1.9v1.31l2.1,1.24L14.5,22.1,2,14.65,14.51,7.11Zm0-1.32L14.49,5.76,1.91,13.25v-10L14.56,1.92,27.21,3.25v10h0Z" transform="translate(0 -0.02)" fill="#231f20" />
            </svg>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Main;
