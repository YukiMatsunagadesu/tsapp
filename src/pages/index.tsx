import { Card } from "@/components/Card";



let foo=123;
let fooo:number=243

function addNumbers(num1: number, num2: number){
  return num1 + num2;
}
const result = addNumbers(2, 3);
console.log(result); 
const voo:string='f'
const fooe :boolean =false;
const fe:null=null;
const fed:undefined=undefined;
const fooddd:"foo"="foo";
const foooo:number[]=[1,2,3];
const fooood:Array<number>=[1,2,3];
const fooooge:(number|string)[]=[1,'d','f'];
const neogoe:[string,number]=["fe",3]
const geg:any='j'
const gegge:unknown='j' //anyよりはbetter
function myVoidFunction(argument1: number, argument2: string): void {
  console.log(`Argument 1 is ${argument1} and Argument 2 is ${argument2}.`);
}
myVoidFunction(123, "hello");


const person: Record<string, any> = {
  firstName: 'grgohgrn',
  lastName: 'Dogre',
};

const person2: {[key:string]:unknown} = {
  firstName: 'grgohgrn',
  lastName: 'Dogre',
};

type stringnumber= string|number; //型エイリアス

enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

//intersectiontypes
type foo={
  a:number;
  b:string;
}
type bar={
  c:number;
  d:string;
}
type foobar=foo & bar;

//typeof
let fnei:string;
type fofeo=typeof fnei;

type obj={
  foo:string;
  bar:number;
};
type key=keyof obj
const key:key="foo" //fooかbarのユニオン型

//ダウンキャスト
const theme={
  color:"red" as const, //as "red"でもいいね
}

let x = "hello"; // 文字列リテラル
x = "hello world"; // 文字列型として推論される

//nonnullassertion
function fobgeio(str: string | null): number {
  return str!.length;
}


//mappedtypesまとめ
type User={
  name:string;
}&Data

type Data={
  // height:number;
  // weight:number;
  [k in'height'|'weight']:number;
}

const user:User={
  name:'nana',
  height:222,
  weight:433,
}
//type作って[k in keyof foo]:numberとかで他の方参照してできる
type Person = {
  name: string;
  age: number;
};

type PersonOptional = {
  [P in keyof Person]?: Person[P];
};

const personOptional: PersonOptional = {
  name: 'Alice',
};

//タグ付きユニオンタイプスを利用した型ガード
type Shape = { kind: "circle", radius: number } | { kind: "square", sideLength: number };
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}
// エラーになる
// function aded(a: number | string, b: number | string) {
//   return a + b;
// }

// 型ガード
function addd(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addd(1, 2)); 
console.log(addd('Hello', 'World'));
console.log(addd(1, 'Hello')); 


console.log(addd(1, 2)); 
console.log(addd('Hello', 'World')); 
console.log(addd(1, 'Hello')); 

//ユーザー定義の型ガード
interface Pedrson {
  name: string;
  age: number;
}

function isPerson(obj: any): obj is Pedrson {
  return obj && typeof obj.name === 'string' && typeof obj.age === 'number';
}

function greet(person: Pedrson | string) {
  if (isPerson(person)) {
    console.log(`Hello, ${person.name}!`);
  } else {
    console.log(`Hello, ${person}!`);
  }
}

greet({ name: 'Alice', age: 25 }); // "Hello, Alice!"
greet('Bob'); // "Hello, Bob!"

//utilitytypes色々
//partial
type Persons = {
  name: string;
  age: number;
  job: string;
};

type PartialPerson = Partial<Persons>;

const partialPerson: PartialPerson = {
  name: "ngoe"
};

//required
type OptionalPerson = {
  name?: string;
  age?: number;
  job?: string;
};

type RequiredPerson = Required<OptionalPerson>;

const requiredPerson: RequiredPerson = {
  name: "Bob",
  age: 25,
  job: "Engineer"
};
//readonly
type MutablePerson = {
  name: string;
  age: number;
  job: string;
};

type ReadonlyPerson = Readonly<MutablePerson>;

const readonlyPerson: ReadonlyPerson = {
  name: "Charlie",
  age: 30,
  job: "Designer"
};
// readonlyPerson.age=34

//record
type Key = "foo" | "bar" | "baz";
type Value = number;

type RecordType = Record<Key, Value>;

const record: RecordType = {
  foo: 1,
  bar: 2,
  baz: 3
};

//pick
type pickPerson = {
  name: string;
  age: number;
  job: string;
};

type NameAndJob = Pick<pickPerson, "name" | "job">;

const nameAndJob: NameAndJob = {
  name: "Alice",
  job: "Engineer"
};

//returntype
function getUser(id: number): { name: string; age: number } {
  return { name: "Alice", age: 20 };
}

type ReturnGetUser = ReturnType<typeof getUser>;

const userd: ReturnGetUser = { name: "Bob", age: 25 };

//omit
type Personc = {
  name: string;
  age: number;
  job: string;
};

type PersonWithoutJob = Omit<Personc, "job">;

const personWithoutJob: PersonWithoutJob = {
  name: "Alice",
  age: 20
};

//extract
type Persone = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  age: number;
  job: string;
};

type CommonProps = Extract<keyof Persone, keyof Employee>;

const commonProps: CommonProps = "name";

//exclude
type fgine=Exclude<string|number,string>


//parameters型 
// (引数tupleで取得)
function foocsc(a:string,b:number[],c:boolean){
  return;
}
type focwo=Parameters<typeof foocsc>

export default function Home() {
  const object={
    user:{
      name:'ken'
    }
  }
  const myObject = { name: 'John', age: 30, location: 'New York' };
  const analytics=[12,24,53]
  return (
    <>
      <Card {...myObject } hi={'hi'} analytics={analytics} jiji={'jiji'} {...object}/>
      <div className='text-3xl'>{foo}あれ</div>
      <p>{fooo}</p>
      <p className="text-xs">{voo}</p>
      <p className="text-red-500">ん</p>
    </>
  )
}


