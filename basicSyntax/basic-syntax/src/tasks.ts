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
  isAdmin: boolean,
  role?: string
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
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest"
}

const testUserWithRole: UserInterfaceWithOptionalEmail = {
  name: "Alexa",
  age: 24,
  isAdmin: false,
  role: Role.User
}

console.log(testUserWithRole)

// 12) Создай readonly поля в интерфейсе.
interface ReadonlyTest {
  name: string,
  age: number,
  readonly isAdmin: boolean
}

const userWithReadonly: ReadonlyTest = {
  name: "Aldebaran",
  age: 25,
  isAdmin: true
}

console.log(userWithReadonly)

// 13) Используй type alias и интерфейс вместе.
type Status = "online" | "offline"

interface UserWithStatus {
  name: string,
  age: number,
  status: Status
}

const testUserWithStatus: UserWithStatus = {
  name: "Regulus",
  age: 20,
  status: "online"
}

console.log(testUserWithStatus)

// 14) Реализуй функцию, которая принимает колбэк и вызывает его с типами.
const funcWithTypedCallback = (callback: (name: string, age: number) => void) => {
  const name = "Alisa"
  const age = 25
  callback(name, age)
}

funcWithTypedCallback((name, age) => {
  console.log(`Hi ${name}, you are ${age} years old`)
})

// 15) Создай Record<string, number> и заполни его.
const users: Record<string, number> = {
  "Alisa": 25,
  "Aldebaran": 30,
  "Orsted": 28,
  "Nova": 20
}

console.log(users)

// 16) Используй Partial<T> и Required<T>.
type UserPartial = {
  name: string,
  age: number,
  isAdmin: boolean
}

type UserReuired = {
  name?: string,
  age?: number,
  isAdmin?: boolean
}

const partialUser: Partial<UserPartial> = {
  name: "Sun"
}

const requiredUser: Required<UserReuired> = {
  name: "Moon",
  age: 35,
  isAdmin: false
}

console.log(partialUser)
console.log(requiredUser)

// 17) Создай функцию, возвращающую never.
const neverFunc = (msg: string): never => {
  throw new Error(msg)
}

// 18) Напиши функцию с перегрузкой function overloading.
function overloadingFunc (value: string): void
function overloadingFunc (value: number): void
function overloadingFunc (value: string | number): void {
  console.log(value)
}

overloadingFunc("hi")
overloadingFunc(123)

// 19) Используй typeof и keyof для получения типов.
const star = {
  name: "Sun",
  system: "Solar",
  isAlive: true
}

type StarTypes = typeof star[keyof typeof star]

// 20) Напиши функцию, принимающую объект и возвращающую keyof typeof.
const getKeys = <T extends object>(obj: T): (keyof T)[] => {
 return Object.keys(obj) as (keyof T)[]
}

console.log(getKeys(star))

// --------------------------------------------------------------------------------------------------------------------------------------//

// 2)🔹 TypeScript — Продвинутый уровень (21–40)

// 1) Создай обобщённую функцию (generic), которая возвращает переданный аргумент.
const genericFunc = <T>(value: T): T => {
  return value
}

console.log(genericFunc("HI"))

// 2) Ограничь generic типом (<T extends string>).

const genericFunc2 = <T extends string>(value: T): T => {
  return value
}
console.log(genericFunc2("HI"))

// 3) Используй infer внутри условного типа.
type SomeType<T> = T extends (infer U)[] ? U : never
type stringArray = SomeType<string[]>

// 4) Напиши утилиту DeepPartial<T>.
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

type TestDeepPartialUser = {
  name: string,
  age: number,
  friend: {
    name: string,
    age: number
  }
}

type DeepUser = DeepPartial<TestDeepPartialUser>

const testDeepUser: DeepUser = {
  friend: {
    name: "Alisa"
  }
}

// 5) Реализуй Pick<T, K> самостоятельно.
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type DeepUserWithOnlyName = MyPick<TestDeepPartialUser, "name">

const myPickUser: DeepUserWithOnlyName = {
  name: "Alisa"
}

console.log(myPickUser)

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
