import React, { useCallback } from 'react'

const Card = (props) => {
  const getOpacity = useCallback((location) => {
    if (location === 'destroyed') {
      return 0.15
    } else if (location === 'discarded') {
      return 0.3
    } else if (location === 'hand') {
      return 1
    } else {
      return 0.55 // deck
    }
  }, [])

  const calculatedSurfaceEffect = useCallback((surfaceEffectConfig) => {
    return surfaceEffectConfig ? 'surface_effect=' + surfaceEffectConfig : ''
  })

  const calculatedRevealEffect = useCallback((revealEffectConfig) => {
    return revealEffectConfig ? 'reveal_effect=' + revealEffectConfig : ''
  })

  const calculatedRarity = useCallback((rarityConfig) => {
    let rarity = '' // common
    if (rarityConfig === 'uncommon') {
      rarity = '2'
    } else if (rarityConfig === 'rare') {
      rarity = '3'
    } else if (rarityConfig === 'epic') {
      rarity = '4'
    } else if (rarityConfig === 'legendary') {
      rarity = '5'
    } else if (rarityConfig === 'ultra') {
      rarity = '6'
    } else if (rarityConfig === 'infinity') {
      rarity = '7'
    }

    return rarity ? 'rarity=' + rarity : ''
  }, [])

  const getImageSource = useCallback(
    (cardName, surfaceEffect, revealEffect, rarity) => {
      let sourceParts = []
      let imageSource = `/images/cards/${cardName}`

      const calculateddSurfaceEffect = calculatedSurfaceEffect(surfaceEffect)
      if (calculateddSurfaceEffect !== '') {
        sourceParts.push(calculateddSurfaceEffect)
      }

      const calculateddRevealEffect = calculatedRevealEffect(revealEffect)
      if (calculateddRevealEffect !== '') {
        sourceParts.push(calculateddRevealEffect)
      }

      const calculateddRarity = calculatedRarity(rarity)
      if (calculateddRarity !== '') {
        sourceParts.push(calculateddRarity)
      }

      if (sourceParts.length >= 1) {
        imageSource += '__' + sourceParts.join('&')
      }

      return `${imageSource}.png`
    },
    []
  )

  const { cardName, location, surfaceEffect, revealEffect, rarity } = props

  const imageSource = getImageSource(
    cardName,
    surfaceEffect,
    revealEffect,
    rarity
  )
  const opacity = getOpacity(location)

  return (
    <div key={`${cardName}-inner`}>
      <img
        key={`${cardName}-img`}
        // src={`${imageSource}`}
        src={`/images/snapfan/${cardName}.webp`}
        onError={({ currentTarget }) => {
          // Default to pre calculated images from Snap Fan
          currentTarget.onerror = null
          currentTarget.src = `/images/snapfan/${cardName}.webp`
        }}
        alt={cardName}
        style={{
          width: 150,
          display: 'inline',
          float: 'left',
          opacity,
        }}
      />
    </div>
  )
}

export default Card
