const item1 =
  {
    child: 'Karla',
    toy: {
     name:  'Mario',
     weight: '1LB',
     height: '6inches',
    features: [
        'run', 'talk','dance'
      ],
      color:  'white and red',
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
    features: [
        'roar', 'spin','jump'
      ],
      color: 'Blue',
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
    features: [
        'sing', 'clap','blink'
      ],
      color: 'Brown',
      cost: ` 30 Dollars`
    },
    paid: true
  }


module.exports = [item1,item2,item3]