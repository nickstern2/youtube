import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment' style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
        <button className='ui button primary'>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
