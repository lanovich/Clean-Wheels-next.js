export const categories = [
  {
    name: 'Легковые'
  },
  {
    name: 'Кроссоверы'
  },
  {
    name: 'Джипы'
  },
  {
    name: 'Подетальная химчистка'
  },
  {
    name: 'Другое'
  },
]

export const subProducts = [
  {
    name: 'Отбивка',
    price: 100,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Отбивка c пеной',
    price: 150,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Смыть мошек',
    price: 100,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Твердый воск',
    price: 150,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Воск',
    price: 100,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Чистка дисков',
    price: 200,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Чернение колес',
    price: 250,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Багажник',
    price: 200,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Помыть коврики',
    price: 100,
    imageUrl: '../public/logo.png'
  },
  {
    name: 'Чистка кожи',
    price: 150,
    imageUrl: '../public/logo.png'
  },
  
  {
    name: 'Кондиционер для кожаных частей',
    price: 100,
    imageUrl: '../public/logo.png'
  },
].map((obj, index) => ({id: index + 1, ...obj}))

export const products = [
  {
    name: 'Мытье кузова',
    price: 350,
    imageUrl: '/logo.png',
    categoryId: 1,
    subProducts: {
      connect: subProducts.slice(0, 8)
    }
  },
  {
    name: 'Мытье салона',
    price: 350,
    imageUrl: '/logo.png',
    categoryId: 1,
    subProducts: {
      connect: subProducts.slice(7, 11)
    }
  },
  {
    name: 'Полная химчистка салона',
    price: 8000,
    imageUrl: '/logo.png',
    categoryId: 1
  },
  {
    name: 'Дополнительно',
    price: 100,
    imageUrl: '/logo.png',
    categoryId: 1
  },
  {
    name: 'Мытье кузова',
    price: 400,
    imageUrl: '/logo.png',
    categoryId: 2
  },
  {
    name: 'Мытье салона',
    price: 400,
    imageUrl: '/logo.png',
    categoryId: 2,
  },
  {
    name: 'Полная химчистка салона',
    price: 9000,
    imageUrl: '/logo.png',
    categoryId: 2
  },
  {
    name: 'Дополнительно',
    price: 100,
    imageUrl: '/logo.png',
    categoryId: 2
  },
  {
    name: 'Мытье кузова',
    price: 500,
    imageUrl: '/logo.png',
    categoryId: 3
  },
  {
    name: 'Мытье салона',
    price: 500,
    imageUrl: '/logo.png',
    categoryId: 3
  },
  {
    name: 'Полная химчистка салона',
    price: 10000,
    imageUrl: '/logo.png',
    categoryId: 3
  },
  {
    name: 'Дополнительно',
    price: 100,
    imageUrl: '/logo.png',
    categoryId: 3
  },
  {
    name: 'Химчистка потолка',
    price: 2500,
    imageUrl: '/logo.png',
    categoryId: 4
  },
  {
    name: 'Химчистка торпеды и стоек',
    price: 1500,
    imageUrl: '/logo.png',
    categoryId: 4
  },
  {
    name: 'Химчистка сидений 1шт',
    price: 600,
    imageUrl: '/logo.png',
    categoryId: 4
  },
  {
    name: 'Химчистка ковролина',
    price: 1500,
    imageUrl: '/logo.png',
    categoryId: 4
  },
  {
    name: 'Химчистка дверей 1шт',
    price: 500,
    imageUrl: '/logo.png',
    categoryId: 4
  },
  {
    name: 'Химчистка багажника',
    price: 1500,
    imageUrl: '/logo.png',
    categoryId: 4
  },
]