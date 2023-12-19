const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Парсинг JSON-запросов
app.use(bodyParser.json());

// Роут для обработки запросов
app.post('/api/user/login', (req, res) => {
  // Обработка логики входа пользователя
  // Пример проверки данных пользователя
  const { username, password } = req.body;

  // Здесь могут быть логика проверки данных в базе данных

  // Пример успешной аутентификации
  if (username === 'user' && password === 'password') {
    res.json({ message: 'Аутентификация прошла успешно' });
  } else {
    res.status(401).json({ error: 'Неправильные учетные данные' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
