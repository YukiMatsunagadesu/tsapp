
let foo=123;
let fooo:number=243

function addNumbers(num1: number, num2: number){
  return num1 + num2;
}
const result = addNumbers(2, 3);
console.log(result); 
const voo:string='hi';
const fooe :boolean =false;
const fe:null=null;
const fed:undefined=undefined;
const fooddd:"foo"="foo";
const foooo:number[]=[1,2,3];
const fooood:Array<number>=[1,2,3];
const fooooge:(number|string)[]=[1,'d',3];
const neogoe:[string,number]=["fe",3]
const geg:any='j'
const gegge:unknown='j' //anyよりはbetter
function myVoidFunction(argument1: number, argument2: string): void {
  console.log(`Argument 1 is ${argument1} and Argument 2 is ${argument2}.`);
}
myVoidFunction(123, "hello");


export default function Home() {
  return (
    <>
      <p>{foo}</p>
      <p>{fooo}</p>
      <p>{voo}</p>
    </>
  )
}
