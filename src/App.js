import logo from './logo.svg';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState('2023');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <ExpenseForm onAddExpense={addExpenseHandler} />
    <ExpenseFilter selectedYear={filterYear} onChangeYear={setFilterYear} />
    <ExpenseList expenses={filteredExpenses} />
  </div>
   
  );
}

export default App;
