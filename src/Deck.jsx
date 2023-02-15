import React from 'react'

const cards = [
  'Squirrel Girl',
  'Iceman',
  'Yondu',
  'Bucky Barnes',
  'Carnage',
  'Killmonger',
  'Wave',
  'Deathlock',
  'Shang-Chi',
  'Aero',
  'She-Hulk',
  'Death',
]

const Deck = () => {
  return (
    <div>
      {cards.map((cardName) => {
        return <div key={cardName}>{cardName}</div>
      })}
    </div>
  )
}

export default Deck
