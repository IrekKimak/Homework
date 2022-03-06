// const myName = "Irek";
// console.log(myName);
// let myAge = 41;
// console.log(myAge);
// const mySecondName = "David";
// console.log(mySecondName);
// const mySurname = "Kimak";
// console.log(mySurname);

// console.log(myName, myAge, mySecondName, mySurname);

// // let someVariable = 3 > 1;
// // console.log(someVariable);
// let hisName = undefined;
// console.log(hisName);
// let herAge = null;
// console.log(herAge);
// const IMIE = "Edek";
// let aaBB = `Mam na imie ${IMIE}.`;
// console.log(aaBB);

// let someVariable = 3 > 1;
// console.log(someVariable);

// console.log(typeof IMIE);
// console.log(typeof someVariable);

// const klasa = [
//   "Jan Kowalski",
//   "Adam Kownacki",
//   "Krystyna  Czubowna",
//   "Adam Mickiewicz",
//   "Jan Luka",
//   "Michal Wnyka",
// ];
// const uczenDoOdpowiedzi = klasa[1];
// console.log(uczenDoOdpowiedzi);

// const liczbaUczniow = klasa.length;
// console.log(liczbaUczniow);
// klasa.push("Piotr Lomnica");
// console.log(klasa);

// klasa.unshift("Jadwiga Koltun");
// console.log(klasa);

// klasa.sort();
// console.log(klasa);

// // const osoba = {
// //   imie: "Andrzej",
// //   wiek: 22,
// // };
// // const imieOsoby = osoba.imie;
// // const wiekOsoby = osoba["wiek"];
// // console.log(imieOsoby);
// // console.log(wiekOsoby);

// const osoba = {
//   imie: {
//     pierwszeImie: "Andrzej",
//     drugieImie: "Krzysztof",
//   },
//   wiek: 22,
// };
// const drugieImieOsoby = osoba.imie.drugieImie;
// console.log(drugieImieOsoby);

// const firstCompetitor = {
//   name: "Andrew",
//   age: 22,
//   points: 200,
// };
// const message = `${firstCompetitor.name} ma ${firstCompetitor.age} lata i zdobyl ${firstCompetitor.points} punktow! Wielkie brawa!`;
// console.log(message);

// const tablica = [1, 2, 3];
// console.log(typeof tablica);

// const x = [2];
// const y = x;
// y.push(5);
// console.log(x);
// console.log(y);

// const shoppingList = ["coffee", "sugar", "tea", "bread", "juice"];
// console.log(shoppingList);

// shoppingList.push("Lemons");
// console.log(shoppingList);

// shoppingList.push("Butter");
// console.log(shoppingList);

// shoppingList.unshift("Eggs");
// console.log(shoppingList);

// shoppingList.sort();
// console.log(shoppingList);

// shoppingList.pop("tea");
// console.log(shoppingList);

// shoppingList.shift("Butter");
// console.log(shoppingList);

// const aboutMe = {
//   imie: "Irek",
//   nazwisko: "Kimak",
//   wiek: 41,
//   szczesliwaLiczba: 14,
// };
// console.log(aboutMe);

// const mojaSzczesliwaLiczba = aboutMe.szczesliwaLiczba;
// console.log(mojaSzczesliwaLiczba);

// const mojWiek = aboutMe["wiek"];
// console.log(mojWiek);

// const z = 3;
// console.log(z == 8);
// console.log(z == 3);
// console.log(z == "3");
// console.log(z === 3);
// console.log(z === "3");
// console.log(z != 8);
// console.log(z != 3);
// console.log(z !== 3);

// const wiekAndrzej = 31;
// const wiekJakub = 25;
// const wiekKrysia = 30;
// const wiekMarysia = 42;
// const wiekWarunek = 30;

// console.log(wiekWarunek == wiekAndrzej);
// console.log(wiekWarunek == wiekJakub);
// console.log(wiekWarunek == wiekMarysia);
// console.log(wiekWarunek == wiekKrysia);

// console.log(wiekWarunek != wiekAndrzej);
// console.log(wiekWarunek != wiekJakub);
// console.log(wiekWarunek != wiekMarysia);
// console.log(wiekWarunek != wiekKrysia);

// console.log(wiekWarunek > wiekAndrzej);
// console.log(wiekWarunek > wiekJakub);
// console.log(wiekWarunek > wiekMarysia);
// console.log(wiekWarunek > wiekKrysia);

// console.log(wiekWarunek < wiekAndrzej);
// console.log(wiekWarunek < wiekJakub);
// console.log(wiekWarunek < wiekMarysia);
// console.log(wiekWarunek < wiekKrysia);

// const ageIgnas = 12;
// const ageAdas = 35;
// const ageMichas = 7;
// const ageZuzia = 24;
// const ageAda = 32;
// const ageMadzia = 9;

// // const ageRequirement = 9;
// // const maxAge = 24;

