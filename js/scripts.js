// Задание 1 (+)

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задание 2 (+)

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let o = 0; o < arr1.length; o++) {
    if(arr1[o] > -10 && arr1[o] < -3)
    console.log(arr1[o]);
}

// Задание 3 (+)

let arr2 = [];

for(let i = 23; i <= 57; i++) {
    arr2.push(i);
}
console.log(arr2);


for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let t = 0;

while(t < arr2.length) {
    console.log(arr2[t]);
    t++;
}

// Задание 4

let arr3 = ['10', '20', '30', '50', '235', '3000'];

// console.log(arr3);

let arr31 = arr3.join(', ');
 console.log(arr31[2]);

 let first;
// console.log(arr3.indexOf('10'), arr31.indexOf('2'), arr31.indexOf('5'));

for(i = 0; i < arr31.length; i++) {
    if(String(arr31[i])[0] == '2' || first == 2 || first == 5) {
        console.log(arr31[i]);
    }
}


for(i = 0; i < arr31.length; i++) {
    if(arr31[i] === '1'+'') {
        console.log(arr31[i]);
    }
}

// Задание 5 (+)

let arr4 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

console.log(arr4);

for(let i = 0; i < arr4.length; i++) {
    if(i <= 4) {
        document.write(`${arr4[i]} `);
    } else {
        document.write(`<b>${arr4[i]}</b> `);
    }    
}

// Задание 6 (+)

let arr5 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

arr5.push(19);

let f = arr5.length-1;

console.log(arr5[f]);

// Задание 7 (+)

// let arr6 = [];

// for(i = 0; i < +Infinity; i++) {
//     arr6[i] = +prompt('Укажите числа?')
//     if(arr6[i] == '') {
//         break;
//     }
// }

// console.log(arr6);

// arr6.sort();
// console.log(arr6);

// Задание 8 (+)

let arr7 = [12, false, 'Текст', 4, 2, -5, 0];

arr7.reverse([]);
console.log(arr7);

let p = 0;

while(p < arr7.length) {
    console.log(arr7[p]);
    p++;
}

// Задание 9 (+)

let arr8 = [5, 9, 21, , , 9, 78, , , , 6],
    u = 0,
    d = 0;

for(let d = 0; d < arr8.length; d++) {
   if(d == ' ') {
    u += 1;
    }
}

console.log(arr8[d]);








/*

// arr.push('Добавленный элемент массива в конце');
// arr.unshift('Добавленный элемент массива в начале');

// arr.pop();  (Удаляем элемент массива с конца - пустые скобки);
// arr.shift(); (Удаляем элемент массива с начала - пустые скобки);

// splice (удаляет, вставляет и заменяет элементы массива);
// slice (копирует часть другого массива или весь массив);
// split (превращает строку в массив);
// join (превращает массив в строку с каким-то разделителем);
// sort (сортирует значения массива);
// concat (объеденяет несколько массивов в один);
// indexOf и lastIndexOf (поиск значения в массиве (indexOf - читает массив Слева на Право, LastIndexOf - Справо на Лево));





// splice (удаляет, вставляет и заменяет элементы массива)

// splice(2, 3, 'значение которое добавляем'); имеет три значения, 1-ое значение - с какого индекса начинаем; 2-ое значение - сколько элементов удаляем; 3-е значение - указываем значение которое добавляем (удаляет, вставляет и заменяет элементы массива) 

let arr2 = ['Я', 'изучаю', 'JavaScript'];

arr2.splice(1, 1); // начиная с первого индекса, удаляем одно значение
console.log(arr2);

arr2.splice(1, 0, 'изучаю'); // начиная с первого индекса (1) [при добавлении, значение будет добавленно перед тем индексом котором мы указали в splice, в нашем случае перед индексом (1)]; ничего не удаляем (0) и добавляем (изучаю)

arr2.splice(2, 0, 'сложный', 'язык');
console.log(arr2);

arr2.splice(2, 2); // начиная со 2-ого индекса удаляем 2 значения



// slice (копирует часть другого массива или весь массив)

let arr3 = ['Почему', 'надо', 'учить', 'JavaScript'];
let arr33 = arr3.slice(1, 3); // Копирует часть (несколько значений) с другого массива, начиная с 1-ого индекса до 3-его НЕ включая его!!!
console.log(arr33);

let arr44 = arr3.slice(1); // Копирует часть массива, начиная с 1-го индекса и до конца
console.log(arr44);

let arr55 = arr3.slice(); // Копирует весь массив !!! Но лучше использовать другой способ - присвоить новой переменной весь копируемый массив массив
console.log(arr55);

let arrCopy = arr3; // Рекомендуется такой способ копирования целого массива
console.log(arrCopy);



// split (превращает строку в массив)

let names = ['Маша,Петя,Вася,Юля'];
let namesArr = names.split(','); // будет разделять значения в массиве через запятую (запятая как разделитель), можно указывать разделитель пустым - ''.
console.log(namesArr);
// console.log(names.split(',')); можно не задавать новую переменную и (namesArr), а сразу выводит в консоль (names.split(','))

namesArr = names.split(',', 2); // сохраняет в массив только два значения из строки (2 первых значения)
console.log(namesArr);



// join (превращает массив в строку с каким-то разделителем)

let arrNames = ['Маша,Петя,Вася,Юля'];
let strNames = arrNames.join(';'); // будет разделять значения в строке через ';'
console.log(strNames);
// console.log(arrNames.join(';')); можно не задавать новую переменную (strNames), а сразу выводит в консоль (arrNames.join(';'))

// повторение строки с помощью конструктора new Array

console.log(new Array(10).join('ах')); //повторяет текст 'ах' 10 раз



// concat (объеденяет несколько массивов в один)

let arr7 = [1, 2, 3, 4, 5],
    arr8 = [11, 12, 13],
    arr9 = [7, 8, 9, 10, 11, 13];

let arrNums = arr7.concat(arr8, arr9);

console.log(arrNums);



// indexOf и lastIndexOf поиск значения в массиве

let newarrNames = ["Саша", "Петя", "Аня", "Даша", "Юля", "Петя", "Катя"];
console.log(newarrNames);

console.log(newarrNames.indexOf('Петя')); // проверяет есть ли в массиве значение ('Петя') - читает массив Слева на Право, если в массиве есть значение ('Петя'), то выведет в консоль индекс этого значения (в данном случае индекс (1)), если такого значения нет в массиве, то выведет (-1);

console.log(newarrNames.lastIndexOf('Петя')); //проверяет есть ли в массиве значение ('Петя') - читает массив Справо на Лево, если в массиве есть значение ('Петя'), то выведет в консоль индекс этого значения (в данном случае индекс (5)), если такого значения нет в массиве, то выведет (-1);

*/