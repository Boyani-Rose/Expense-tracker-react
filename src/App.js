
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';

function App() {
  
  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <ExpenseForm />
    <ExpenseTable
    expenses={filteredExpenses} 
    onDelete={deleteExpense} 
    sortConfig={sortConfig}
    requestSort={requestSort}
    />
   
  </div>
   
  );
}

export default App;
