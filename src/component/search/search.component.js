import React from 'react';
import './search.styles.css';

export const SearchBox=({placeholder,changeHandler})=>{

  return(
    <div>
    <input
    className='search' 
      type='search' 
      placeholder={placeholder}
      onChange={changeHandler}/>
    </div>
  )

}