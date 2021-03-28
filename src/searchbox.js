import React from 'react';
import 'tachyons';

const Searchbox=({onsearchchanged})=>
{

    return(
     <div className='pa3'>
       <input className='bg-lightest-blue pa3 ba b--green  tc'
       type='search' placeholder='search robots' onChange={onsearchchanged} />


     </div>



    );

}
export default Searchbox;