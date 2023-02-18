import React from 'react'

const GeneratedCard = (props) => {
  const { cardName } = props
  return (
    <div
      style={{
        display: 'inline-block',
        // WebkitFilter: 'grayscale(80%)', // Will be used later
        // opacity: 0.8, // Will be used later
        width: 201,
        height: 201,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 201,
          height: 201,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 26,
            width: 148,
            height: 201,
            backgroundImage: `url("/images/generated/${cardName}/Background01.webp")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '201px 201px',
            backgroundPosition: 'center center',
            WebkitMaskImage: 'url("/images/generated/cardmask.webp")',
            WebkitMaskSize: '148px 201px',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <div
            style={{
              width: 148,
              height: 201,
              backgroundImage: `url("/images/generated/${cardName}/Background02.webp")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '201px 201px',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
        <div
          style={{
            position: 'absolute',
            width: 201,
            height: 201,
            backgroundImage: `url("/images/generated/${cardName}/Foreground.webp")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '230px 230px',
            backgroundPosition: 'center center',
          }}
        >
          <div
            style={{
              marginTop: 120,
              width: 201,
              height: 102,
              backgroundImage: `url("/images/generated/${cardName}/Logo.webp")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '201px 102px',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default GeneratedCard
