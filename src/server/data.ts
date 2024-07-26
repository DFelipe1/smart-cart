import { Items } from '@/types/Item';
import { Shop } from '@/types/shop';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

class Shops {
    private shop: Shop[] = []

    create(data: Shop){
        data.id = uuidv4()
        data.price = 0.00
        data.isGetting = false
        data.items = []
        this.shop.push(data)
    }

    addItem(id: string, item: Items){
        this.shop.find(s => s.id === id)?.items?.push(item)
    }

    getAll(){
        return this.shop
    }
}

export const shops = new Shops();

shops.create({name: "Festunha da minha gata",date: "06/Jun - 9AM"})
