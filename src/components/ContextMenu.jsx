import React from "react"

export default function ContextMenu({ expenses , menuPosition, setMenuPosition, setExpenses, rowID,expense , setExpense,setEditRowID }) {
  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const editData=(expenses.find((data)=>data.id==rowID))
          // console.log(editData)
          setEditRowID(rowID)
          setExpense({
            title:`${editData.title}`,
            category:`${editData.category}`,
            amount:`${editData.amount}`
          })
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState)=>prevState.filter((expense)=>expense.id!=rowID))
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}
