import CVContent from "../Content/enGB/cv-content.json"

const CV = () => {
  return (
    <div>
      {CVContent.map((section) => {
        return (
          <div className="first:mt-0 mt-4" key={section.key}>
            {section.title && (
              <h2 className="text-lg py-2 border-t border-b border-black mb-2 font-bold">
                {section.title}
              </h2>
            )}
            {section.content.map((content) => {
              return (
                <div className="mt-2 first:mt-0" key={content.key}>
                  {content.title &&
                    content.title.map((title, index) => {
                      return (
                        <div
                          className="font-semibold"
                          key={content.key + index}
                        >
                          {title}
                        </div>
                      )
                    })}
                  <div className="italic">{content.subtitle}</div>
                  {content.body &&
                    content.body.map((body) => {
                      return <p>{body}</p>
                    })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default CV
