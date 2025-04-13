import React from 'react';

function ExpenseTable({ expenses, onDelete, sortConfig, requestSort }) {
  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="expense-table-container">
      <h2>Expense Records</h2>
      {expenses.length === 0 ? (
        <p>No expenses found matching your criteria.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('name')}>
                Name {getSortIndicator('name')}
              </th>
              <th onClick={() => requestSort('description')}>
                Description {getSortIndicator('description')}
              </th>
              <th onClick={() => requestSort('category')}>
                Category {getSortIndicator('category')}
              </th>
              <th onClick={() => requestSort('amount')}>
                Amount (Ksh) {getSortIndicator('amount')}
              </th>
              <th onClick={() => requestSort('date')}>
                Date {getSortIndicator('date')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount.toFixed(2)}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>
                  <button 
                    onClick={() => onDelete(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseTable;