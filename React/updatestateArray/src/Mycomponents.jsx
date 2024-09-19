import React, { useState } from 'react';

function Mycomponents() {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Pear']);

  function handleAddFood() {
    const newfood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';
    // setFoods([...foods,newfood]);
    setFoods((foods) => [...foods, newfood]);
  }

  function handleRemovedFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemovedFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter the food text" />
      <button onClick={handleAddFood}>AddFood</button>
    </div>
  );
}

export default Mycomponents;
