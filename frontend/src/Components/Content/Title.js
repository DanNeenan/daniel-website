import React from "react"

const Title = ({ text }) => {
  if (!text) {
    return <React.Fragment />
  }
  return (
    <h2 className="text-lg py-2 border-t border-b border-black mb-2 font-bold">
      {text}
    </h2>
  )
}

export default Title
