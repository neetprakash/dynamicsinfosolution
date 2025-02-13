import React from 'react'
import { webtechData } from '../../data/Constants'

const TechCard = () => {
  const icons = import.meta.glob('../../../assets/icons/*.svg', { eager: true });
console.log(icons);
  return (
    <div>
{webtechData.map((item,id)=>{
const Icon = icons[`../../../assets/icons/${item.icon}.svg`];
// console.log(Icon);

  return ( <div key={id}>
  <span>{item.name}</span>
  {/* {Icon ? <Icon width={40} height={40} /> : null} */}
  {/* <img src={Angular} alt="" /> */}
 
 </div>)
})}
    </div>
  )
}

export default TechCard