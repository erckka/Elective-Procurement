const PRdata = [
  {
    PRNumber: '202403041056',
    Supplier: 'Unilab',
    ContactPerson: 'Travis Simpson',
    OrderCreated: '03-04-2024 10:56',
    Status: 'Pending',
    Street: '138 Street',
    City: 'Los Angeles',
    State: 'California',
    Country: 'US',
    ZipCode: '8102',
    // Item: 'Paracetamol',
    // ItemDesc: 'box',
    // Qty: '5',
    // InvoiceNo: '',
    Items: [
      {
        Item: 'Paracetamol',
        ItemDesc: 'box',
        UnitPrice: '5',
        Qty: '5',
      },
      {
        Item: 'Ibuprofen',
        ItemDesc: 'bottle',
        UnitPrice: '10',
        Qty: '10',
      },
    ],
  },
  {
    PRNumber: '202403041058',
    Supplier: 'Luxe Organics',
    ContactPerson: 'Kinemberly Chu',
    OrderCreated: '03-04-2024 10:58',
    Status: 'Approved',
    Street: 'Apple Street',
    InvoiceNo: '',
  },
  {
    PRNumber: '202403041058',
    Supplier: 'P&G',
    ContactPerson: 'Kinemberly Chu',
    OrderCreated: '03-04-2024 10:58',
    Status: 'Rejected',
    InvoiceNo: '',
  },
]

export default PRdata
