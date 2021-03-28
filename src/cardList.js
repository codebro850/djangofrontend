import React from 'react';
import Cards from './cards';


const CardList=({robots})=>{
    const Cardlistcomponent=robots.map((user,i)=>{
        return <Cards key={i} id={i} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>
    })

return(
<div>
    {Cardlistcomponent}
</div>


);


}
export default CardList;