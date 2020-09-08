let credits = 23580;
const pricePerDroid = 3000;
let getDroidQuantity = Number(prompt('Сколько дроидов Вы хотите купить?'));
let totalPrice = getDroidQuantity * pricePerDroid;
let creditsLeft = credits - totalPrice;
if (totalPrice == 0) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${getDroidQuantity} дроидов, на счету осталось ${creditsLeft} кредитов.`,
  );
}
