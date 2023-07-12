const item1 =
  {
    child: 'Karla',
    toy: {
     name:  ' Mario',
     weight: '1LB',
     height: '6inches',
     image:"https://media.tenor.com/77TxJYKI-WwAAAAC/mario-dance.gif",
    features: [
        'run', 'talk','dance'
      ],
      color:  ' Blue and Red',
      cost:  `  25 dollars`
    },
    paid: false
  }

const item2 =
  {
    child: 'Roy',
    toy: {
     name: ' Monster Truck',
     weight: '3LB',
     height: '20inches',
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hpSO89tcW36C0TIXIRYI6APUd5pTLcH4IHfPEfnSx6qBqg-5KMrsg53zM7-i_ph1GVA&usqp=CAU",
    features: [
        'roar', 'spin','jump'
      ],
      color: ' Red and Light Blue',
      cost:  ` 50 Dollars`
    },
    paid: true
  }

const item3 =
  {
   child: 'Lan',
    toy: {
     name: ' Teddy Bear',
     weight: '4LB',
     height: '8inches',
     image:"https://media.tenor.com/CSEmGqY57QAAAAAM/excited-clapping.gif",
    features: [
        'sing', 'clap','blink'
      ],
      color: ' Brown',
      cost: ` 30 Dollars`
    },
    paid: true
  }


module.exports = [item1,item2,item3]