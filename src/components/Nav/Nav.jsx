import "./nav.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
const Nav = ({ setShowLeftMenu }) => {
  const [showRightMenu, setShowRightMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!ref.current?.contains(e.target)) {
        setShowRightMenu(false);
      }
    });
  }, []);
  return (
    <div ref={ref} className="nav-container">
      <div className="nav">
        <div className="nav__left">
          <img
            onClick={() => setShowLeftMenu(true)}
            src="./images/hamburger.svg"
            alt=""
          />
          <img
            className="nav__left--gosusl"
            src="./images/gosuslugi.svg"
            alt=""
          />
          <p>Москва</p>
        </div>
        <div className="nav__right">
          <p>Заявления</p>
          <p>Документы</p>
          <p>Платежи</p>
          <span className="nav__right--help">Помощь</span>
          <img
            className="nav__right--search"
            src="./images/search-blue.svg"
            alt=""
          />
          <p className="nav__right--name">Иван К.</p>
          <div className="nav__right--profile">
            <span className="nav__right--nsname">
              <span>КИ</span>
              <span className="nav__right--dot"></span>
            </span>

            <span onClick={() => setShowRightMenu(!showRightMenu)}>
              {!showRightMenu ? (
                <IoIosArrowDown />
              ) : (
                <img src="./images/right-menu/close-r.svg" alt="" />
              )}
            </span>
          </div>
        </div>
        {showRightMenu && (
          <div className="nav__menu">
            <div className="nav__menu--header">
              <p>Иван К.</p>
              <span onClick={() => setShowRightMenu(!showRightMenu)}>
                <img src="./images/right-menu/close-r.svg" alt="" />
              </span>
            </div>
            <div className="nav__menu--active">
              <span>
                <img src="./images/right-menu/bell.svg" alt="" />
                <p>Уведомления</p>
              </span>
              <span className="nav__menu--logo">14</span>
            </div>
            <div className="nav__menu--item hide">
              <img src="./images/right-menu/desk.svg" alt="" />

              <p>Заявления</p>
            </div>
            <div className="nav__menu--item hide">
              <img src="./images/right-menu/docs.svg" alt="" />

              <p>Документы</p>
            </div>
            <div className="nav__menu--item hide">
              <img src="./images/right-menu/wallet.svg" alt="" />

              <p>Платежи</p>
            </div>
            <div className="nav__menu--item">
              <img src="./images/right-menu/person.svg" alt="" />

              <p>Профиль</p>
            </div>
            <div className="nav__menu--item">
              <img src="./images/right-menu/org.svg" alt="" />

              <p>Войти как организация</p>
            </div>
            <div className="nav__menu--item">
              <img src="./images/right-menu/exit.svg" alt="" />

              <p>Выйти</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
