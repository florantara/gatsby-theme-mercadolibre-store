interface IImage {
  image: any
}

export interface IProduct {
  id: string
  title: string
  currency_id: string
  price: string
  original_price: string
  video_id?: string
  permalink: string
  itemDescription: string
  accepts_mercadopago: boolean
  available_quantity: number // or string?
  itemImages: IImage[]
  itemThumbnail: IImage
  fields: { slug: string }
  itemCategory: {
    category_name: string
    category_id: string
  }
}

export interface IProductQuery {
  mercadoLibreProduct: IProduct
}

export interface IProductNode {
  node: IProduct
}
export interface IProductsQuery {
  edges: IProductNode[]
}
