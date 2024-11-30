import React from "react"

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  hidOp,
  expList,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          {hidOp}
        </option>
        {expList.map((data, i) => {
          return (
            <option key={i} value={data}>
              {data}
            </option>
          )
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  )
}
