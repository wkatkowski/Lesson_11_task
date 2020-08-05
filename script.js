// alert("Я JavaScript!");



// let admin;
// let name = "John";
// admin = name;
// alert(admin);


// let ourWorldName = "World";
// let currentUserName = "John"


// const BIRTHDAY = '18.04.1982'; да
// const AGE = someCode(BIRTHDAY); нет


// let name = "Ilya";
// alert( "hello ${1}" ); // выражение+число в строку
// alert( `hello ${"name"}` ); // выражение+строка в строку
// alert( `hello ${name}` ); // выражение+переменная в строку


// alert("" + 1 + 0); //"10"
// alert("" - 1 + 0); //-1
// alert(true + false); //1
// alert(6 / "3"); //2
// alert("2" * "3"); //6
// alert(4 + 5 + "px"); //"9px"
// alert("$" + 4 + 5); //"$45"
// alert("4" - 2); //2 
// alert("4px" - 2); //NaN
// alert(7 / 0); //Infinity
// alert("  -9  " + 5); //"-9  5"
// alert("  -9  " - 5); //14
// alert(null + 1); //1
// alert(undefined + 1); //NaN
// alert(" \t \n" - 2); //-2



// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// alert( a ); // 2
// alert( b ); // 2
// alert(c);
// alert(d);


// let a = 2;
// let x = 1 + (a *= 2);

// alert(a); //4
// alert(x); //5


// alert(5 > 4); //true
// alert("ананас" > "яблоко"); //false
// alert("2" > "12"); //true
// alert(undefined == null); //true
// alert(undefined === null); //false
// alert(null == "\n0\n"); //false
// alert(null === +"\n0\n"); //false

// let name = prompt("What is your name?");
// alert(name);


// if ("0") {
//     alert( 'Привет' ); //да
//   }

// let company = prompt('Какое «официальное» название JavaScript?');
//   if (company == 'ECMAScript') {
//     alert('Правильно!');
//   } else {
//     alert('Неправильно. "ECMAScript"!');
//   }

// let number = prompt('Назовите число');

//   if (number > 0) {
//     alert(1);
//   } else if (number < 0) {
//     alert( -1 );
//    } else {
//     alert(0);
//   }


// let result;
// let a = 4;
// let b = 5;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// alert(result);


// let login = prompt('Назовите логин');

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// alert(message)


// alert( null || 2 || undefined ); //2

// alert( alert(1) || 2 || alert(3) ); //1,2

// alert( 1 && null && 2 ); //null

// alert( alert(1) && alert(2) ); //1, undefined

// alert( null || 2 && 3 || 4 ); //3

// if (age >= 14 && age <= 90)

// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)

// if (-1 || 0) alert( 'first' ); //first
// if (-1 && 0) alert( 'second' ); // - 
// if (null || -1 && 1) alert( 'third' ); //third



let login = prompt("Кто там?");

if (login == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (login == '' || login == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}