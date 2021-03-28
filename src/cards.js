import React from 'react';


const Cards=({id,name,email,username})=>{

return(
<div className="bg-light-green dib br3 pa3 ma3 grow shadow-5 tc">
   
<img alt='robots' src={`https://robohash.org/${id}?100x100`} />
<div>
<h2>{name}</h2>
<p>{email}</p>
</div>

</div>


);
}
export default Cards;