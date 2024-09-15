export interface ListProducts {
    id: string,
    name: string,
    price: number,
    discount: string[]
    category: string[],
}

export type typeHorizontalList = 'colors' | 'categories' | 'products' | 'productExtraOptions'
