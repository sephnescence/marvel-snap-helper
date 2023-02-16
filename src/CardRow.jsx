import React from 'react'
import Card from './Card'

const CardRow = (props) => {
  const { cards } = props

  return (
    <>
      {cards.map((card) => {
        const { cardName } = card
        return <Card key={cardName} {...card} />
      })}
    </>
  )
}

export default CardRow
