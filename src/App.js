import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';
import ExpenseFilter from './Components/ExpenseFilter';

import './styles.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Onions', description: 'Weekly shopping', category: 'Food', amount: 120, date: '2023-05-15' },
    { id: 2, name: 'Internet', description: 'Monthly bill', category: 'Utilities', amount: 1500, date: '2023-05-10' },
    { id: 3, name: 'Movie', description: 'Weekend entertainment', category: 'Entertainment', amount: 2000, date: '2023-05-05' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses
    .filter(expense => {
      const matchesSearch = expense.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          expense.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || expense.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      
      <div className="form-and-table">
        
        <div className="form-container">
          <ExpenseForm onSubmit={addExpense} />
        </div>
        
        
        <div className="table-container">
          
          <div className="filter-search-container">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ExpenseFilter 
              categories={['All', 'Food', 'Utilities', 'Entertainment', 'Transportation']} 
              selectedCategory={filterCategory} 
              onCategoryChange={setFilterCategory} 
            />
          </div>
          
          <ExpenseTable 
            expenses={filteredExpenses} 
            onDelete={deleteExpense} 
            sortConfig={sortConfig}
            requestSort={requestSort}
          />
         
        </div>
      </div>
    </div>
  );
}

export default App;