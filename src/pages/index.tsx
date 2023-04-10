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

//タグ付きユニオンタイプスを利用した型ガード
type Shape = { kind: "circle", radius: number } | { kind: "square", sideLength: number };
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}


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


