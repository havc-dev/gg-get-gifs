import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <div className='form-addCat w-full'>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          className='w-3/4 rounded-l py-2 px-6 '
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Search...'
        />
        <button className='rounded-r px-6 bg-gray-700' type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
