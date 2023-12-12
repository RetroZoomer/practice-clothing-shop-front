export interface IProduct {
  id: number
  name: string
  image: string
  category: string
  description: string
  price: number
  sizes: [
    id: number,
    fit: number,
    count: number
  ]
}
