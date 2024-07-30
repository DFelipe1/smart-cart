import { Items } from '@/types/Item';
import { Shop } from '@/types/shop';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class Shops {
    private shops: Shop[] = []

    create(data: Shop){
        data.id = uuidv4()
        data.price = 0.00
        data.items = []
        this.shops.push(data)
    }

    remove(id: string){
        const newShop = this.shops.filter(s => s.id !== id)
        this.shops = newShop
    }

    addItem(id: string | string[] | undefined, item: Items){
        this.shops.find(s => s.id === id)?.items?.push(item)
    }
    
    removeItem(id: string | string[] | undefined, itemId: string){
        const newItems = this.shops.find(s => s.id === id)?.items?.filter(i => i.id !== itemId)
    }


    getAll(){
        return this.shops
    }
}

export const shops = new Shops();

shops.create({name: "Festunha da minha gata",date: "06/Jun - 9AM"})
shops.create({name: "Festunha da minha gata",date: "06/Jun - 9AM"})
shops.addItem(shops.getAll()[0].id, {
    name: "biscoito",
    id: "111",
    category: "Padaria",
    isGetting: false,
    metric: 'a',
    price: 5,
    unity:2    
})
shops.addItem(shops.getAll()[0].id, {
    name: "biscoito",
    id: "121",
    category: "Bebida",
    isGetting: false,
    metric: 'a',
    price: 5,
    unity:2    
})
shops.addItem(shops.getAll()[0].id, {
    name: "biscoito",
    id: "113",
    category: "bolacha",
    isGetting: false,
    metric: 'a',
    price: 5,
    unity:2    
})

// shops.remove(shops.getAll()[0].id)