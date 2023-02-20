import React from "react"

const TextBody = ({ content }) => {
  return (
    <div className="mt-2 first:mt-0">
      {content.title &&
        content.title.map((title, index) => {
          return (
            <div className="font-semibold" key={"content-title-" + index}>
              {title}
            </div>
          )
        })}
      <div className="italic">{content.subtitle}</div>

      {content.body &&
        content.body.map((body, index) => {
          switch (content.type) {
            case "text":
              return <p key={"body-" + index}>{body}</p>
            default:
              return <React.Fragment />
          }
        })}
    </div>
  )
}

export default TextBody
