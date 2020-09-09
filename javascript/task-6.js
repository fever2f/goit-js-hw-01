let total = 0;
let getNumber;
while (getNumber !== null) {
  getNumber = prompt('Введите число');
  total+=Number(getNumber)
}

alert(`Общая сумма чисел равна ${total}`);
