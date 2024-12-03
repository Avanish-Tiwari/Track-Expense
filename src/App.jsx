import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  })
  const [expenses, setExpenses] = useState(expenseData)
  const [editRowID,setEditRowID]=useState("")

  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editRowID={editRowID} setEditRowID={setEditRowID} />
      <ExpenseTable setEditRowID={setEditRowID} expenses={expenses} setExpenses={setExpenses} expense={expense} setExpense={setExpense}/>
      
    </div>
  </main>
  )
}

export default App
