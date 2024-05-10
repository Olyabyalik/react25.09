export type Product = {
    id:number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}


 export const productsArray: Product[] = [
  {
    id: 1 ,
    title:'Iphone 15 pro',
    description:'This is iphone 15pro',
    type:'phone',
    capacity: '128',
    price: 1000
  },
  {
    id:2 ,
    title:'Iphone 14 pro',
    description:'This is iphone 14pro',
    type:'phone',
    capacity: '254',
    price: 1500
  },
  {
    id:3 ,
    title:'Iphone 15 proMax',
    description:'This is iphone 15proMax',
    type:'phone',
    capacity: '128',
    price: 2000

  },
  {
    id: 4,
    title:'Iphone 12 pro',
    description:'This is iphone 12pro',
    type:'phone',
    capacity: '64',
    price: 750
  },
  {
    id: 5 ,
    title:'Iphone 13 pro',
    description:'This is iphone 13 pro',
    type:'phone',
    capacity: '128',
    price:800    
  },
  {
    id: 6,
    title:'Iphone 12 proMax',
    description:'This is iphone 12proMax',
    type:'phone',
    capacity: '254',
    price:850    
  },
]