// 1. Stwórz zmienną:

// a) typu string o nazwie name i wartości 'Jan',
const name = "Jan";

// b) typu number o nazwie age i wartości 22,
const age = 22;

// c) typu boolean o nazwie isOpen i wartości true,
const isOpen = 9 > 5;

// d) typu string o nazwie stringBoolean o wartości true
const stringBoolean = "Jazz" != "Blues";

// e) typu string o nazwie stringNumber o wartości 100
const stringNumber = "100";

// 2. Za pomocą console.log wyświetl wyniki poniższych równań przypisując je do zmiennej:

// a) przypisz do zmiennej wynik reszty z dzielenia 10 przez 4
const firstNumber = 10;
const secondNumber = 4;
let result = firstNumber % secondNumber;
console.log(result);

// b) utwórz i zrób console.log zmiennej zawierającej zdanie "Tomasz ma 33 lata"
// gdzie 33 i "Tomasz" to również będą zmienne
const someName = "Tomasz";
const someAge = "33";
let someonesAge = someName + " ma " + someAge + " lata";
console.log(someonesAge);

// c) Utwórz string "jan kowalski" na dwa sposoby dodając przerwe między wyrazami,
// które są nastepującymi stringami: const firstName = 'jan', const lastName = 'kowalski'
// (Podpowiedź: możesz użyć sposobu standardowego i z użyciem ``)
const firstName = "jan";
const lastName = "kowalski";
let janKowalski = firstName + " " + lastName;
// let janKowalski = firstName + ` ` + lastName;
console.log(janKowalski);

// 3. Dodaj dwie cyfyr(dowolnie wybranych) do zmiennej, później zrób consol.log tej zmiennej,
// aby wyświetliło się w następujący sposób: 'wynik', 4  <--- (4 to przykładowa wartość zmiennej)
const numberOne = 5;
const numberTwo = 25;
const sum = numberOne + numberTwo;
console.log(`'wynik'` + ` ,`, sum);

// 4. Stwórz tablicę:

// a) 3 elementową z cyframi od 1 do 3
const tableOne = [1, 2, 3];
console.log(tableOne);

// b) 3 elementową z markami aut,
const carBrands = ["BMW", "Mercedes", "Toyota"];
console.log(carBrands);

// c) 3 elementową składającą się z wartości true, false i true

const tableTwo = [true, false, true];
console.log(tableTwo);

// d) pustą tablicę,
const emptyTable = [];
console.log(emptyTable);

// e) składającą się z 5 dowolonych wartości z pomieszanymi typami,

const mixedTypesTable = [55, "Java Script", true, null, undefined];
console.log(mixedTypesTable);

// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest
// druga w kolejności od początku,
console.log(mixedTypesTable[1]);

// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,

const tableWithThreeElements = [5, "Word", 666];
console.log(tableWithThreeElements.length);

// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę?
const emptyTableTwo = [];
emptyTable.push(Math.floor(Math.random() * 100));
console.log(emptyTable);

// i) *** Stwórz tablicę z obiektami, które będą zawierały imię, nazwisko i wiek osoby,
// tablica powinna zawierać 3 takie obiekty i wyświetl imię drugiej osoby z tej tablicy,

const variousMusicians = [
  { name: "Jimi", surname: "Hendrix", age: 38 },
  { name: "Mick", surname: "Jagger", age: 56 },
  { name: "Carlos", surname: "Santana", age: 63 },
];
console.log(variousMusicians[1]["name"]);

// j) *** stwórz zmienną z wartością = 2 i powiedz czy da sie tą zmienną umieścić w
// deklaracji tablicy tak aby uzyskać tablicę const arr = [2] ?
const someNumber = 2;
const arr = [];
arr.push(someNumber);
console.log(arr);

// 5. Stwórz obiekt:

// a) pusty obiekt,
const emptyObject = {};

// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza',
const person = { name: "Iza" };
console.log(person.name);

// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie
const personDetails = {
  name: "Irek",
  lastName: "Kimak",
  age: 41,
  drivingLicense: true,
};

// d) z obiektu personDetails zrób consol.log samego wieku,
console.log(personDetails.age);

// e) zrób console.log całego obiektu,
console.log(personDetails);
// f) stwórz obiekt, który zawiera marke, kolor, rok produkcji auta oraz tablicę z
// latami w których samochód był sprzedany innemu właścicielowi, możesz wpisać dowolny
// 3 daty zawierające tylko rok, chodzi tutaj o dodanie tablicy wewnątrz obiektu,

const soldCarHistory = {
  brand: "BMW",
  colour: "red",
  YOM: 2005,
  sold: [2007, 2010, 2018],
};
console.log(soldCarHistory);

// 6. Warunki i zmienne:

// a) Podaj przykład i różnice między typem wartościowym, a referencyjnym? Czyli czym
// różnią się zmienne proste od złożonych?

// Typy proste służą do zapisywania prostych danych, natomiast typy referencyjne do zapisywania złożonych obiektów (a właściwie odnośników do nich- referencji).

// Typy proste:
// String, number, Boolean, null, undefined

// Typy zlozone:
// obiekty (array, object, function)

const a = { javaScript: "is awesome" };
const b = { javaScript: "is awesome" };
const c = a;

console.log(a === b); // false
console.log(a === c); // true

// Typy referencyjne są porównywane przez referencję, a nie przez wartość stad rozne wyniki

// b) Stwórz obiekt person zawierający dane takie jak imie, nazwisko, wiek, posiadanie prawa
// jazdy(true lub false) oraz czy osoba jest pijana(rowniez true false), następnie
// stwórz instrukcje warunkową która w zależnosci od tego jakie dane będą w zmiennych
// wypisze nam czy dana osoba może jechać autem czy nie, weź pod uwage wszystkie aspekty
// jak wiek, bycie pijanym oraz posiadanie prawa jazdy,
const personDriver = {
  name: "Eric",
  surname: "Smith",
  age: 23,
  drivingLicense: true,
  sober: true,
};

console.log(personDriver);

if (
  personDriver.age > 18 &&
  personDriver.drivingLicense == true &&
  personDriver.sober == true
) {
  console.log("You can drive");
} else if (
  personDriver.age > 18 &&
  personDriver.drivingLicense == true &&
  personDriver.sober == false
) {
  console.log("You are drunk! Don't drive!!");
} else if (personDriver.age < 18) {
  console.log("You are too young to drive!");
} else if (personDriver.drivingLicense == false) {
  console.log("You don't have a driving license yet so you can't drive!");
}
// c) Znasz sposób jak zdestrukturyzować obiekt tak aby móc w bardzo łatwy sposób
// użyć kluczy w nim zawartych, np. majac obiekt:
const car = {
  model: "mustang",
  productionYear: 2020,
  color: "red",
};
// Chciałbym utworzyć następującą zmienną:
// const anotherResult = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}`;
// Jak zrobić aby taka zmienna wyświetliła poprawne dane z obiektu, nie zmieniając treści zmiennej?
const anotherResult = `Moje auto to ${car.model} i zostało wyprodukowane w roku ${car.productionYear}`;
console.log(anotherResult);

// d) Skróć zapis kodu jak najbardziej się da bez usuwania zmiennej isAdult
// (zrób to na dwa sposoby, bez użycia ternary operatora i z uzyciem):
const isAdult = false;
// if (isAdult === true) {
//   console.log("Możesz kupić alkohol");
// } else if (isAdult === false) {
//   console.log("Nie możesz kupić alkoholu, jesteś nieletni!");
// }

const isAdultResult =
  isAdult === true
    ? "Mozesz kupic alkohol"
    : "Nie mozesz kupic alkoholu, jestes nieletni!";
console.log(isAdultResult);

if (isAdult === true) {
  console.log("Możesz kupić alkohol");
} else {
  console.log("Nie możesz kupić alkoholu, jesteś nieletni!");
}
