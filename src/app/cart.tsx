import { Button } from "@/components/Button";
import { Item } from "@/components/Item";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Items } from "@/types/Item";
import { BadgeDollarSign, Plus } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";

type Props = {
    items : Items[] | null
}


export default function Card({ items } : Props) {

    console.log(items);

    return (
        <View className="flex-1 gap-6 bg-gray-700 p-8 pt-16 relative">
           <Header/>

           <View className="w-full flex-row justify-between items-center mt-6">
            <Text className="text-lg text-white font-bold">Minhas Compras</Text>
            <View>
                <Text className='text-gray-300 text-xs font-light leading-tight mb-1'>Valor esperado</Text>
                <View className='flex-row items-center gap-1'>
                    <BadgeDollarSign size={18} color={colors.green[400]}/>
                    <Text className='text-green-400 text-lg font-semibold leading-tight'>
                    20.00
                    </Text>
                </View>  
            </View>
           </View>

           <FlatList data={items} renderItem={({item}) => <Item key={item.id} item={item}/>} keyExtractor={item => item.id}/>

            <Button className="w-10 h-10 p-8 justify-center items-center bg-white rounded-full absolute bottom-10 right-8 shadow">
                <Plus size={32} color={colors.gray[700]}/>
            </Button>
        </View>
    )
}