// // console.log(ageRequirement <= ageIgnas);
// // console.log(ageRequirement <= ageAdas);
// // console.log(ageRequirement <= ageMichas);
// // console.log(ageRequirement <= ageZuzia);
// // console.log(ageRequirement <= ageAda);
// // console.log(ageRequirement <= ageMadzia);

// // console.log(maxAge >= ageIgnas);
// // console.log(maxAge >= ageAdas);
// // console.log(maxAge >= ageMichas);
// // console.log(maxAge >= ageZuzia);
// // console.log(maxAge >= ageAda);
// // console.log(maxAge >= ageMadzia);

// const minAge = 9;
// const maxAge = 24;

// const Ignas = 12;
// const Adas = 35;
// const Michas = 7;
// const Zuzia = 24;
// const Ada = 32;
// const Madzia = 9;

// let group = [
//   { name: "Ignas", age: 12 },
//   { name: "Adas", age: 35 },
//   { name: "Michas", age: 7 },
//   { name: "Zuzia", age: 24 },
//   { name: "Ada", age: 32 },
//   { name: "Madzia", age: 9 },
// ];

// let qualifyingNames = group.filter(function (kid) {
//   return kid.age >= minAge && kid.age <= maxAge;
// });
// console.log(qualifyingNames);

// const y = "5";

// console.log(y !== "5");
// const randomName = "Mariusz";
// const randomnumber = 5;
// console.log(randomName === randomnumber);

// let a = 3;
// const b = 11;

// const c = a + b;
// console.log(c);

// const d = a * b;
// console.log(d);

// const e = b % a;
// console.log(e);

// console.log(++a);
// console.log(++a);
// console.log(++a);
// console.log(++a);

// let q = 12;
// let y = 5;
// console.log((q % 5) * 3);

// const x = 10;
// console.log(x < 11 && x > 5);

// console.log(x > 11 && x < 5);

// console.log(x < 11 || x == 5);
// console.log(x > 11 || x < 99);

// const x = 5;
// const y = 10;

// console.log(!(x > y));

// const myAge = 41;

// if (myAge === 0) {
//   console.log("You are not borned yet!");
// } else if (myAge < 18) {
//   console.log("You are in!");
// } else {
//   console.log("You are too old!!");
// }

// console.log(myAge > 18 ? "You are not old enough" : "you are old enough!");

// const mySalary = 8000;

// if (mySalary < 6000) {
//   console.log("How about adding extra 0 at the end!?");
// } else {
//   console.log("Long way to go....!");
// }

// const age = 15;

// if (age < 5) {
//   console.log("Przedszkolak");
// } else if (age < 14) {
//   console.log("Uczen szkoly podstawowj");
// } else if (age < 18) {
//   console.log("Licealista");
// } else if (age < 23) {
//   console.log("Student");
// } else {
//   console.log("Karierowicz");
// }

// const Ignas = 12;
// const Adas = 35;
// const Michas = 7;
// const Zuzia = 24;
// const Ada = 32;
// const Madzia = 9;

// const minAge = 9;
// const maxAge = 24;

// if (Ignas > minAge && Ignas < maxAge) {
//   console.log("Ignas spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Ignas nie spelnia warunkow wiekowych");
// }

// if (Adas > minAge && Adas < maxAge) {
//   console.log("Adas spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Adas nie spelnia warunkow wiekowych");
// }

// if (Michas > minAge && Michas < maxAge) {
//   console.log("Michas spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Michas nie spelnia warunkow wiekowych");
// }

// if (Zuzia > minAge && Zuzia < maxAge) {
//   console.log("Zuzia spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Zuzia nie spelnia warunkow wiekowych");
// }

// if (Ada > minAge && Ada < maxAge) {
//   console.log("Ada spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Ada nie spelnia warunkow wiekowych");
// }
// if (Madzia > minAge && Madzia < maxAge) {
//   console.log("Madzia spelnia kryteria wiekowe grupy");
// } else {
//   console.log("Madzia nie spelnia warunkow wiekowych");
// }

// if (myNumber % 2 == 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// const myNumber = 50;

// const result = myNumber % 2 == 0 ? "Number is even" : "Number is odd";
// console.log(result);
// const number = 10;
// number == 11;
// number == 10;
// const x = 10;
// console.log(x < 11 && x > 5);

// let number = 15;

// if (number % 3 === 0) {
//   console.log("liczba jest podzielna przez 3");
// } else if (number % 5 === 0) {
//   console.log("liczba jest podzielna przez 5");
// } else {
//   console.log("liczba nie jest podzielna przez 3");
// }

// let budget = 500;

// let garagePrice = 100;
// let availableWorkers = true;

// if (garagePrice <= budget && availableWorkers) {
//   console.log("budujemy garaz!!!");
// } else {
//   console.log("musimy pomyslec o czyms innym");
// }
// let num1 = 5;
// let num2 = 10;
// let greaterNum = (num1, num2);

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

console.log("You got an " + assignGrade(95));
console.log("You got a " + assignGrade(65));
