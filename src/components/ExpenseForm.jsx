import React, { useState } from "react"
import Input from "./Input"
import Select from "./Select"


export default function ExpenseForm({ setExpenses }) {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  })
  const [errors, setErrors] = useState({})
  const validationConfig={
    title:[
      {required:true, message:"Please Enter Title"},
      {minLength:5, message:"Title should be at least 5 characters"}
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [{ required: true, message: 'Please enter an amount' },
      
    ],
    email: [
      { required: true, message: 'Please enter an email' },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please enter a valid email',
      },
    ],
  }
  const validate = (formData) => {
    const errorMessage = {}

    Object.entries(formData).forEach(([element,val]) => {
      validationConfig[element].some((rule)=>{
        if (rule.required && !val) {
          errorMessage[element] = rule.message
          return true
        }
        if (rule.minLength && val.length<5) {
          errorMessage[element] = rule.message
          return true
        }
        if (rule.pattern && !rule.pattern.test(val)) {
          errorsData[element] = rule.message
          return true
        }
      })
    });
    setErrors(errorMessage)
    return errorMessage
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationData = validate(expense)
    if (Object.keys(validationData).length) return
    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ])
    expense.title = ""
    expense.category = ""
    expense.amount = ""
  }


  const handleChange = (e) => {
    const { name, value } = e.target

    setExpense((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }))
    setErrors({})
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
        type='text'
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        hidOp="Select Menu"
        expList={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
        type='number'
      />

      <button className="add-btn">Add</button>
    </form>
  )
}
