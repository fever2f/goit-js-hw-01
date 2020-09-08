const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('Введите пароль: ');
if (password === null) {
  message = 'Отменено пользлователем';
} else if (password === 'jqueryismyjam') {
  message = 'Добро пожаловать';
} else if (password !== 'jqueryismyjam') {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
