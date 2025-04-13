import React from 'react';

function ExpenseFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="expense-filter">
      <select 
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;