import React from "react"

export default function Input({
  label,
  id,
  name,
  title,
  value,
  onChange,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  )
}
