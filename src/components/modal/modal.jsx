import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <form className="search-motel-form" action="http://echo.htmlacademy.ru" method="post">
        <div className="form-group-item">
          <label htmlFor="data-begin">Дата заезда:</label>
          <input id="data-begin" type="text" name="come" placeholder="24 апреля 2017" />
          <button className="calendar-icon"><span className="visually-hidden">Выберете дату заезда</span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"><path d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z" /><path d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z" /></svg>
          </button>
        </div>
        <div className="form-group-item">
          <label htmlFor="data-end">Дата выезда:</label>
          <input id="data-end" type="text" name="ride-out" placeholder="4 июля 2017" />
          <button className="calendar-icon"><span className="visually-hidden">Выберете дату выезда</span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"><path d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z" /><path d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z" /></svg>
          </button>
        </div>
        <div className="form-group-item">
          <div className="parent">
            <label className="adults" htnlFor="parent-item">Взрослые:</label>
            <p className="step-parent">
              <button className="step-down"><span className="visually-hidden">Уменьшить</span></button>
              <input id="parent-item" type="number" min="1" max="10" step="1" name="number-one" value="2" />
              <button className="step-up"><span className="visually-hidden">Увеличить</span></button>
            </p>
          </div>
          <div className="children">
            <label className="kid" htmlFor="children-item">Дети:</label>
            <p className="step-children">
              <button className="step-down"><span className="visually-hidden">Уменьшить</span></button>
              <input id="children-item" type="number" min="0" max="10" step="1" name="number-two" value="0" />
              <button className="step-up"><span className="visually-hidden">Увеличить</span></button>
            </p>
          </div>
        </div>
        <button type="submit" className="button button-search">Найти</button>
      </form>
    </div>
  );
};

export default Modal;
