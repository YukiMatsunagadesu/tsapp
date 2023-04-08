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
