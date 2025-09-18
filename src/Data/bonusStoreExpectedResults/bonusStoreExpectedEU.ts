
type bonusType = 'fs' | 'wheel' | 'cash' | 'tips'
interface Bonus {
  type?: bonusType
  title?: string
  price?: string | null
  fiatTitle?: string
  fiatPrice?: string
}
const EU_CITIZEN_BONUSES_REAL: Bonus[] = [
    {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {

    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const EU_CITIZEN_BONUSES_KINGS_COINS: Bonus[] = [
   {
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  { title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

const EU_KING_BONUSES_REAL: Bonus[] = [
   { title: 'King’s Tips €/$5', price: null },
  { title: 'King’s Tips €/$50', price: null },
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to 500 EUR!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to 2000 EUR!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  { title: 'King’s Tips €/$10', price: null },
  { title: 'King’s Tips €/$20', price: null },
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

const EU_KING_BONUSES_KINGS_COINS: Bonus[] = [{"price": "Wager: 30x / Spin Value: EUR 0.10", "title": "Wheel Of Fortune: Up To 150 FS!"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 500 FS!"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 500 EUR!"}, {"price": "Wager: 30х / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 2000 EUR!"}, {"price": "Wager: 30x / Spin Value: EUR 0.10", "title": "Disco Party"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Merge Up"}, {"price": "Wager: 20x / Spin Value: EUR 0.50", "title": "Wild Cash"}, {"fiatPrice": "Wager: 3x", "fiatTitle": "King’s Cash"}]

const EU_DUKE_BONUSES_REAL: Bonus[] =  [
  { title: 'King’s Tips €/$5', price: null },
  { title: 'King’s Tips €/$50', price: null },
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to 500 EUR!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Wheel of Fortune: Up to 2000 EUR!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  { title: 'King’s Tips €/$10', price: null },
  { title: 'King’s Tips €/$20', price: null },
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

const EU_DUKE_BONUSES_KINGS_COINS: Bonus[] = [{"price": "Wager: 30x / Spin Value: EUR 0.10", "title": "Wheel Of Fortune: Up To 150 FS!"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 500 FS!"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 500 EUR!"}, {"price": "Wager: 30х / Spin Value: EUR 0.20", "title": "Wheel Of Fortune: Up To 2000 EUR!"}, {"price": "Wager: 30x / Spin Value: EUR 0.10", "title": "Disco Party"}, {"price": "Wager: 30x / Spin Value: EUR 0.20", "title": "Merge Up"}, {"price": "Wager: 20x / Spin Value: EUR 0.50", "title": "Wild Cash"}, {"fiatPrice": "Wager: 3x", "fiatTitle": "King’s Cash"}]

const EU_BARONET_BONUSES_REAL: Bonus[] =  [
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const EU_BARONET_BONUSES_KINGS_COINS: Bonus[] = [
  {
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  { title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

const EU_KNIGHT_BONUSES_REAL: Bonus[] = [
  {
    title: 'Wheel of Fortune: Up to 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel of Fortune: Up to 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: 'Panda Luck 100 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 25 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Panda Luck 50 FS',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  }
]

const EU_KNIGHT_BONUSES_KINGS_COINS: Bonus[] = [
  {
    title: 'Wheel Of Fortune: Up To 150 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.10'
  },
  {
    title: 'Wheel Of Fortune: Up To 500 FS!',
    price: 'Wager: 30x / Spin Value: EUR 0.20'
  },
  {
    title: "Kraken's Hunger",
    price: 'Wager: 30x / Spin Value: EUR 0.05'
  },
  { title: 'Disco Party', price: 'Wager: 30x / Spin Value: EUR 0.10' },
  { fiatTitle: 'King’s Cash', fiatPrice: 'Wager: 3x' }
]

export const EU_EXPECTED_RESULTS_BONUS_STORE = {
  CITIZEN: {
    REAL: EU_CITIZEN_BONUSES_REAL,
    KINGS_COINS: EU_CITIZEN_BONUSES_KINGS_COINS
  },
  DUKE: {
    REAL: EU_DUKE_BONUSES_REAL,
    KINGS_COINS: EU_DUKE_BONUSES_KINGS_COINS
  },
  KING: {
    REAL: EU_KING_BONUSES_REAL,
    KINGS_COINS: EU_KING_BONUSES_KINGS_COINS
  }, 
  KNIGHT: {
    REAL: EU_KNIGHT_BONUSES_REAL,
    KINGS_COINS: EU_KNIGHT_BONUSES_KINGS_COINS
  },
  BARONET: {
    REAL: EU_BARONET_BONUSES_REAL,
    KINGS_COINS: EU_BARONET_BONUSES_KINGS_COINS
  }
}
