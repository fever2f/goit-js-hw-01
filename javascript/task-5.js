let getCountry = prompt('Страна');
getCountry = getCountry.toLowerCase();

let cost;
let country;
let result;

switch (getCountry) {
  case 'китай':
    country = 'Китай';
    cost = 100;
    break;

  case 'чили':
    country = 'Чили';
    cost = 250;
    break;

  case 'австралия':
    country = 'Австралию';
    cost = 170;
    break;

  case 'индия':
    country = 'Индию';
    cost = 80;
    break;

  case 'ямайка':
    country = 'Ямайку';
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
result = `Доставка в ${country} будет стоить ${cost} кредитов`;
console.log(result);
