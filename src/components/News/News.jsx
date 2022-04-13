import "./news.scss";
const newsData = [
  {
    img: "./images/news/car_fines_news.svg",
    text: "Обжалование штрафов в приложении Госуслуги Авто",
    data: "12 апреля 2022",
  },
  {
    img: "./images/news/cashback.svg",
    text: "Путевка в детский лагерь с кэшбеком 50%",
    data: "11 апреля 2022",
  },
  {
    img: "./images/news/credit_deferral2_news.svg",
    text: "Как оформить кредитные каникулы в сложной жизненной ситуации",
    data: "28 марта 2022",
  },
  {
    img: "./images/news/tourist_cashback_news.svg",
    text: "Программа туристического кэшбэка продлена до 1 мая 2022 года",
    data: "28 марта 2022",
  },
];

const News = () => {
  return (
    <div className="news">
      <div className="news__header">
        <h2>Интересно и полезно</h2>
        <p>Вся лента</p>
      </div>
      <div className="news__cards">
        {newsData.map((i, index) => (
          <div key={index} className="news__card--item">
            <img src={i.img} alt="" />
            <h4>{i.text}</h4>
            <p>{i.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
