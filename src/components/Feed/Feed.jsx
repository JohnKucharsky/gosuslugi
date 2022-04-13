import "./feed.scss";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__section">
        <div className="feed__section--container">
          <div className="feed__section--item">
            <div className="feed__section--itemleft">
              <img src="./images/envelope.svg" alt="" />
              <div>
                <p>Госпочта</p>
                <p>Сегодня 20:58</p>
              </div>
            </div>
            <div className="feed__section--itemright">
              <p>COVID сертификаты и QR-коды на одной странице</p>
              <p>Портал Госуслуг</p>
            </div>
          </div>
          <div className="feed__section--item">
            <div className="feed__section--itemleft">
              <img src="./images/envelope.svg" alt="" />
              <div>
                <p>Госпочта</p>
                <p>16.03.2022, 11:13</p>
              </div>
            </div>
            <div className="feed__section--itemright">
              <p>Счёт оплачен</p>
              <p>ОБЪЕДИНЕНИЕ АДМИНИСТРАТИВНО-ТЕХНИЧЕСКИХ...</p>
            </div>
          </div>
          <div className="feed__section--item">
            <div className="feed__section--itemleft">
              <img src="./images/envelope.svg" alt="" />
              <div>
                <p>Госпочта</p>
                <p>10.03.2022, 15:55</p>
              </div>
            </div>
            <div className="feed__section--itemright">
              <p>Проблемы с доступом на некоторые сайты</p>
              <p>Госуслуги</p>
            </div>
          </div>
        </div>
        <div className="feed__section--link">
          <p>
            Все уведомления <span> 14</span>
          </p>
        </div>
      </div>
      <div className="feed__side">
        <div className="feed__side--ok">
          <img src="./images/ok.svg" alt="" />
          <p>Нет задолженостей</p>
        </div>
        <div className="feed__side--payments">
          <img src="./images/barcode.svg" alt="" />
          <p>Платежи по квитанции</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
