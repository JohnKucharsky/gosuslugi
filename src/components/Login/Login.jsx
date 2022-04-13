import React from "react";
import "./login.scss";

const Login = ({ setShowHome }) => {
  return (
    <div className="login">
      <div className="login__main">
        <div className="login__main--container">
          <img src="./images/gosuslugi.svg" alt="" />
          <div className="login__main--input">
            <label htmlFor="email">Телефон/Email/СНИЛС</label>
            <input type="text" />
          </div>
          <div className="login__main--input">
            <label htmlFor="password">Пароль</label>
            <input type="text" />
            <p>Восстановить</p>
          </div>
          <button onClick={() => setShowHome(true)}>Войти</button>
          <p className="login__main--bottomtext">
            Войти с электронной подписью
          </p>
          <p className="login__main--bottomtext">Не удаётся войти?</p>
        </div>
        <p className="login__main--reg">Зарегистрироваться</p>
        <div className="login__main--side">
          <img src="./images/Esia_a1.svg" alt="" />
          <p>Куда ещё можно войти с паролем от Госуслуг?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
