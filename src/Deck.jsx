import React from 'react'
import CardRow from './CardRow'

const cards = [
  {
    cardName: 'SquirrelGirl',
    location: 'deck',
  },
  {
    cardName: 'Iceman',
    location: 'hand',
  },
  {
    cardName: 'Yondu',
    location: 'deck',
  },
  {
    cardName: 'BuckyBarnes',
    location: 'deck',
  },
  {
    cardName: 'Carnage',
    location: 'deck',
  },
  {
    cardName: 'Killmonger',
    location: 'deck',
  },
  {
    cardName: 'Wave',
    location: 'deck',
  },
  {
    cardName: 'Deathlok',
    location: 'discarded',
  },
  {
    cardName: 'ShangChi',
    location: 'deck',
  },
  {
    cardName: 'Aero',
    location: 'destroyed',
  },
  {
    cardName: 'SheHulk',
    location: 'deck',
  },
  {
    cardName: 'Death',
    location: 'deck',
  },
]

const Deck = () => {
  const rows = [cards.slice(0, 6), cards.slice(6, 12)]

  return (
    <div key="my-deck" style={{ backgroundColor: '#340d54' }}>
      {rows.map((cards, index) => {
        return (
          <div key={`my-deck-row-${index}`}>
            <CardRow cards={cards} />
            <div style={{ clear: 'left' }}></div>
          </div>
        )
      })}
    </div>
  )
}

export default Deck
