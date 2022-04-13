import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <p>Личный кабинет</p>
          <p>Регистрация на Госуслугах</p>
          <p>Помощь</p>
        </div>
        <div className="footer__item">
          <p>Контакты</p>
          <p>Карта центров обслуживания</p>
        </div>
        <div className="footer__item">
          <p>Бизнесу</p>
          <p>Иностранцам</p>
          <p>Партнёрам</p>
        </div>
        <div className="footer__item">
          <div className="footer__item--links">
            <span className="footer__item--ok"></span>
            <span className="footer__item--telegram"></span>
            <span className="footer__item--vk"></span>
            <span className="footer__item--youtube"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
