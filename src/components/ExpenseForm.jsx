import React, { useState } from "react"
import Input from "./Input"
import Select from "./Select"

export default function ExpenseForm({ setExpenses }) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  })
  const [errors, setErrors] = useState({})
  const validate = (formData) => {
    const errorMessage = {}
    if (!formData.title) {
      errorMessage.title = "Title is required"
    }
    if (!formData.category) {
      errorMessage.category = "Category is required"
    }
    if (!formData.amount) {
      errorMessage.amount = "Amount is required"
    }
    setErrors(errorMessage)
    return errorMessage
    // console.log(errorMessage)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationData = validate(expense)
    if (Object.keys(validationData).length) return
    // console.log(validationData)
    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ])
    expense.title = ""
    expense.category = ""
    expense.amount = ""
  }
  // console.log("Rendering..")
  // const getFormData= (form)=>{
  //   const formData=new FormData(form);
  //   const data={}
  //   for(const [key,value] of formData.entries()){
  //     data[key]=value
  //   }
  //   return data
  // }

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target

    setExpense((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }))
    setErrors({})
  }
  // console.log(expense)
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
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
      />

      <button className="add-btn">Add</button>
    </form>
  )
}
