import React from "react"
import Body from "./Body"
import Title from "./Title"

const Content = ({ content }) => {
  return (
    <div>
      {content.map((section, index) => {
        return (
          <div className="first:mt-0 mt-4" key={"section-" + index}>
            <Title text={section.title} />
            {section.content.map((content, index) => {
              return <Body content={content} key={index} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Content
