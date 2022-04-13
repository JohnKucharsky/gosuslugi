import { dataMenu } from "./../Nav/LeftMenu";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        {dataMenu.map((i, index) => (
          <div key={index} className="header__links--item">
            <img src={i.src} alt="" />
            <p>{i.text}</p>
          </div>
        ))}
      </div>
      <div className="header__main">
        <div className="header__main--logo">
          <img src="./images/robot.png" alt="" />
        </div>
        <div className="header__main--container">
          <p className="header__main--search">Просто напишите, что ищете</p>
          <div className="header__main--items">
            <p>Вакцинация</p>
            <p>QR</p>
            <p>Пособия</p>
            <p>ПЦР</p>
            <p>Как зарегистрироваться</p>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <img src="./images/check_QR_new.svg" alt="" />

        <div className="header__bottom--container">
          <p>
            <strong>Сертификаты и QR-коды</strong>
          </p>
          <p>Посмотрите все коды в одном месте или подайте жалобу</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
