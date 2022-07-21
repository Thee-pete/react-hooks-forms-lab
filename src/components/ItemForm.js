import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] =useState("Produce")
 

  function onChangeName(event){
    setName(event.target.value)
  }
  function onCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleOnSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(), 
      name:name,
      category:category,
    });
    

  }

  return (
    <form className="NewItem" onSubmit={handleOnSubmit}>
      <label>
        Name:
        <input type="text" name={name} onChange={onChangeName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange= {onCategoryChange}>
        <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
