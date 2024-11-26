import React, { useState } from 'react'

export default function ExpenseForm({setExpenses}) {
  const [title,setTitle]=useState("")
  const [category,setCategory]=useState("")
  const [amount,setAmount]=useState("")
  const [expense,setExpense]=useState({title:"",category:"",amount:""})
  const handleSubmit= (e) =>{
    e.preventDefault()
    // console.log(getFormData(e.target))
    // setExpenses((preState)=>[...preState,{...getFormData(e.target), id:crypto.randomUUID()}])
    // e.target.reset();
    // console.log({title,category,amount})
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

  const handleChange=(e)=>{
      console.log(e.target)
      const [name,value]=e.target
      
        setExpense((prevState) => ({
          ...prevState,
          [name]: e.target.value,
        }))

  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name='title' value={expense.title} onChange={(e)=>setExpense((prevState)=>({...prevState,title:e.target.value}))} required/>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name='category' value={expense.category} onChange={(e)=>setExpense((prevState)=>({...prevState,category:e.target.value}))} required>
            <option value="" hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name='amount' value={expense.amount} onChange={(e)=>setExpense((prevState)=>({...prevState,amount:e.target.value}))} required/>
        </div>
        <button className="add-btn">Add</button>
      </form>
  )
}
