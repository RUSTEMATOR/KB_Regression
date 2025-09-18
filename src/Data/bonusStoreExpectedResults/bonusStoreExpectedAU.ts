
type bonusType = 'fs' | 'wheel' | 'cash' | 'tips'
interface Bonus {
  type?: bonusType
  title?: string
  price?: string | null
  fiatTitle?: string
  fiatPrice?: string
}
const AU_CITIZEN_BONUSES_REAL: Bonus[] = [
    {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const AU_CITIZEN_BONUSES_KINGS_COINS: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  { type: 'fs', title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { type: 'cash', fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

const AU_KING_BONUSES_REAL: Bonus[] = [
  { type: 'tips', title: 'King’s Tips A$7.5', price: null },
  { type: 'tips', title: 'King’s Tips A$75', price: null },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to A$750!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to A$3000!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  { type: 'tips', title: 'King’s Tips A$15', price: null },
  { type: 'tips', title: 'King’s Tips A$30', price: null },
  {
    type: 'fs',
    title: 'Wild Tiger 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Wild Tiger 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Wild Tiger 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Lady Wolf Moon Megaways 25 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },  
  {
    type: 'fs',
    title: 'Panda Luck 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Wild Tiger 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Lady Wolf Moon Megaways 50 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    type: 'fs',
    title: 'Lady Wolf Moon Megaways 75 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    type: 'fs',
    title: 'Lady Wolf Moon Megaways 100 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    type: 'fs',
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const AU_KING_BONUSES_KINGS_COINS: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To A$750!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To A$3000!',
    price: 'Wager: 30х / Spin Value: EUR 0.20'
  },
  { type: 'fs', title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { type: 'fs', title: 'Merge Up', price: 'Wager: 30x / Spin Value: EUR 0.20' },
  { type: 'fs', title: 'Wild Cash', price: 'Wager: 20x / Spin Value: EUR 0.50' },
  { type: 'cash', fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

const AU_DUKE_BONUSES_REAL: Bonus[] =  [
  { type: 'tips', title: 'King’s Tips A$7.5', price: null },
  { type: 'tips', title: 'King’s Tips A$75', price: null },
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to A$750!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to A$3000!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  { title: 'King’s Tips A$15', price: null },
  { title: 'King’s Tips A$30', price: null },
  {
    title: 'Wild Tiger 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wild Tiger 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wild Tiger 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Lady Wolf Moon Megaways 25 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    title: 'Panda Luck 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wild Tiger 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Lady Wolf Moon Megaways 50 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    title: 'Lady Wolf Moon Megaways 75 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    title: 'Lady Wolf Moon Megaways 100 FS',
    price: 'Wager: 20x / Spin Value: EUR 0.50'
  },
  {
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const AU_DUKE_BONUSES_KINGS_COINS: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To A$750!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To A$3000!',
    price: 'Wager: 30х / Spin Value: EUR 0.20'
  },
  { type: 'fs', title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { type: 'fs', title: 'Merge Up', price: 'Wager: 30x / Spin Value: EUR 0.20' },
  { type: 'fs', title: 'Wild Cash', price: 'Wager: 20x / Spin Value: EUR 0.50' },
  { type: 'cash', fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

const AU_BARONET_BONUSES_REAL: Bonus[] =  [ 
  {
    type: 'wheel',
    title: "Wheel of Fortune: Up to 150 FS!",
    price: "Wager: 30x / Spin Value: EUR 0.10"
  },
  {
    type: 'wheel',
    title: "Wheel of Fortune: Up to 500 FS!",
    price: "Wager: 30x / Spin Value: EUR 0.20"
  },
  {
    type: 'fs',
    title: "Panda Luck 100 FS",
    price: "Wager: 30x / Spin Value: EUR 0.10"
  },
  {
    type: 'fs',
    title: "Panda Luck 25 FS",
    price: "Wager: 30x / Spin Value: EUR 0.10"
  },
  {
    type: 'fs',
    title: "Panda Luck 75 FS",
    price: "Wager: 30x / Spin Value: EUR 0.10"
  },
  {
    type: 'fs',
    title: "Panda Luck 50 FS",
    price: "Wager: 30x / Spin Value: EUR 0.10"
  }
]

const AU_BARONET_BONUSES_KINGS_COINS: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  {
    type: 'fs',
    title: 'Disco Party',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'cash',
    fiatTitle: 'King’s Cash',
    fiatPrice: 'Wager: 3x'
  }
]

const AU_KNIGHT_BONUSES_REAL: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 75 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'fs',
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const AU_KNIGHT_BONUSES_KINGS_COINS: Bonus[] = [
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'wheel',
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    type: 'fs',
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  {
    type: 'fs',
    title: 'Disco Party',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    type: 'cash',
    fiatTitle: 'King’s Cash',
    fiatPrice: 'Wager: 3x'
  }
]

export const AU_EXPECTED_RESULTS_BONUS_STORE = {
  CITIZEN: {
    REAL: AU_CITIZEN_BONUSES_REAL,
    KINGS_COINS: AU_CITIZEN_BONUSES_KINGS_COINS
  },
  DUKE: {
    REAL: AU_DUKE_BONUSES_REAL,
    KINGS_COINS: AU_DUKE_BONUSES_KINGS_COINS
  },
  KING: {
    REAL: AU_KING_BONUSES_REAL,
    KINGS_COINS: AU_KING_BONUSES_KINGS_COINS
  }, 
  KNIGHT: {
    REAL: AU_KNIGHT_BONUSES_REAL,
    KINGS_COINS: AU_KNIGHT_BONUSES_KINGS_COINS
  },
  BARONET: {
    REAL: AU_BARONET_BONUSES_REAL,
    KINGS_COINS: AU_BARONET_BONUSES_KINGS_COINS
  }
}

