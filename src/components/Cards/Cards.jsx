import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./cards.scss";
const cardsData = [
  {
    img: "./images/cards/banner_IT_2022.svg",
    text: "Отбор облачного ПО для программы цифровизации малого и среднего бизнеса",
  },
  {
    img: "./images/cards/gos_support.svg",
    text: "Предварительный отбор ИТ-проектов для грантовой поддержки",
  },
  {
    img: "./images/cards/text-banner_1.svg",
    text: "Запишите детей в первый класс через Госуслуги",
  },
  {
    img: "./images/cards/gos_support.svg",
    text: "Кредитные каникулы Получите отсрочку по ипотеке, кредиту или кредитной карте",
  },
  {
    img: "./images/cards/info_rus_po.svg",
    text: "Сбор информации о программных продуктах для маркетплейса российского ПО",
  },
  {
    img: "./images/cards/banner_IT_2022.svg",
    text: "Сбор информации о срочных мерах поддержки для ИТ-компаний",
  },
  {
    img: "./images/cards/departure.svg",
    text: "Нужна помощь для возвращения из-за рубежа?",
  },
  {
    img: "./images/cards/for_students.svg",
    text: "Вы студент из России и столкнулись с ущемлением своих прав? Росскажите о своей ситуации",
  },
];

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__slider">
        <Splide
          options={{
            fixedWidth: "24rem",
            type: "loop",
            arrows: true,
            gap: "1rem",
            pagination: false,
          }}
        >
          {cardsData.map((i, index) => (
            <SplideSlide className="cards__slider--item" key={index}>
              <img src={i.img} alt="" />
              <p>{i.text}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="cards__banner">
        <img src="./images/cards/mobile.png" alt="" />
        <div className="cards__banner--container">
          <h2>Скачайте удобное мобильное приложение</h2>
          <div className="cards__banner--pills">
            <p>Подавайте заявления на услуги</p>
            <p>Оплачивайте штрафы и пошлины</p>
            <p>Отслеживайте статусы заявлений и платежей</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
