import "./leftmenu.scss";

export const dataMenu = [
  {
    text: "Здоровье",
    src: "./images/left-menu/ic_Health.svg",
  },
  {
    text: "Справки Выписки",
    src: "./images/left-menu/ic_Folder.svg",
  },
  {
    text: "Пособия Пенсия Льготы",
    src: "./images/left-menu/ic_Wallet.svg",
  },
  {
    text: "Авто Права Транспорт",
    src: "./images/left-menu/ic_Car.svg",
  },
  {
    text: "Семья",
    src: "./images/left-menu/ic_Family.svg",
  },
  {
    text: "Дети Образование",
    src: "./images/left-menu/ic_Book.svg",
  },
  {
    text: "Паспорта Регистрация",
    src: "./images/left-menu/ic_Pasport.svg",
  },
  {
    text: "Штрафы Долги",
    src: "./images/left-menu/ic_Fines.svg",
  },
  {
    text: "Недвижимость Стройка",
    src: "./images/left-menu/ic_Home.svg",
  },
  {
    text: "Прочее",
    src: "./images/left-menu/ic_Another.svg",
  },
  {
    text: "Ведомства",
    src: "./images/left-menu/Gov_services.svg",
  },
];

const LeftMenu = ({ setShowLeftMenu }) => {
  return (
    <div className="leftmenu">
      <span className="leftmenu__overlay"></span>
      <div className="leftmenu__container">
        <img
          onClick={() => setShowLeftMenu(false)}
          className="leftmenu__container--close"
          src="./images/left-menu/close-white.svg"
          alt=""
        />
        <div className="leftmenu__container--header">
          <img
            onClick={() => setShowLeftMenu(false)}
            src="./images/left-menu/close.svg"
            alt=""
          />
          <img
            className="leftmenu__container--logo"
            src="./images/gosuslugi.svg"
            alt=""
          />
        </div>
        <div className="leftmenu__container--help">
          <p>Помощь</p>
          <img src="./images/search-blue.svg" alt="" />
        </div>
        {dataMenu.map((i, index) => (
          <div key={index} className="leftmenu__container--item">
            <img src={i.src} alt="" />
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftMenu;
