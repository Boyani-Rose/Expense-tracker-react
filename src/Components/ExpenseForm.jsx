import React, { useState } from 'react'

function ExpenseForm ({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Food');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newExpense = {
        name,
        description,
        category,
        amount: parseFloat(amount),
        date
      };
      onSubmit(newExpense);
      setName('');
      setDescription('');
      setAmount('');
      setDate(new Date().toISOString().split('T')[0]);
    };
  
    return (
      <form onSubmit={handleSubmit} className="expense-form">
        <h2>Add New Expense</h2>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount ($):</label>
        <input
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        min="0.01" 
        step="0.01" 
        required 
      />
    </div>
    <div className="form-group">
      <label>Date:</label>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
    </div>
    <button type="submit">Add Expense</button>
  </form>
);
}

export default ExpenseForm;