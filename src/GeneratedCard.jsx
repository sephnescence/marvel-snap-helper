import React from 'react'

const GeneratedCard = (props) => {
  const { cardName, location } = props
  return (
    <div className={`generated-card location-${location}`}>
      <div className="generated-card-inner">
        <div
          className="generated-card-background-one"
          style={{
            backgroundImage: `url("/images/generated/${cardName}/Background01.webp")`,
          }}
        >
          <div
            className="generated-card-background-two"
            style={{
              backgroundImage: `url("/images/generated/${cardName}/Background02.webp")`,
            }}
          ></div>
        </div>
        <div
          className="generated-card-foreground"
          style={{
            backgroundImage: `url("/images/generated/${cardName}/Foreground.webp")`,
          }}
        >
          <div
            className="generated-card-logo"
            style={{
              backgroundImage: `url("/images/generated/${cardName}/Logo.webp")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default GeneratedCard
