import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Заменяем создание корня на обычный рендер
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // указываем элемент, куда будет монтироваться приложение
);

// Если вы хотите начать измерять производительность в вашем приложении,
// передайте функцию, чтобы записать результаты (например: reportWebVitals(console.log))
// или отправьте на аналитический эндпоинт. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();

