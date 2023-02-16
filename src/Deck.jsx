import React from 'react'
import CardRow from './CardRow'

const cards = [
  {
    cardName: 'SquirrelGirl',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Iceman',
    location: 'hand',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Yondu',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'BuckyBarnes',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Carnage',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Killmonger',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Wave',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Deathlok',
    location: 'discarded',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'ShangChi',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Aero',
    location: 'destroyed',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'SheHulk',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
  },
  {
    cardName: 'Death',
    location: 'deck',
    surfaceEffect: 'PRISM_FOIL',
    revealEffect: 'COMIC',
    rarity: 'legendary',
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
