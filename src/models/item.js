const item1 =
  {
    child: 'Karla',
    toy: {
     name:  'Mario',
     weight: '1LB',
     height: '6inches',
     image:"https://media.tenor.com/77TxJYKI-WwAAAAC/mario-dance.gif",
    features: [
        'run', 'talk','dance'
      ],
      color:  'Blue and Red',
      cost:  `25 dollars`
    },
    paid: false
  }

const item2 =
  {
    child: 'Roy',
    toy: {
     name: 'Monster Truck',
     weight: '3LB',
     height: '20inches',
     image:"https://media.rainpos.com/7060/71j6AheQNL._AC_SL1500_.jpg",
    features: [
        'roar', 'spin','jump'
      ],
      color: 'Red and Blue',
      cost:  `50 Dollars`
    },
    paid: true
  }

const item3 =
  {
   child: 'Lan',
    toy: {
     name: 'Teddy Bear',
     weight: '4LB',
     height: '8inches',
     image:"https://media.tenor.com/CSEmGqY57QAAAAAM/excited-clapping.gif",
    features: [
        'sing', 'clap','blink'
      ],
      color: 'Brown',
      cost: ` 30 Dollars`
    },
    paid: true
  }


module.exports = [item1,item2,item3]