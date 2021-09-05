// Написать функцию groupBy, которая на вход принимает 2 параметра:

// 1) однородный массив элементов
// 2) функцию-коллбек, которая каждому элементу может сопоставить ключ группы

// Результатом работы функции должен быть объект, содержащий массивы элементов, доступные по ключу группы.

// Функция должна быть как можно более обобщённой, не иметь в реализации any, unknown или object.

interface objType<T> {
  [key: string]: Array<T>;
}

const groupBy = function <T>(arr: Array<T>, cb: (el: T) => number): objType<T> {
  return arr.reduce((acc: objType<T>, _, index, arr) => {
    const sortArr = [...arr].sort((a: T, b: T) => cb(a) - cb(b));
    if (sortArr[index - 1] && cb(sortArr[index - 1]) === cb(sortArr[index])) {
      acc[cb(sortArr[index])] = sortArr.filter(
        (el) => cb(sortArr[index]) === cb(el),
      );
    } else acc[cb(sortArr[index])] = [sortArr[index]];

    return acc;
  }, {});
};

// simple
console.log(groupBy([1.2, 1.1, 1.5, 0.3, 2.3, 0.4], Math.floor));
let result1 = {
  '0': [0.4],
  '1': [1.2, 1.1],
  '2': [2.3],
};

// complecated
console.log(groupBy(['one', 'two', 'three'], (el: string) => el.length));
console.log(
  groupBy(['one', 'wefwefwef', 'two', 'three'], (el: string) => el.length),
);
let result23 = {
  '3': ['one', 'two'],
  '5': ['three'],
};

// types
enum Gender {
  Male,
  Female,
}
type ElType = {
  g: Gender;
  n: string;
};
console.log(
  groupBy(
    [
      { g: Gender.Male, n: 'A' },
      { g: Gender.Female, n: 'B' },
      { g: Gender.Female, n: 'C' },
    ],
    (el: ElType) => el.g,
  ),
);

let result3 = {
  [Gender.Male]: [{ g: Gender.Male, n: 'A' }],
  [Gender.Female]: [
    { g: Gender.Female, n: 'B' },
    { g: Gender.Female, n: 'C' },
  ],
};
