import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Gordon Freeman");
  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
