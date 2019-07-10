import React from 'react';

const SearchForm = props =>  {
  return(
    <form onSubmit={props.submit}>
      <input type="text" placeholder={props.default} required/>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
