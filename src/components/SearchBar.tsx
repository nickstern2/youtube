import React, { useState, FC } from "react";

type SearchBarProps = {
  onFormSubmit: (term: string) => Promise<void>;
};
const SearchBar: FC<SearchBarProps> = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
