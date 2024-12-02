import React from "react"

export default function ContextMenu({ menuPosition, setMenuPosition, setExpenses, rowID }) {
  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log("editing")
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
