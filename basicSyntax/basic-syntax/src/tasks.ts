// 1)🔹 TypeScript — Базовый уровень (1–20)

// 1) Объяви переменные с типами string, number, boolean, null, undefined.
const string: string = "Hello";
const number: number = 5;
const bool: boolean = true;
// переменная типа null может принимать в себя как значение только null, так-же для undefied
const nullTyped: null = null
const undef: undefined = undefined
console.log(string, number, bool, nullTyped, undef)

// 2) Создай функцию, которая принимает 2 числа и возвращает их сумму (с типами).
const typedSum = (a: number, b: number) => {
  const sum: number = a + b
  return sum
}
console.log(typedSum(2, 2))

// 3) Напиши функцию с необязательным параметром.
const multiplyOptional = (a: number, b?: number) => {
  return b !== undefined ? a * b : a
}
console.log(multiplyOptional(2))
console.log(multiplyOptional(2, 2))

// 4) Используй тип union в параметре функции (string | number).
const unionFunc = (a: string | number) => {
  return typeof a === "string" ? "i'm a string and it's my value: " + a : `i'm a number with ${a} value`
}
console.log(unionFunc("hi"))
console.log(unionFunc(5))

// 5) Создай тип User с полями name: string, age: number, isAdmin: boolean.
type User = {
  name: string,
  age: number,
  isAdmin: boolean
}

const testUser: User = {
  name: "Alisa",
  age: 25,
  isAdmin: true
}

const testUser2: User = {
  name: "Janna",
  age: 25,
  isAdmin: false
}

console.log(testUser)

// 6) Используй интерфейс вместо типа.
interface UserInterface {
  name: string,
  age: number,
  isAdmin: boolean
}

const testUserInterface: UserInterface = {
  name: "Damian",
  age: 30,
  isAdmin: false
}

console.log(testUserInterface)

// 7) Сделай интерфейс User с необязательным полем email.
interface UserInterfaceWithOptionalEmail {
  name: string,
  email?: string,
  age: number,
  isAdmin: boolean
}

const testUserWithoutEmail: UserInterfaceWithOptionalEmail = {
  name: "Artur",
  age: 40,
  isAdmin: false
}

const testUserWithEmail: UserInterfaceWithOptionalEmail = {
  name: "Nova",
  email: "test@test.test",
  age: 20,
  isAdmin: false
}

console.log(testUserWithoutEmail)
console.log(testUserWithEmail)

// 8) Реализуй функцию, принимающую User и возвращающую приветствие.
const sayHiToUser = (object:  User) => {
  return `Hi ${object.name}, you are ${object.age} years old, and you are ${object.isAdmin ? `the admin` : `not the admin`}`
}

console.log(sayHiToUser(testUser))
console.log(sayHiToUser(testUser2))

// 9) Создай массив чисел с типом number[].
const numbersArray: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

console.log(numbersArray)

// 10) Создай кортеж [string, number].
const firstTuple: [string, number] = ["Alisa", 25]

console.log(firstTuple)

// 11) Используй перечисление enum для ролей пользователя.

// 12) Создай readonly поля в интерфейсе.

// 13) Используй type alias и интерфейс вместе.

// 14) Реализуй функцию, которая принимает колбэк и вызывает его с типами.

// 15) Создай Record<string, number> и заполни его.

// 16) Используй Partial<T> и Required<T>.

// 17) Создай функцию, возвращающую never.

// 18) Напиши функцию с перегрузкой function overloading.

// 19) Используй typeof и keyof для получения типов.

// 20) Напиши функцию, принимающую объект и возвращающую keyof typeof.

// --------------------------------------------------------------------------------------------------------------------------------------//

// 2)🔹 TypeScript — Продвинутый уровень (21–40)

// 1) Создай обобщённую функцию (generic), которая возвращает переданный аргумент.

// 2) Ограничь generic типом (<T extends string>).

// 3) Используй infer внутри условного типа.

// 4) Напиши утилиту DeepPartial<T>.

// 5) Реализуй Pick<T, K> самостоятельно.

// 6) Создай Mapped type, изменяющий тип всех полей на string.

// 7) Сделай функцию, возвращающую только поля объекта определённого типа.

// 8) Используй Exclude и Extract.

// 9) Создай интерфейс, который зависит от другого generic-интерфейса.

// 10) Реализуй цепочку промисов с типами.

// 11) Используй this в классе и методах.

// 12) Создай abstract класс и унаследуй от него.

// 13) Используй private, protected, public поля.

// 14) Добавь декоратор для класса (пример: логгер).

// 15) Сделай строгую типизацию событий (event map).

// 16) Преобразуй массив объектов в объект по id (Record<number, User>).

// 17) Реализуй функцию валидации с возвратом ошибок по полям.

// 18) Используй as const и напиши тип по значению массива.

// 19) Создай типизированный EventEmitter.

// 20) Типизируй асинхронную функцию с async/await.
