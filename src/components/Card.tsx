import React from 'react'



type Cardprops={
  name:string;
  age:number;
  location:string;
  hi:string;
  analytics:number[];
  jiji:'jiji';
  user:{name:string}
}

export const Card = (props: Cardprops) => {
  return (
    <>
      名前card
      これでどう{props.name}
      {props.age}
      {props.location}でどうなん
      {props.hi}
      {props.analytics[0]}
      {props.analytics[1]}
      {props.analytics[2]}
      {props.jiji}
      {props.user.name}
    </>
  )
}
