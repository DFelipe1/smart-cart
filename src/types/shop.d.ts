import { Items } from "@/types/Item"

export type Shop = {
    id?: string
    name: string
    date: string
    price?: number
    items?: Item[]
}