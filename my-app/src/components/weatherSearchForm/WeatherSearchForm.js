import React from 'react';

const WeatherSearchForm = props =>  {
  return(
    <form onSubmit={props.submit}>
      <input type="text" placeholder={props.defaultCity} required/>
      <input type="date" placeholder={props.defaultDate} required/>
      <button >Search</button>
    </form>
  );
}

export default WeatherSearchForm;
